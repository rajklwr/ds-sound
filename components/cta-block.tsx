// components/cta-block.tsx
import { CallBtn } from "@/components/ui/call-btn";
import { site } from "@/lib/site";

export default function CtaBlock() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* ambient lighting + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[.06]" />
      </div>

      <div className="container relative z-10">
        {/* card */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[.06] p-8 md:p-12 backdrop-blur">
          {/* top pill */}
          <div className="mx-auto mb-4 w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
            Available 24/7 • Assam-wide
          </div>

          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Amplify Your Next Event?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
            Roadshows, stage programs, corporate and weddings — DS Sound brings
            concert-grade sound, lighting, and expert operators to your venue.
          </p>

          {/* feature bullets */}
          <ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-sm text-white/80 sm:grid-cols-2">
            <Li>High-SPL roadshow rigs, safe deployment</Li>
            <Li>Line arrays, monitors & podium mics</Li>
            <Li>Dynamic truss lighting & beams</Li>
            <Li>On-time setup guarantee</Li>
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <CallBtn className="px-8 py-4 text-base md:text-lg">
              Call to Book Now
            </CallBtn>

            {/* phone shown as plain text for quick copy */}
            <p className="text-xs text-white/60">
              Or call us directly:{" "}
              <span className="font-medium text-white/80">
                {/* mirror the number from CallBtn’s contact file at runtime is tricky here;
                   if you want it dynamic, import contact and print contact.phone */}
                {site.phone}
              </span>
            </p>
          </div>

          {/* bottom guarantee strip */}
          <div className="mt-8 flex items-center justify-center gap-3 text-xs text-white/60">
            <span className="inline-block h-1 w-10 rounded-full bg-[linear-gradient(90deg,transparent,rgba(34,197,94,.6),transparent)]" />
            No hidden charges • Professional operators • Verified equipment
          </div>
        </div>
      </div>

      {/* soft bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,.14),transparent_60%)]" />
    </section>
  );
}

/* small bullet line with check icon */
function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/15 text-emerald-300">
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}
