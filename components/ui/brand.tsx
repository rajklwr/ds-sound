import Image from "next/image";

export function Brand() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo image */}
      <div className="relative h-9 w-9 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
        <Image
          src="/logo.png"             // 🔹 Place your logo in /public/logo.png
          alt="DS Sound Logo"
          width={36}
          height={36}
          className="object-contain"
          priority                    // ensures fast logo load
        />
      </div>

      {/* Text name */}
      <span className="font-semibold tracking-wide text-white">DS Sound</span>
    </div>
  );
}
