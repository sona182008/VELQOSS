/**
 * VELQOSS - Product Catalog Data
 * Easily add Product #101, #102, #103... by appending objects to the array.
 */
const PRODUCTS_DATA = [
  {
    id: "prod-001",
    name: "Premium Matte Business Cards",
    category: "cards",
    price: 350,
    priceLabel: "Starting at ₹350 / 100 Pcs",
    description: "350 GSM ultra-thick paper with velvet touch matte lamination and crisp color reproduction.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    featured: true,
    options: {
      sizes: ["Standard (3.5x2 in)", "Square (2.5x2.5 in)"],
      materials: ["350 GSM Matt", "400 GSM Velvet", "Textured Premium"],
      quantities: [100, 250, 500, 1000]
    }
  },
  {
    id: "prod-002",
    name: "Luxury Gold Foil Business Cards",
    category: "cards",
    price: 850,
    priceLabel: "Starting at ₹850 / 100 Pcs",
    description: "Metallic metallic foil stamping on dark matte background. Perfect for premium corporate branding.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    featured: true,
    options: {
      sizes: ["Standard (3.5x2 in)"],
      materials: ["350 GSM Dark Matt + Gold Foil", "350 GSM + Rose Gold Foil"],
      quantities: [100, 250, 500]
    }
  },
  {
    id: "prod-003",
    name: "Custom PVC ID Cards",
    category: "pvc",
    price: 80,
    priceLabel: "Starting at ₹80 / Card",
    description: "High-durability waterproof plastic cards with vibrant printing for schools, colleges, and corporate offices.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80",
    featured: true,
    options: {
      sizes: ["CR80 Standard ID Size"],
      materials: ["Glossy PVC", "Matte PVC", "Smart Chip / RFID Card"],
      quantities: [10, 50, 100, 500]
    }
  },
  {
    id: "prod-004",
    name: "Royal Acrylic Wedding Invitation",
    category: "invitation",
    price: 1500,
    priceLabel: "Starting at ₹1,500 / Pack of 10",
    description: "Clear or frosted 3mm acrylic card with UV gel lettering and custom golden wax seal envelope.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    featured: true,
    options: {
      sizes: ["5x7 Inches", "6x8 Inches"],
      materials: ["Clear Acrylic", "Frosted Acrylic", "Gold Mirror Acrylic"],
      quantities: [25, 50, 100, 250]
    }
  },
  {
    id: "prod-005",
    name: "Corporate Branding Gift Combo",
    category: "gifts",
    price: 1200,
    priceLabel: "Starting at ₹1,200 / Set",
    description: "Includes customized metal pen, temperature display flask, diary, and keychain in a premium box.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
    featured: true,
    options: {
      sizes: ["Standard Box Set"],
      materials: ["Leatherette + Matte Steel"],
      quantities: [5, 10, 25, 100]
    }
  },
  {
    id: "prod-006",
    name: "Custom Graphic Logo Design",
    category: "design",
    price: 1999,
    priceLabel: "Starting at ₹1,999",
    description: "3 unique brand concepts, vector source files, export in PDF/SVG/PNG, and full commercial usage rights.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
    featured: true,
    options: {
      sizes: ["Digital Vector Deliverable"],
      materials: ["Source Files (AI, EPS, PSD, PDF, PNG)"],
      quantities: [1]
    }
  },
  {
    id: "prod-007",
    name: "Social Media Banner & Post Pack",
    category: "digital",
    price: 1499,
    priceLabel: "Starting at ₹1,499 / Pack of 5",
    description: "Custom tailored promotional graphic design templates for Instagram, Facebook, and LinkedIn marketing.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    featured: false,
    options: {
      sizes: ["Square (1:1)", "Story (9:16)", "Landscape Banner"],
      materials: ["High-Res JPEG / PNG"],
      quantities: [5, 10, 20]
    }
  },
  {
    id: "prod-008",
    name: "Custom Printed Ceramic Coffee Mug",
    category: "gifts",
    price: 250,
    priceLabel: "Starting at ₹250 / Piece",
    description: "Grade-A ceramic mug with permanent high-gloss sublimation photo print. Microwave and dishwasher safe.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    featured: false,
    options: {
      sizes: ["325ml Standard"],
      materials: ["White Ceramic", "Black Magic Heat-Reveal", "Inner Color"],
      quantities: [1, 5, 20, 100]
    }
  },
  {
    id: "prod-009",
    name: "Vinyl Flex Banner Printing",
    category: "printing",
    price: 15,
    priceLabel: "Starting at ₹15 / Sq.Ft",
    description: "Weather-proof outdoor flex advertising banner with heavy brass grommets for easy installation.",
    image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=600&q=80",
    featured: false,
    options: {
      sizes: ["Custom Footages"],
      materials: ["Normal Flex", "Star Flex", "Backlit Flex"],
      quantities: [1]
    }
  },
  {
    id: "prod-010",
    name: "Laminated Business Brochure (Tri-Fold)",
    category: "business",
    price: 1200,
    priceLabel: "Starting at ₹1,200 / 100 Pcs",
    description: "High-density glossy or matte brochure for product catalogs, real estate specs, and business portfolios.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    featured: false,
    options: {
      sizes: ["A4 Tri-fold", "A5 Bi-fold"],
      materials: ["170 GSM Gloss", "220 GSM Matte"],
      quantities: [100, 250, 500, 1000]
    }
  }
];

// Dynamic programmatic generator helper to effortlessly demonstrate catalogue scaling up to 100+ items
(function seedCatalog() {
  const categories = ["cards", "pvc", "invitation", "business", "gifts", "design", "digital", "printing"];
  const titles = [
    "Custom Standee Banner", "Embossed Letterhead", "Rubber Stamp", "Die-Cut Stickers",
    "Printed T-Shirt", "NFC Digital Visiting Card", "Flyers & Leaflets", "Bill Book & Cash Memo",
    "Custom Keychains", "Table Top Calendar", "Certificate Printing", "Lanyard & Holder Set"
  ];
  
  let currentCount = PRODUCTS_DATA.length;
  for (let i = currentCount + 1; i <= 100; i++) {
    const cat = categories[i % categories.length];
    const titleSeed = titles[i % titles.length];
    PRODUCTS_DATA.push({
      id: `prod-${String(i).padStart(3, '0')}`,
      name: `${titleSeed} - Model #${i}`,
      category: cat,
      price: 100 + (i * 15),
      priceLabel: `Starting at ₹${100 + (i * 15)}`,
      description: `High quality customized ${titleSeed.toLowerCase()} prepared directly according to your specific requirements.`,
      image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=600&q=80",
      featured: false,
      options: {
        sizes: ["Standard", "Custom"],
        materials: ["Standard Grade", "Premium Quality"],
        quantities: [1, 10, 50, 100]
      }
    });
  }
})();
