export const site = {
  name: "DS Sound",
  tagline: "Premium Sound • Lights • DJ • Stage • Roadshow",
  location: "Silchar, Assam",
  phone: "+91-98765-43210",
  email: "book@dssound.in",
  socials: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  nav: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { title: "Roadshow Setups", desc: "High-SPL rigs with crowd-safe deployment.", icon: "🚚" },
    { title: "Stage Programs", desc: "Concert-grade arrays, mics & monitoring.", icon: "🎤" },
    { title: "Corporate & Events", desc: "Crystal-clear speech & ambiance.", icon: "🏢" },
    { title: "Lighting & Truss", desc: "Dynamic lighting, beams & pixel bars.", icon: "✨" },
    { title: "DJ & Console", desc: "Club-standard mixers, pro DJs.", icon: "🎧" },
    { title: "Perfect Operators", desc: "Skilled engineers for flawless shows.", icon: "🛠️" },
  ]
} as const;
