// KIIKA service worker — push notifications + PWA shell.
//
// Kept intentionally tiny: no offline cache (would require careful
// invalidation against Next's hashed assets), just push event handling
// and a focused re-open behavior on click.

self.addEventListener("install", (event) => {
  // Activate immediately on first install — no need to keep an old SW
  // around since we don't cache anything yet.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", (event) => {
  if (!event.data) return;

  let payload;
  try {
    payload = event.data.json();
  } catch {
    payload = { title: "KIIKA", body: event.data.text() };
  }

  const title = payload.title || "KIIKA";
  const options = {
    body: payload.body || "",
    icon: payload.icon || "/icons/icon-192.png",
    badge: payload.badge || "/icons/icon-192.png",
    tag: payload.tag, // collapse same-tag notifications
    data: { url: payload.url || "/" },
    requireInteraction: false,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";

  event.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        // Focus an existing tab if there is one, else open a new one.
        for (const client of clientList) {
          if (client.url.includes(self.registration.scope) && "focus" in client) {
            client.navigate(url);
            return client.focus();
          }
        }
        if (self.clients.openWindow) return self.clients.openWindow(url);
      }),
  );
});
