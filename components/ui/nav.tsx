"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { Brand } from "./brand";
import { Btn } from "./btn";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all",
        "backdrop-blur supports-[backdrop-filter]:bg-slate-950/60",
        scrolled ? "border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,.12)]" : "border-b border-white/5",
      ].join(" ")}
    >
      {/* Thin gradient line for extra polish */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,197,94,.4),transparent)]" />
      <nav className="container flex h-16 items-center justify-between gap-3 md:h-18">
        {/* Left: Brand */}
        <Link href="/" aria-label="DS Sound Home" className="shrink-0">
          <Brand />
        </Link>

        {/* Center: Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {site.nav.map((n) => {
            const active = pathname === n.href;
            return (
              <li key={n.href} className="relative">
                <Link
                  href={n.href}
                  className={[
                    "transition",
                    active ? "text-brand-glow" : "text-white/80 hover:text-white",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {n.name}
                </Link>
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-brand-accent"
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right: CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:${site.phone}`}
            className="rounded-xl px-4 py-2 text-sm bg-white/5 hover:bg-white/10 transition"
          >
            Call {shortPhone(site.phone)}
          </a>
          <Btn href="/quote">Book Now</Btn>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Burger open={open} />
        </button>
      </nav>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur"
          >
            <div className="container py-4">
              <ul className="grid gap-1">
                {site.nav.map((n) => {
                  const active = pathname === n.href;
                  return (
                    <li key={n.href}>
                      <Link
                        href={n.href}
                        className={[
                          "block rounded-xl px-4 py-3",
                          active
                            ? "bg-white/[.07] text-white"
                            : "text-white/80 hover:bg-white/[.06] hover:text-white",
                        ].join(" ")}
                        aria-current={active ? "page" : undefined}
                      >
                        {n.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 grid gap-2">
                <a
                  href={`tel:${site.phone}`}
                  className="rounded-xl px-4 py-3 text-center bg-white/5 hover:bg-white/10 transition"
                >
                  Call {shortPhone(site.phone)}
                </a>
                <Btn href="/quote" className="w-full">Book Now</Btn>
              </div>

              {/* subtle bottom glow */}
              <div className="mt-6 h-10 w-full rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,.25),transparent_60%)]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------- helpers & icons ---------- */

function shortPhone(p?: string) {
  if (!p) return "Now";
  // show the last 4 for compact display (e.g., +91-98765-43210 -> …3210)
  const d = p.replace(/[^\d]/g, "");
  return `(${d.slice(-4)})`;
}

function Burger({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="text-white">
      <motion.rect
        width="18" height="2" rx="1" x="3" y="7"
        animate={open ? { y: 12, rotate: 45 } : { y: 7, rotate: 0 }}
        transition={{ duration: 0.18 }}
        className="fill-white/90"
      />
      <motion.rect
        width="18" height="2" rx="1" x="3" y="12"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.12 }}
        className="fill-white/90"
      />
      <motion.rect
        width="18" height="2" rx="1" x="3" y="17"
        animate={open ? { y: 12, rotate: -45 } : { y: 17, rotate: 0 }}
        transition={{ duration: 0.18 }}
        className="fill-white/90"
      />
    </svg>
  );
}
