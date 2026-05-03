import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode,
} from "react";
import { useId } from "react";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------ */
/*  Helpers internes                                             */
/* ------------------------------------------------------------ */

interface BaseFieldProps {
  label?: string;
  helper?: ReactNode;
  error?: string;
  required?: boolean;
}

function FieldLabel({
  htmlFor,
  label,
  required,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-[var(--color-gray-soft)]"
    >
      {label}
      {required && (
        <span
          className="ml-1 text-[var(--color-red-alert)]"
          aria-hidden="true"
          title="Champ obligatoire"
        >
          *
        </span>
      )}
    </label>
  );
}

function FieldFooter({
  helperId,
  errorId,
  helper,
  error,
}: {
  helperId?: string;
  errorId?: string;
  helper?: ReactNode;
  error?: string;
}) {
  return (
    <>
      {helper && !error && (
        <p id={helperId} className="mt-1 text-[12px] text-[var(--color-gray-soft)]">
          {helper}
        </p>
      )}
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1 text-[12px] font-medium text-[var(--color-red-alert)]"
        >
          {error}
        </p>
      )}
    </>
  );
}

const baseInputClass =
  "w-full rounded-[10px] border bg-white px-3 py-2.5 text-[14px] text-[var(--color-navy)] focus:ring-2 focus:ring-[var(--color-gold)]/30";

function inputBorderClass(error?: string) {
  return error
    ? "border-[var(--color-red-alert)] focus:border-[var(--color-red-alert)]"
    : "border-[var(--color-light-gray)] focus:border-[var(--color-gold)]";
}

/* ------------------------------------------------------------ */
/*  FormField — input texte                                      */
/* ------------------------------------------------------------ */

interface FormFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id">,
    BaseFieldProps {
  label: string;
}

export function FormField({
  label,
  helper,
  error,
  required,
  className,
  ...rest
}: FormFieldProps) {
  const id = useId();
  const helperId = helper ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="block">
      <FieldLabel htmlFor={id} label={label} required={required} />
      <input
        id={id}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(baseInputClass, inputBorderClass(error), className)}
        {...rest}
      />
      <FieldFooter helperId={helperId} errorId={errorId} helper={helper} error={error} />
    </div>
  );
}

/* ------------------------------------------------------------ */
/*  FormTextarea — zone de texte multiligne                      */
/* ------------------------------------------------------------ */

interface FormTextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id">,
    BaseFieldProps {
  label?: string;
}

export function FormTextarea({
  label,
  helper,
  error,
  required,
  className,
  ...rest
}: FormTextareaProps) {
  const id = useId();
  const helperId = helper ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="block">
      {label && <FieldLabel htmlFor={id} label={label} required={required} />}
      <textarea
        id={id}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(baseInputClass, inputBorderClass(error), "resize-y min-h-[80px]", className)}
        {...rest}
      />
      <FieldFooter helperId={helperId} errorId={errorId} helper={helper} error={error} />
    </div>
  );
}

/* ------------------------------------------------------------ */
/*  FormSelect — liste déroulante                                */
/* ------------------------------------------------------------ */

interface FormSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "id">,
    BaseFieldProps {
  label?: string;
  children: ReactNode;
}

export function FormSelect({
  label,
  helper,
  error,
  required,
  className,
  children,
  ...rest
}: FormSelectProps) {
  const id = useId();
  const helperId = helper ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="block">
      {label && <FieldLabel htmlFor={id} label={label} required={required} />}
      <select
        id={id}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(baseInputClass, inputBorderClass(error), "appearance-none pr-10 cursor-pointer", className)}
        {...rest}
      >
        {children}
      </select>
      <FieldFooter helperId={helperId} errorId={errorId} helper={helper} error={error} />
    </div>
  );
}
