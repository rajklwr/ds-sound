import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: "Best quality sound systems, lights, DJ and stage operations in Assam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
