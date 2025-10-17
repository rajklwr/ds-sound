import Link from "next/link";
import { site } from "@/lib/site";
import { CallBtn } from "@/components/ui/call-btn";

export default function Footer() {
  const year = new Date().getFullYear();
  const readablePhone = (site.phone || "").replace(/^\+91-?/, "+91 ");

  return (
    <footer className="relative mt-20">
      {/* soft top glow */}
      <div className="pointer-events-none absolute -top-5 left-0 right-0 h-6 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,.18),transparent_60%)]" />

      <div className="border-t border-white/10 bg-white/[.04] backdrop-blur">
        <div className="container py-10">
          {/* headline stripe */}
          <div className="mx-auto mb-8 w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
            Professional Sound • Lights • DJ • Stage
          </div>

          {/* grid */}
          <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4 md:text-left">
            {/* Brand + Tagline */}
            <section className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold tracking-wide">{site.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{site.tagline}</p>
              {site.location && <p className="text-white/50 text-sm">{site.location}</p>}

              {/* Socials */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <Social href={site.socials?.instagram} label="Instagram">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6z"/>
                  </svg>
                </Social>
                <Social href={site.socials?.facebook} label="Facebook">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M13.5 9H16V6h-2.5C11.6 6 11 7.4 11 9v2H9v3h2v7h3v-7h2.1l.4-3H14V9.5c0-.3.2-.5.5-.5z"/>
                  </svg>
                </Social>
                <Social href={site.socials?.youtube} label="YouTube">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M23.5 7.1a3.5 3.5 0 0 0-2.5-2.5C19 4 12 4 12 4s-7 0-9 .6A3.5 3.5 0 0 0 .5 7.1 36.6 36.6 0 0 0 0 12a36.6 36.6 0 0 0 .5 4.9 3.5 3.5 0 0 0 2.5 2.5C5 20 12 20 12 20s7 0 9-.6a3.5 3.5 0 0 0 2.5-2.5A36.6 36.6 0 0 0 24 12a36.6 36.6 0 0 0-.5-4.9zM9.8 15.5v-7l6.2 3.5z"/>
                  </svg>
                </Social>
              </div>
            </section>

            {/* Quick Links */}
            <section>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="text-white/80 text-sm space-y-2">
                {site.nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="hover:text-white transition">
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* subtle divider */}
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </section>

            {/* Services snapshot */}
            <section>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="text-white/80 text-sm space-y-2">
                {(site.services ?? []).slice(0, 6).map((s) => (
                  <li key={s.title} className="flex items-center justify-center md:justify-start gap-2">
                    <span aria-hidden>{s.icon}</span>
                    <span>{s.title}</span>
                  </li>
                ))}
              </ul>
              {/* accent underline */}
              <div className="mt-4 h-1 w-12 rounded-full bg-[linear-gradient(90deg,transparent,rgba(34,197,94,.6),transparent)] mx-auto md:mx-0" />
            </section>

            {/* Contact / CTA */}
            <section>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="text-white/80 text-sm space-y-2">
                {site.phone && (
                  <p>
                    Phone:{" "}
                    <a className="hover:text-white underline/30 hover:underline" href={`tel:${site.phone}`}>
                      {readablePhone || site.phone}
                    </a>
                  </p>
                )}
                {site.email && (
                  <p>
                    Email:{" "}
                    <a className="hover:text-white underline/30 hover:underline" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </p>
                )}
                <p>Available 24/7 across Assam.</p>
              </div>

              {/* Primary CTA: Call Now */}
              <div className="mt-4 flex justify-center md:justify-start">
                <CallBtn className="w-full sm:w-auto sm:min-w-[12rem] px-6 py-3 text-base font-semibold">
                  Call Now {readablePhone && `– ${readablePhone}`}
                </CallBtn>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container flex flex-col items-center gap-2 py-5 text-xs text-white/60 md:flex-row md:justify-between">
            {/* keep together on laptops */}
            <p className="md:whitespace-nowrap">
              © {year} {site.name} · All rights reserved.
            </p>
            <p className="text-white/60">
              Website by <span className="text-white/80">Grogrip Media Pvt Limited</span>
            </p>
          </div>
        </div>
      </div>

      {/* bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-20 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,.14),transparent_60%)]" />
    </footer>
  );
}

/* ---------- helpers ---------- */
function Social({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  const classes =
    "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/90 hover:bg-white/15 hover:text-white transition";
  if (!href || href === "#") {
    return (
      <span
        aria-label={`${label} (coming soon)`}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60"
      >
        {children}
      </span>
    );
  }
  return (
    <a href={href} aria-label={label} target="_blank" rel="noreferrer" className={classes}>
      {children}
    </a>
  );
}
