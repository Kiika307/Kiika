import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KIIKA — Espace praticien",
  description:
    "KIIKA — du Ki au Ka : la plateforme des praticiens et accompagnants holistiques pour suivre, accompagner et faire évoluer leurs clients.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "KIIKA",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F1F3A",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('intio-theme');if(t!=='light'&&t!=='dark'&&t!=='academia'){t='academia';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','academia');}})();`,
          }}
        />
      </head>
      <body className="min-h-full">
        <a href="#main-content" className="skip-link">Aller au contenu principal</a>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js').catch(function(){}); }); }`,
          }}
        />
        <Toaster
          position="bottom-right"
          duration={4000}
          richColors
          closeButton
          toastOptions={{
            style: {
              fontFamily: "var(--font-sans)",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
