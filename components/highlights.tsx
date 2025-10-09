// components/highlights.tsx
"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "1200+", label: "Events Powered" },
  { value: "15+", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Highlights() {
  return (
    <section className="container py-12 text-center">
      <div className="grid gap-8 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold text-emerald-400">{s.value}</p>
            <p className="text-white/70 text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
