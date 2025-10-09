// components/testimonials.tsx
"use client";
import { motion } from "framer-motion";

const reviews = [
  { name: "Amit Sharma", text: "Fantastic sound quality and team! DS Sound made our concert unforgettable." },
  { name: "EventPro Silchar", text: "Professional lighting and stage setup. Highly recommended." },
  { name: "Priya Das", text: "The DJ setup was fire 🔥 — crowd loved it!" },
];

export default function Testimonials() {
  return (
    <section className="container py-16">
      <h2 className="text-center text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/[.05] border border-white/10 p-6 hover:bg-white/[.08] transition"
          >
            <p className="text-white/80 text-sm italic">“{r.text}”</p>
            <p className="mt-3 text-emerald-400 font-medium text-sm">— {r.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
