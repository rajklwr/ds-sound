// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { SEO } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SEO.SITE_URL),
  title: {
    default: SEO.TITLE_BASE,                 // e.g. "Best Sound System in Silchar | DS Sound"
    template: `%s | ${SEO.SITE_NAME}`,       // page-specific titles can use this
  },
  description: SEO.DESCRIPTION,
  keywords: [...SEO.KEYWORDS],
  applicationName: SEO.SITE_NAME,
  authors: [{ name: SEO.SITE_NAME, url: SEO.SITE_URL }],
  creator: "Grogrip Media Pvt Limited",
  publisher: SEO.SITE_NAME,
  alternates: {
    canonical: SEO.SITE_URL,                 // https://dssound.in
  },
  openGraph: {
    type: "website",
    locale: SEO.LOCALE,                      // en_IN
    url: SEO.SITE_URL,
    siteName: SEO.SITE_NAME,
    title: SEO.TITLE_BASE,
    description: SEO.DESCRIPTION,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DS Sound — Best Sound System in Silchar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.TITLE_BASE,
    description: SEO.DESCRIPTION,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // Uncomment after adding your Search Console code:
  // verification: { google: "YOUR_GSC_VERIFICATION_CODE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950 text-white">
      <head>
        {/* LocalBusiness schema (helps rank for “best sound system in Silchar”) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        {/* Hint: you can also add preconnects for media CDNs if you host lots of video/images
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
        */}
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/* ---------------- schema helper ---------------- */
function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SEO.SITE_NAME,                     // "DS Sound"
    url: SEO.SITE_URL,
    image: `${SEO.SITE_URL}/logo.png`,
    description: SEO.DESCRIPTION,
    telephone: SEO.PHONE,                    // "+91 9706209980"
    email: SEO.EMAIL,                        // "book@dssound.in"
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO.ADDRESS.street,     // "Silchar"
      addressLocality: SEO.ADDRESS.locality, // "Silchar"
      addressRegion: SEO.ADDRESS.region,     // "Assam"
      postalCode: SEO.ADDRESS.postalCode,    // "788001"
      addressCountry: SEO.ADDRESS.country,   // "IN"
    },
    areaServed: ["Silchar", "Cachar", "Hailakandi", "Karimganj", "Assam"],
    sameAs: [SEO.INSTAGRAM, SEO.FACEBOOK, SEO.YOUTUBE].filter(Boolean),
  };
}
