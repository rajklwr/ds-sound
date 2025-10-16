import { site } from "@/lib/site";
import { clsx } from "clsx";

type Props = {
  className?: string;
  children?: React.ReactNode;
  label?: string; // optional custom label
};

export function CallBtn({ className, children, label }: Props) {
  const phone = site.phone ?? "";
  const readable = phone.replace(/^\+91-?/, "+91 ");

  return (
    <a
      href={`tel:${phone}`}
      aria-label={label ?? `Call DS Sound ${readable}`}
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold",
        "bg-brand-accent text-white",               // light text for visibility
        "ring-1 ring-white/20 shadow-[0_0_24px_rgba(34,197,94,.25)]",
        "hover:opacity-95 active:opacity-90 transition",
        className
      )}
    >
      {children ?? `Call ${readable}`}
    </a>
  );
}
