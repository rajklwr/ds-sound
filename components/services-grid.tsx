// components/services-grid.tsx
"use client";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function ServicesGrid() {
  return (
    <section id="services" className="container py-16">
      <h2 className="text-center text-3xl font-bold mb-10">Our Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/[.05] border border-white/10 p-6 hover:bg-white/[.08] transition group"
          >
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-400">
              {s.title}
            </h3>
            <p className="text-white/70 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
