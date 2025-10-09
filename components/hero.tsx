"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Btn } from "./ui/btn";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-100" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,197,94,.25),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0)_0%,rgba(2,6,23,.6)_45%,rgba(2,6,23,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[.06]" />
      </div>

      <div className="container relative z-10 pt-16 pb-12 md:pt-28 md:pb-20">
        {/* Badges */}
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5 flex flex-wrap items-center justify-center gap-2 text-xs">
          <Badge>Silchar • Assam-wide</Badge>
          <Badge>Roadshow • Stage • Corporate</Badge>
          <Badge>24/7 Support</Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center text-4xl font-bold tracking-tight md:text-6xl">
          <span className="text-white">Best-in-Assam </span>
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">Sound &amp; Lights</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mx-auto mt-4 max-w-2xl text-center text-white/70 md:text-lg">
          DS Sound delivers powerful, crystal-clear audio, dramatic lighting and expert operators for roadshows, stage programs and corporate events across Assam.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
          <Btn href="/quote" className="w-full sm:w-auto">Get a Quote</Btn>
          <Link href={`tel:${site.phone}`} className="inline-flex w-full items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15 sm:w-auto">
            Call {readablePhone(site.phone)}
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.5 }} className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-4 text-center text-xs text-white/60">
          <StarRow />
          <span>Trusted by 1200+ events</span>
          <Dot />
          <span>99.9% uptime</span>
        </motion.div>
      </div>

      {/* Marquee */}
      <Marquee />

      {/* Scroll hint (click to smooth scroll) */}
      <div className="relative z-10 mt-8 mb-4 flex justify-center">
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById("services");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="group inline-flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-white/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          aria-label="Scroll to services"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" className="opacity-80 group-hover:opacity-100 transition">
            <path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs">Scroll</span>
        </button>
      </div>
    </section>
  );
}

/* ---------- micro components ---------- */

function Badge({ children }: React.PropsWithChildren) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">{children}</span>;
}
function Dot() { return <span className="h-1 w-1 rounded-full bg-white/30 inline-block" />; }
function StarRow() {
  return (
    <span aria-label="5 star rating" className="flex items-center gap-0.5 text-amber-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current"><path d="M10 1.5 12.7 7l5.8.5-4.4 3.7 1.4 5.6L10 14.8 4.5 16.8 6 11.2 1.5 7.5 7.3 7z" /></svg>
      ))}
    </span>
  );
}
function readablePhone(p?: string) { return p ? p.replace(/^\+91-?/, "+91 ") : "Now"; }

function Marquee() {
  const items = ["Roadshow","Stage Programs","Corporate Events","Lighting & Truss","DJ & Console","Perfect Operators","Assam’s Best"];
  return (
    <div className="relative z-10 border-y border-white/10 bg-white/[.04] py-3">
      <motion.div className="flex gap-8 whitespace-nowrap text-white/75" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, ease: "linear", repeat: Infinity }}>
        {[...items, ...items].map((t, i) => (<span key={i} className="tracking-wide">{t} •</span>))}
      </motion.div>
    </div>
  );
}
