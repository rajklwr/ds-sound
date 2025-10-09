import Link from "next/link";
import { clsx } from "clsx";

type Props = React.PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}>;

export function Btn({ href, onClick, variant = "primary", className, children }: Props) {
  const base = "inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition will-change-transform";
  const styles = variant === "primary"
    ? "bg-brand-accent text-black hover:scale-[1.02] active:scale-[0.98] shadow-glow"
    : "bg-white/5 text-white hover:bg-white/10";
  if (href) return <Link href={href} className={clsx(base, styles, className)}>{children}</Link>;
  return <button onClick={onClick} className={clsx(base, styles, className)}>{children}</button>;
}
