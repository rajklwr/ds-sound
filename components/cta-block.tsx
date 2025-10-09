// components/cta-block.tsx
import { Btn } from "./ui/btn";

export default function CtaBlock() {
  return (
    <section className="relative py-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,.2),transparent_70%)]" />
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Amplify Your Next Event?
        </h2>
        <p className="text-white/70 mb-6 max-w-xl mx-auto">
          Whether it&apos;s a roadshow, wedding, or concert — DS Sound has the power and precision to make it unforgettable.
        </p>
        <Btn href="/quote" className="px-8 py-4 text-lg">Book Now</Btn>
      </div>
    </section>
  );
}
