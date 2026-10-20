// Site content in one place: edit products, applications and quality points here.

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

// Specs come from the back label of each drum.
export const products = [
  { name: "Antarctic Krill Protein", slug: "krill", flag: "🇳🇴", country: "Norway", text: "Krill protein meal from Antarctic krill (Euphausia superba), rich in amino acids and natural omega-3.",
    specs: [["Source", "Antarctic Krill (Euphausia superba)"], ["Protein", "96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "5%"], ["Ash (max)", "10%"], ["Form", "Krill protein meal (fine powder)"], ["Colour", "Light pink – light brown"], ["Application", "Aquaculture feed, animal feed"]] },
  { name: "Salmon Protein", slug: "salmon", flag: "🇩🇰", country: "Denmark", text: "Premium salmon protein meal for high-performance aquaculture and animal feed.",
    specs: [["Source", "Salmon (marine fish)"], ["Protein", "96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "3%"], ["Ash (max)", "15%"], ["Form", "Fish protein meal (fine powder)"], ["Colour", "Light brown"], ["Application", "Aquaculture feed, animal feed"]] },
  { name: "Tuna Protein", slug: "tuna", flag: "🇩🇰", country: "Denmark", text: "Concentrated tuna protein meal for strong growth and better feed conversion.",
    specs: [["Source", "Tuna (marine fish)"], ["Protein", "96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "3%"], ["Ash (max)", "15%"], ["Form", "Fish protein meal (fine powder)"], ["Colour", "Light brown"], ["Application", "Aquaculture feed, animal feed"]] },
  { name: "Herring Protein", slug: "herring", flag: "🇩🇰", country: "Denmark", text: "Herring protein meal, naturally rich in amino acids and highly digestible.",
    specs: [["Source", "Herring (marine fish)"], ["Protein", "96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "3%"], ["Ash (max)", "15%"], ["Form", "Fish protein meal (fine powder)"], ["Colour", "Light brown"], ["Application", "Aquaculture feed, animal feed"]] },
  { name: "Anchovy / Anchovet Protein", slug: "anchovy", flag: "🇳🇴", country: "Norway", text: "High-quality anchovy protein meal for aquafeed and animal nutrition formulations.",
    specs: [["Source", "Anchovy / Anchovet (marine)"], ["Protein", "96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "3%"], ["Ash (max)", "15%"], ["Form", "Fish protein meal (fine powder)"], ["Colour", "Light brown"], ["Application", "Aquaculture feed, animal feed"]] },
  { name: "Marine Collagen Peptides", slug: "collagen", flag: "🇳🇴", country: "Norway", text: "Water-soluble cold-water collagen peptides for food, nutraceutical and cosmetic use.",
    specs: [["Source", "Marine (cold water)"], ["Collagen protein", "≥ 96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "1%"], ["Ash (max)", "3%"], ["Form", "Collagen peptides (fine powder)"], ["Colour", "Off white"], ["Solubility", "High (water soluble)"], ["Application", "Food, nutraceutical, cosmetic, aquaculture and animal feed"]] },
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
