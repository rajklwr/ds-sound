// lib/seo.ts
export const SEO = {
  SITE_NAME: "DS Sound",
  SITE_URL: "https://www.dssoundsilchar.com/",
  LOCALE: "en_IN",
  TITLE_BASE: "Best Sound System in Silchar | DS Sound",
  DESCRIPTION:
    "DS Sound offers the best sound system in Silchar—roadshows, stage programs, lighting & DJ setups across Assam. Call now for professional event audio & lights.",
  // social
  INSTAGRAM: "https://www.instagram.com/dssoundsilchar/",
  FACEBOOK: "https://www.facebook.com/profile.php?id=100063802698065",
  YOUTUBE: "https://www.youtube.com/channel/UCtre7w45v0RMbVy-mNlhapw",
  // contact (kept here for JSON-LD; also keep in lib/contact.ts for UI)
  PHONE: "+91 9706209980",
  EMAIL: "dhansahani.123@gmail.com",
  ADDRESS: {
    street: "Silchar",
    locality: "Silchar",
    region: "Assam",
    postalCode: "788001",
    country: "IN",
  },
  // keywords we care about (helps for meta tags & copy blocks)
  KEYWORDS: [
    "best sound system in Silchar",
    "sound system on hire Silchar",
    "roadshow sound Assam",
    "stage lighting Silchar",
    "DJ sound Silchar",
    "event sound system Assam",
    "DS Sound Silchar",
  ],
} as const;
