// Site content in one place: edit products, applications and quality points here.

// WhatsApp number for the quote form, international format without "+" (e.g. "919876543210").
// Leave empty until it is known; the form then shows a message instead of opening WhatsApp.
export const WHATSAPP = "";

export const nav = [
  { href: "./", label: "Home" },
  { href: "./#products", label: "Products" },
  { href: "./#applications", label: "Applications" },
  { href: "./#quality", label: "Quality" },
  { href: "./#about", label: "About Us" },
];

export const highlights = [
  { title: "Nordic origin", sub: "Norway & Denmark" },
  { title: "High protein", sub: "Marine-sourced" },
  { title: "50 kg drums", sub: "MOQ 6 tons" },
  { title: "Cold-chain", sub: "Fresh to the drum" },
];

// Specs come from the back label of each drum.
export const products = [
  { name: "Antarctic Krill Protein", slug: "krill", flag: "🇳🇴", country: "Norway", text: "Krill protein meal from Antarctic krill (Euphausia superba), rich in amino acids and natural omega-3.",
    specs: [["Source", "Antarctic Krill (Euphausia superba)"], ["Protein", "96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "5%"], ["Ash (max)", "10%"], ["Form", "Krill protein meal (fine powder)"], ["Colour", "Light pink – light brown"], ["Application", "Aquaculture feed, animal feed"]],
    // Nutrition profile shown in the "View full label" popup. Add a percentage as a third item per row when lab values are available.
    details: [
      { title: "Essential Amino Acids", items: [
        ["Leucine", "Crucial for muscle protein synthesis and repair."],
        ["Lysine", "Important for bone health, tissue repair and hormone production."],
        ["Valine", "Promotes muscle growth and tissue regeneration."],
        ["Isoleucine", "Assists with hemoglobin synthesis and energy regulation."],
        ["Phenylalanine", "Essential for brain health and neurotransmitter function."],
        ["Threonine", "Supports structural proteins like collagen and elastin."],
        ["Methionine", "Necessary for metabolism, tissue growth and detoxification."],
        ["Histidine", "Important for maintaining the myelin sheath (nerve cell protection)."],
        ["Tryptophan", "Precursor to serotonin, which regulates mood and sleep."],
      ] },
      { title: "Non-Essential Amino Acids", items: [
        ["Glutamic Acid", "Highest in concentration; supports brain function and metabolism."],
        ["Aspartic Acid", "Plays a key role in energy production and hormone regulation."],
        ["Arginine", "Boosts immune function and improves blood circulation."],
        ["Alanine", "Helps the body process glucose and eliminate toxins."],
        ["Glycine", "Aids in cellular growth, DNA construction and muscle health."],
        ["Proline", "Supports joint health and skin elasticity."],
        ["Serine", "Crucial for proper brain function and the central nervous system."],
        ["Tyrosine", "Helps improve alertness, focus and manage stress."],
      ] },
      { title: "Other Key Nutrients", items: [
        ["Omega-3 Fatty Acids", "High levels of EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) for heart and brain health."],
        ["Phospholipids", "Bind to omega-3s, making them significantly easier to absorb than standard fish oil."],
        ["Astaxanthin", "A potent antioxidant that gives krill its red colour and fights cellular inflammation."],
        ["Choline", "Supports liver function, fat metabolism and cognitive development."],
        ["Vitamins", "Vitamin A, Vitamin E, Vitamin B12 and Vitamin B9 (folate)."],
        ["Minerals", "Rich in calcium, phosphorus, iron, zinc, magnesium, potassium and sodium."],
        ["Chitin", "A marine fibre from the exoskeleton that supports gut health."],
      ] },
    ] },
  { name: "Salmon Protein", slug: "salmon", flag: "🇩🇰", country: "Denmark", text: "Premium salmon protein meal for high-performance aquaculture and animal feed.",
    specs: [["Source", "Salmon (marine fish)"], ["Protein", "96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "3%"], ["Ash (max)", "15%"], ["Form", "Fish protein meal (fine powder)"], ["Colour", "Light brown"], ["Application", "Aquaculture feed, animal feed"]],
    details: [
      { title: "Essential Amino Acids", items: [
        ["Leucine", "Crucial for muscle protein synthesis and repair."],
        ["Lysine", "Important for bone health, tissue repair and hormone production."],
        ["Valine", "Promotes muscle growth and tissue regeneration."],
        ["Isoleucine", "Assists with hemoglobin synthesis and energy regulation."],
        ["Phenylalanine", "Essential for brain health and neurotransmitter function."],
        ["Threonine", "Supports structural proteins like collagen and elastin."],
        ["Methionine", "Necessary for metabolism, tissue growth and detoxification."],
        ["Histidine", "Important for maintaining the myelin sheath (nerve cell protection)."],
        ["Tryptophan", "Precursor to serotonin, which regulates mood and sleep."],
      ] },
      { title: "Non-Essential Amino Acids", items: [
        ["Glutamic Acid", "Highest in concentration; supports brain function and metabolism."],
        ["Aspartic Acid", "Plays a key role in energy production and hormone regulation."],
        ["Arginine", "Boosts immune function and improves blood circulation."],
        ["Alanine", "Helps the body process glucose and eliminate toxins."],
        ["Glycine", "Aids in cellular growth, DNA construction and muscle health."],
        ["Proline", "Supports joint health and skin elasticity."],
        ["Serine", "Crucial for proper brain function and the central nervous system."],
        ["Tyrosine", "Helps improve alertness, focus and manage stress."],
      ] },
      { title: "Other Key Nutrients", items: [
        ["Omega-3 Fatty Acids", "Contains EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) for heart and brain health."],
        ["Choline", "Supports liver function, fat metabolism and cognitive development."],
        ["Vitamins", "Vitamin A, Vitamin E, Vitamin B12 and Vitamin B9 (folate)."],
        ["Minerals", "Rich in calcium, phosphorus, iron, zinc, magnesium, potassium and sodium."],
      ] },
    ] },
  { name: "Tuna Protein", slug: "tuna", flag: "🇩🇰", country: "Denmark", text: "Concentrated tuna protein meal for strong growth and better feed conversion.",
    specs: [["Source", "Tuna (marine fish)"], ["Protein", "96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "3%"], ["Ash (max)", "15%"], ["Form", "Fish protein meal (fine powder)"], ["Colour", "Light brown"], ["Application", "Aquaculture feed, animal feed"]],
    details: [
      { title: "Essential Amino Acids", items: [
        ["Leucine", "Crucial for muscle protein synthesis and repair."],
        ["Lysine", "Important for bone health, tissue repair and hormone production."],
        ["Valine", "Promotes muscle growth and tissue regeneration."],
        ["Isoleucine", "Assists with hemoglobin synthesis and energy regulation."],
        ["Phenylalanine", "Essential for brain health and neurotransmitter function."],
        ["Threonine", "Supports structural proteins like collagen and elastin."],
        ["Methionine", "Necessary for metabolism, tissue growth and detoxification."],
        ["Histidine", "Important for maintaining the myelin sheath (nerve cell protection)."],
        ["Tryptophan", "Precursor to serotonin, which regulates mood and sleep."],
      ] },
      { title: "Non-Essential Amino Acids", items: [
        ["Glutamic Acid", "Highest in concentration; supports brain function and metabolism."],
        ["Aspartic Acid", "Plays a key role in energy production and hormone regulation."],
        ["Arginine", "Boosts immune function and improves blood circulation."],
        ["Alanine", "Helps the body process glucose and eliminate toxins."],
        ["Glycine", "Aids in cellular growth, DNA construction and muscle health."],
        ["Proline", "Supports joint health and skin elasticity."],
        ["Serine", "Crucial for proper brain function and the central nervous system."],
        ["Tyrosine", "Helps improve alertness, focus and manage stress."],
      ] },
      { title: "Other Key Nutrients", items: [
        ["Omega-3 Fatty Acids", "Contains EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) for heart and brain health."],
        ["Choline", "Supports liver function, fat metabolism and cognitive development."],
        ["Vitamins", "Vitamin A, Vitamin E, Vitamin B12 and Vitamin B9 (folate)."],
        ["Minerals", "Rich in calcium, phosphorus, iron, zinc, magnesium, potassium and sodium."],
      ] },
    ] },
  { name: "Herring Protein", slug: "herring", flag: "🇩🇰", country: "Denmark", text: "Herring protein meal, naturally rich in amino acids and highly digestible.",
    specs: [["Source", "Herring (marine fish)"], ["Protein", "96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "3%"], ["Ash (max)", "15%"], ["Form", "Fish protein meal (fine powder)"], ["Colour", "Light brown"], ["Application", "Aquaculture feed, animal feed"]],
    details: [
      { title: "Essential Amino Acids", items: [
        ["Leucine", "Crucial for muscle protein synthesis and repair."],
        ["Lysine", "Important for bone health, tissue repair and hormone production."],
        ["Valine", "Promotes muscle growth and tissue regeneration."],
        ["Isoleucine", "Assists with hemoglobin synthesis and energy regulation."],
        ["Phenylalanine", "Essential for brain health and neurotransmitter function."],
        ["Threonine", "Supports structural proteins like collagen and elastin."],
        ["Methionine", "Necessary for metabolism, tissue growth and detoxification."],
        ["Histidine", "Important for maintaining the myelin sheath (nerve cell protection)."],
        ["Tryptophan", "Precursor to serotonin, which regulates mood and sleep."],
      ] },
      { title: "Non-Essential Amino Acids", items: [
        ["Glutamic Acid", "Highest in concentration; supports brain function and metabolism."],
        ["Aspartic Acid", "Plays a key role in energy production and hormone regulation."],
        ["Arginine", "Boosts immune function and improves blood circulation."],
        ["Alanine", "Helps the body process glucose and eliminate toxins."],
        ["Glycine", "Aids in cellular growth, DNA construction and muscle health."],
        ["Proline", "Supports joint health and skin elasticity."],
        ["Serine", "Crucial for proper brain function and the central nervous system."],
        ["Tyrosine", "Helps improve alertness, focus and manage stress."],
      ] },
      { title: "Other Key Nutrients", items: [
        ["Omega-3 Fatty Acids", "Contains EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) for heart and brain health."],
        ["Choline", "Supports liver function, fat metabolism and cognitive development."],
        ["Vitamins", "Vitamin A, Vitamin E, Vitamin B12 and Vitamin B9 (folate)."],
        ["Minerals", "Rich in calcium, phosphorus, iron, zinc, magnesium, potassium and sodium."],
      ] },
    ] },
  { name: "Anchovy / Anchovet Protein", slug: "anchovy", flag: "🇳🇴", country: "Norway", text: "High-quality anchovy protein meal for aquafeed and animal nutrition formulations.",
    specs: [["Source", "Anchovy / Anchovet (marine)"], ["Protein", "96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "3%"], ["Ash (max)", "15%"], ["Form", "Fish protein meal (fine powder)"], ["Colour", "Light brown"], ["Application", "Aquaculture feed, animal feed"]],
    details: [
      { title: "Essential Amino Acids", items: [
        ["Leucine", "Crucial for muscle protein synthesis and repair."],
        ["Lysine", "Important for bone health, tissue repair and hormone production."],
        ["Valine", "Promotes muscle growth and tissue regeneration."],
        ["Isoleucine", "Assists with hemoglobin synthesis and energy regulation."],
        ["Phenylalanine", "Essential for brain health and neurotransmitter function."],
        ["Threonine", "Supports structural proteins like collagen and elastin."],
        ["Methionine", "Necessary for metabolism, tissue growth and detoxification."],
        ["Histidine", "Important for maintaining the myelin sheath (nerve cell protection)."],
        ["Tryptophan", "Precursor to serotonin, which regulates mood and sleep."],
      ] },
      { title: "Non-Essential Amino Acids", items: [
        ["Glutamic Acid", "Highest in concentration; supports brain function and metabolism."],
        ["Aspartic Acid", "Plays a key role in energy production and hormone regulation."],
        ["Arginine", "Boosts immune function and improves blood circulation."],
        ["Alanine", "Helps the body process glucose and eliminate toxins."],
        ["Glycine", "Aids in cellular growth, DNA construction and muscle health."],
        ["Proline", "Supports joint health and skin elasticity."],
        ["Serine", "Crucial for proper brain function and the central nervous system."],
        ["Tyrosine", "Helps improve alertness, focus and manage stress."],
      ] },
      { title: "Other Key Nutrients", items: [
        ["Omega-3 Fatty Acids", "Contains EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) for heart and brain health."],
        ["Choline", "Supports liver function, fat metabolism and cognitive development."],
        ["Vitamins", "Vitamin A, Vitamin E, Vitamin B12 and Vitamin B9 (folate)."],
        ["Minerals", "Rich in calcium, phosphorus, iron, zinc, magnesium, potassium and sodium."],
      ] },
    ] },
  { name: "Marine Collagen Peptides", slug: "collagen", flag: "🇳🇴", country: "Norway", text: "Water-soluble cold-water collagen peptides for food, nutraceutical and cosmetic use.",
    specs: [["Source", "Marine (cold water)"], ["Collagen protein", "≥ 96% (lab tested)"], ["Protein (observed)", "90% (on dry basis)"], ["Moisture (max)", "6%"], ["Fat (max)", "1%"], ["Ash (max)", "3%"], ["Form", "Collagen peptides (fine powder)"], ["Colour", "Off white"], ["Solubility", "High (water soluble)"], ["Application", "Food, nutraceutical, cosmetic, aquaculture and animal feed"]],
    details: [
      { title: "Key Amino Acids (Collagen Profile)", items: [
        ["Glycine", "Most abundant amino acid in collagen.", "33%"],
        ["Proline", "Supports joint health and skin elasticity.", "12%"],
        ["Alanine", "Helps the body process glucose and eliminate toxins.", "11%"],
        ["Hydroxyproline", "Collagen-specific amino acid that stabilises the collagen structure.", "10%"],
      ] },
      { title: "Essential Amino Acids", items: [
        ["Leucine", "Crucial for muscle protein synthesis and repair."],
        ["Lysine", "Important for bone health, tissue repair and hormone production."],
        ["Valine", "Promotes muscle growth and tissue regeneration."],
        ["Isoleucine", "Assists with hemoglobin synthesis and energy regulation."],
        ["Phenylalanine", "Essential for brain health and neurotransmitter function."],
        ["Threonine", "Supports structural proteins like collagen and elastin."],
        ["Methionine", "Necessary for metabolism, tissue growth and detoxification."],
        ["Histidine", "Important for maintaining the myelin sheath (nerve cell protection)."],
        ["Tryptophan", "Precursor to serotonin, which regulates mood and sleep."],
      ] },
      { title: "Non-Essential Amino Acids", items: [
        ["Glutamic Acid", "Supports brain function and metabolism."],
        ["Aspartic Acid", "Plays a key role in energy production and hormone regulation."],
        ["Arginine", "Boosts immune function and improves blood circulation."],
        ["Alanine", "Helps the body process glucose and eliminate toxins."],
        ["Glycine", "Aids in cellular growth, DNA construction and muscle health."],
        ["Proline", "Supports joint health and skin elasticity."],
        ["Serine", "Crucial for proper brain function and the central nervous system."],
        ["Tyrosine", "Helps improve alertness, focus and manage stress."],
      ] },
    ] },
];

export const applications = [
  { icon: "🔬", title: "Research Reference: Nofima", text: "Norwegian Institute of Food, Fisheries and Aquaculture Research – marine ingredients and feed research. Visit nofima.com →", img: "nofima-lab.webp", alt: "Nofima researchers in a feed technology lab (photo: Nofima)", href: "https://nofima.com/" },
  { icon: "🔬", title: "Research Reference: DTU Aqua", text: "National Institute of Aquatic Resources, Technical University of Denmark – fisheries and aquaculture research. Visit aqua.dtu.dk →", img: "dtu-aqua.webp", alt: "Fish feed trial tanks in an aquaculture research lab", href: "https://www.aqua.dtu.dk/english" },
  { icon: "🐟", title: "Industry Reference: EWOS Salmon Feed", text: "EWOS – salmon feeds and services for aquaculture. Visit ewos.com →", img: "ewos-ref.webp?v=2", alt: "Two scientists in white lab coats in a laboratory corridor", href: "https://www.ewos.com/uk/products-and-services/salmon/" },
  { icon: "💊", title: "Nutraceuticals", text: "Collagen peptides for supplements, beauty and functional foods." },
];

export const quality = [
  ["Responsibly sourced", "Nordic catch from Norway and Denmark"],
  ["Cold-chain handling", "to protect freshness and nutrients"],
  ["Batch-tested", "for protein, moisture and purity"],
  ["Sealed 50 kg drums", "for safe storage and transport"],
  ["Documentation", "available on request with every order"],
];
