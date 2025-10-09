// components/gallery-preview.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = ["/gallery1.png", "/gallery1.png", "/gallery1.png", "/gallery1.png"];

export default function GalleryPreview() {
  return (
    <section className="container py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Event Highlights</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl"
          >
            <Image
              src={src}
              alt={`Event ${i + 1}`}
              width={500}
              height={400}
              className="h-56 w-full object-cover hover:scale-105 transition-transform"
            />
          </motion.div>
        ))}
      </div>
      <Link
        href="/gallery"
        className="mt-8 inline-block rounded-xl bg-brand-accent text-black font-medium px-6 py-3 hover:opacity-90"
      >
        View Full Gallery
      </Link>
    </section>
  );
}
