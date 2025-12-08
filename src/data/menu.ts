export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  category: string;
  tags?: string[]; // Vegan, Gluten-free, Nut-free, etc.
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "manicures",
    name: "Manicures",
    description: "Elegant nail care for beautiful hands",
  },
  {
    id: "pedicures",
    name: "Pedicures",
    description: "Luxurious treatments for your feet",
  },
  {
    id: "nail-art",
    name: "Nail Art & Design",
    description: "Express yourself with custom nail designs",
  },
  {
    id: "enhancements",
    name: "Nail Enhancements",
    description: "Gel, acrylic, and dip powder services",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Manicure",
    description: "Traditional nail care with polish application",
    price: "$35",
    category: "manicures",
    tags: ["45 min"],
    popular: true,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    name: "Gel Manicure",
    description: "Long-lasting gel polish that stays perfect for weeks",
    price: "$55",
    category: "manicures",
    tags: ["60 min"],
    popular: true,
  },
  {
    id: "3",
    name: "French Manicure",
    description: "Timeless elegance with classic French tips",
    price: "$45",
    category: "manicures",
    tags: ["50 min"],
  },
  {
    id: "4",
    name: "Spa Manicure",
    description: "Indulgent treatment with exfoliation and massage",
    price: "$65",
    category: "manicures",
    tags: ["75 min"],
    popular: true,
  },
  {
    id: "5",
    name: "Classic Pedicure",
    description: "Complete foot care with nail shaping and polish",
    price: "$50",
    category: "pedicures",
    tags: ["60 min"],
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    name: "Spa Pedicure",
    description: "Luxurious pedicure with warm stones and extended massage",
    price: "$75",
    category: "pedicures",
    tags: ["90 min"],
    popular: true,
  },
  {
    id: "7",
    name: "Gel Pedicure",
    description: "Long-lasting gel polish for beautiful toes",
    price: "$65",
    category: "pedicures",
    tags: ["75 min"],
  },
  {
    id: "8",
    name: "Custom Nail Art",
    description: "Unique hand-painted designs tailored to your style",
    price: "Starting at $10",
    category: "nail-art",
    tags: ["Per nail"],
    popular: true,
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&h=300&fit=crop",
  },
  {
    id: "9",
    name: "Ombre Nails",
    description: "Beautiful gradient color blending",
    price: "$85",
    category: "nail-art",
    tags: ["90 min"],
  },
  {
    id: "10",
    name: "Chrome Finish",
    description: "Mirror-like metallic shine",
    price: "$95",
    category: "nail-art",
    tags: ["75 min"],
  },
  {
    id: "11",
    name: "Full Set Acrylic",
    description: "Durable acrylic nail extensions",
    price: "$85",
    category: "enhancements",
    tags: ["120 min"],
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&h=300&fit=crop",
  },
  {
    id: "12",
    name: "Gel Extensions",
    description: "Natural-looking gel nail extensions",
    price: "$95",
    category: "enhancements",
    tags: ["120 min"],
    popular: true,
  },
  {
    id: "13",
    name: "Dip Powder",
    description: "Strong, chip-resistant color that lasts",
    price: "$75",
    category: "enhancements",
    tags: ["75 min"],
  },
  {
    id: "14",
    name: "Nail Repair",
    description: "Fix broken or damaged nails",
    price: "$15",
    category: "enhancements",
    tags: ["Per nail"],
  },
];
