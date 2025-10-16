"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { CallBtn } from "@/components/ui/call-btn";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const card = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45 } },
};

export default function ServicesGrid() {
  return (
    <section id="services" className="container py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h2>
        <p className="mt-3 text-white/70 text-sm md:text-base">
          From high-impact roadshows to concert-grade stage programs—DS Sound delivers, end to end.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {site.services.map((s, i) => {
          const featured = i === 0; // spotlight Roadshow
          return (
            <motion.article
              key={s.title}
              variants={card}
              className={[
                "group relative overflow-hidden rounded-2xl",
                "border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.03]",
                "p-6 md:p-7",
                "transition transform will-change-transform",
                "hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,.5)]",
                featured ? "lg:col-span-2" : "",
              ].join(" ")}
            >
              {/* background decorations */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rotate-45 bg-[radial-gradient(closest-side,rgba(34,197,94,.18),transparent_70%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -inset-px rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,197,94,.25)_0deg,transparent_120deg,transparent_240deg,rgba(34,197,94,.25)_360deg)] opacity-20" />
              </div>

              {/* content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-2xl">
                    <span aria-hidden>{s.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold leading-tight">
                      <span className="align-middle">{s.title}</span>
                      {featured && (
                        <span className="ml-2 align-middle rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                          Featured
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-white/70 text-sm">{s.desc}</p>
                  </div>
                </div>

                {/* tags */}
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  {getTags(s.title).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* single CTA: CALL to book (light text on green) */}
                <div className="mt-5">
                  <CallBtn label={`Call to book ${s.title}`}>
                    Call to Book {shortName(s.title)}
                  </CallBtn>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* helper CTA */}
      <div className="mt-10 flex justify-center">
        <CallBtn className="bg-white/10 text-white ring-1 ring-white/15 shadow-none hover:bg-white/15">
          Not sure what to pick? Call us for a quick recommendation
        </CallBtn>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */

function shortName(title: string) {
  // "Roadshow Setups" -> "Roadshow", "Stage Programs" -> "Stage"
  return title.replace(/(Setups?|Programs?|&)/gi, "").trim().split(" ")[0] || "Service";
}

function getTags(title: string): string[] {
  const t = title.toLowerCase();
  if (t.includes("roadshow")) return ["High SPL", "Outdoor", "Logistics", "Safety"];
  if (t.includes("stage")) return ["Line Array", "Monitors", "Backline", "Engineers"];
  if (t.includes("corporate")) return ["PA System", "Podium Mics", "Recording", "Power Backup"];
  if (t.includes("lighting")) return ["Beams", "Wash", "Pixel Bars", "Truss"];
  if (t.includes("dj")) return ["Mixer", "Controllers", "MC/DJ", "Dancefloor"];
  if (t.includes("operators") || t.includes("engineers")) return ["FOH", "Tuning", "RF Mics", "Stage Crew"];
  return ["Professional", "Reliable"];
}
