// Site content in one place: edit products, applications and quality points here (same as nextjs/lib/data.ts).

// WhatsApp number for the quote form, international format without "+" (e.g. "919876543210").
// Leave empty until it is known; the form then shows a message instead of opening WhatsApp.
export const WHATSAPP = "";

export const nav = [
  { href: "#top", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#applications", label: "Applications" },
  { href: "#quality", label: "Quality" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export const highlights = [
  { title: "Nordic origin", sub: "Norway & Denmark" },
  { title: "High protein", sub: "Marine-sourced" },
  { title: "50 kg drums", sub: "Bulk supply" },
  { title: "Cold-chain", sub: "Fresh to the drum" },
];

export const products = [
  { name: "Anchovy Protein", img: "can-1.webp", flag: "🇳🇴", country: "Norway", text: "Highly digestible protein with a rich amino acid profile for feed and nutrition formulations." },
  { name: "Herring Protein", img: "can-2.webp", flag: "🇩🇰", country: "Denmark", text: "Naturally rich in marine nutrients, ideal for aquafeed and premium pet food." },
  { name: "Tuna Protein", img: "can-3.webp", flag: "🇩🇰", country: "Denmark", text: "Concentrated, high-quality protein for strong growth and palatability." },
  { name: "Salmon Protein", img: "can-4.webp", flag: "🇩🇰", country: "Denmark", text: "Clean, premium salmon protein for high-performance feed and nutrition." },
  { name: "Marine Collagen Peptides", img: "can-5.webp", flag: "🇳🇴", country: "Norway", text: "Low-molecular peptides for nutraceutical, beauty and functional food use." },
];

export const applications = [
  { icon: "🐟", title: "Aquafeed", text: "Fish and shrimp feed for faster growth, better FCR and stronger health." },
  { icon: "🐾", title: "Pet Food", text: "Highly palatable marine protein for premium dog and cat food." },
  { icon: "🐄", title: "Animal Nutrition", text: "Protein boost for poultry, livestock and young-animal diets." },
  { icon: "💊", title: "Nutraceuticals", text: "Collagen peptides for supplements, beauty and functional foods." },
];

export const quality = [
  ["Responsibly sourced", "Nordic catch from Norway and Denmark"],
  ["Cold-chain handling", "to protect freshness and nutrients"],
  ["Batch-tested", "for protein, moisture and purity"],
  ["Sealed 50 kg drums", "for safe storage and transport"],
  ["Documentation", "available on request with every order"],
];
