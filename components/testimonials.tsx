"use client";

import { motion } from "framer-motion";

type Review = {
  name: string;
  org?: string;
  quote: string;
  rating?: number; // 1..5
};

const reviews: Review[] = [
  {
    name: "Rajkiran Kalwar",
    org: "Kisholoy Club, Katlicherra Bagan",
    quote:
      "Roadshow sound was thunderous yet crystal clear. Lighting cues were perfect. DS Sound handled the crowd like pros!",
    rating: 5,
  },
  {
    name: "Owner",
    org: "Cachar Club",
    quote:
      "Stage setup was on time and spotless. Speech clarity was exceptional, and the music mix kept the energy high.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    org: "Concert Organiser",
    quote:
      "Fantastic sound quality and team! DS Sound made our concert unforgettable.",
    rating: 5,
  },
  {
    name: "Priya Das",
    org: "Wedding Planner",
    quote:
      "The DJ setup was fire 🔥 — lighting and transitions were top-notch. Guests loved it!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-white/70 text-sm md:text-base">
          Real feedback from organisers across Silchar & Assam.
        </p>
      </div>

      {/* Mobile: snap carousel • Desktop: grid */}
      <div className="mt-10">
        {/* Mobile carousel */}
        <div className="md:hidden -mx-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-4">
          <div className="flex gap-4">
            {reviews.map((r, i) => (
              <TestimonialCard key={i} review={r} className="min-w-[85%] snap-start" delay={i * 0.06} />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <TestimonialCard key={i} review={r} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- card ---------------- */

function TestimonialCard({
  review,
  className = "",
  delay = 0,
}: {
  review: Review;
  className?: string;
  delay?: number;
}) {
  const { name, org, quote, rating = 5 } = review;
  const initials = getInitials(name);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10",
        "bg-gradient-to-br from-white/[.06] to-white/[.03] p-6",
        "hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-20px_rgba(0,0,0,.5)] transition",
        className,
      ].join(" ")}
    >
      {/* accent beam */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rotate-45 bg-[radial-gradient(closest-side,rgba(34,197,94,.18),transparent_70%)]" />

      {/* header */}
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-semibold">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold leading-tight">{name}</p>
          {org && <p className="text-white/60 text-xs truncate">{org}</p>}
        </div>
      </div>

      {/* rating */}
      <div className="mt-3 flex items-center gap-1 text-amber-300">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < rating} />
        ))}
      </div>

      {/* quote */}
      <blockquote className="mt-3 text-white/80 text-sm leading-relaxed">
        <QuoteIcon />
        <span className="relative z-10">“{quote}”</span>
      </blockquote>

      {/* verified badge */}
      <div className="mt-4 inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-300">
        <CheckIcon />
        Verified Event
      </div>
    </motion.article>
  );
}

/* ---------------- bits ---------------- */

function Star({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M10 1.6 12.6 7l5.8.5-4.4 3.6 1.4 5.6L10 14.8 4.6 16.7 6 11.1 1.6 7.5 7.4 7z"
        className={filled ? "fill-current" : "fill-transparent"}
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mb-2 h-5 w-5 text-white/30">
      <path
        d="M7 10c0-3 2-6 5-6v3c-1 0-2 1-2 3h2v6H7v-6zm7 0c0-3 2-6 5-6v3c-1 0-2 1-2 3h2v6h-5v-6z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* Hide scrollbar on mobile carousel */
// declare global {
//   interface CSSStyleDeclaration {
//     scrollbarWidth?: string;
//   }
// }

// Tailwind v4 doesn't include a utility for this out of the box; add this once globally if desired:
// .no-scrollbar::-webkit-scrollbar { display: none; }
// .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
