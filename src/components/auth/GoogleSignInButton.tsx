import { signInWithGoogleAction } from "@/app/login/actions";

interface GoogleSignInButtonProps {
  /** Where to send the user after a successful sign-in. Must be a relative path. */
  next?: string;
  /** Button label. Defaults to "Continuer avec Google". */
  label?: string;
}

export function GoogleSignInButton({
  next = "/",
  label = "Continuer avec Google",
}: GoogleSignInButtonProps) {
  return (
    <form action={signInWithGoogleAction}>
      <input type="hidden" name="next" value={next} />
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2.5 rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-4 py-2.5 text-[14px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]/40 transition-colors min-h-11"
      >
        <GoogleGlyph />
        {label}
      </button>
    </form>
  );
}

/**
 * Official Google "G" mark, multi-coloured. Inline SVG so the brand
 * colours always render the same regardless of the surrounding theme.
 */
function GoogleGlyph() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.614z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}

interface AuthDividerProps {
  label?: string;
}

export function AuthDivider({ label = "ou" }: AuthDividerProps) {
  return (
    <div className="flex items-center gap-3 my-4" aria-hidden="true">
      <span className="flex-1 h-px bg-[var(--color-light-gray)]" />
      <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
        {label}
      </span>
      <span className="flex-1 h-px bg-[var(--color-light-gray)]" />
    </div>
  );
}
