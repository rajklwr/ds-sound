export const site = {
  name: "DS Sound",
  tagline: "Premium Sound • Lights • DJ • Stage • Roadshow",
  location: "Silchar, Assam",
  phone: "+91-97062-09980",
  email: "dhansahani.123@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/dssoundsilchar/",
    facebook: "https://www.facebook.com/profile.php?id=100063802698065",
    youtube: "https://www.youtube.com/channel/UCtre7w45v0RMbVy-mNlhapw",
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
