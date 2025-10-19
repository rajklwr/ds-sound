"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Brand } from "./brand";
import { CallBtn } from "@/components/ui/call-btn";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all",
        "backdrop-blur supports-[backdrop-filter]:bg-slate-950/60",
        scrolled ? "border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,.12)]" : "border-b border-white/5",
      ].join(" ")}
    >
      {/* Thin emerald underline for polish */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,197,94,.4),transparent)]" />

      <nav className="container flex h-16 items-center justify-between gap-3 md:h-18">
        {/* Brand (left) */}
        <Link href="/" aria-label="DS Sound Home" className="shrink-0">
          <Brand />
        </Link>

        {/* Single CTA (right) */}
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative"
          >
            {/* subtle glow ring behind button (non-interactive) */}
            <span className="pointer-events-none absolute -inset-1 rounded-[14px] bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,.25),transparent_60%)] blur-sm" />
            <CallBtn className="relative px-5 py-2 text-sm md:px-6 md:py-3 md:text-base">
              Call Now {prettyPhone(site.phone)}
            </CallBtn>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}

/* ---------- helpers ---------- */
function prettyPhone(p?: string) {
  if (!p) return "";
  // Make +91 97062 09980 style; keeps it compact on mobile
  return `– ${p.replace(/^\+?91[-\s]?/, "+91 ").replace(/(\d{5})(\d{5})$/, "$1 $2")}`;
}
