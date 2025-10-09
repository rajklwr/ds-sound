import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import ServicesGrid from "@/components/services-grid";
import GalleryPreview from "@/components/gallery-preview";
import Testimonials from "@/components/testimonials";
import CtaBlock from "@/components/cta-block";

export default function Page() {
  return (
    <>
      <Hero />
      <Highlights />
      <ServicesGrid />
      <GalleryPreview />
      <Testimonials />
      <CtaBlock />
    </>
  );
}
