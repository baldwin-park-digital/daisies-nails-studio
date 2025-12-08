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
    id: "breads",
    name: "Artisan Breads",
    description: "Freshly baked daily using traditional methods",
  },
  {
    id: "pastries",
    name: "Pastries & Sweets",
    description: "Light, flaky, and perfectly sweet",
  },
  {
    id: "cakes",
    name: "Custom Cakes",
    description: "Made to order for your special occasions",
  },
  {
    id: "cookies",
    name: "Cookies & Treats",
    description: "Classic favorites and seasonal specials",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Sourdough Bread",
    description: "Traditional sourdough with a crispy crust and tangy flavor",
    price: "$8",
    category: "breads",
    tags: ["Vegan"],
    popular: true,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    name: "Whole Wheat Loaf",
    description: "Hearty and nutritious, perfect for sandwiches",
    price: "$7",
    category: "breads",
    tags: ["Vegan"],
  },
  {
    id: "3",
    name: "Cinnamon Rolls",
    description: "Soft, fluffy rolls with cream cheese frosting",
    price: "$12/6-pack",
    category: "pastries",
    tags: ["Nut-free"],
    popular: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    name: "Croissants",
    description: "Buttery, flaky French pastries",
    price: "$4 each",
    category: "pastries",
  },
  {
    id: "5",
    name: "Blueberry Muffins",
    description: "Bursting with fresh blueberries",
    price: "$10/6-pack",
    category: "pastries",
    tags: ["Nut-free"],
  },
  {
    id: "6",
    name: "Custom Birthday Cake",
    description: "Your choice of flavor, design, and size",
    price: "Starting at $45",
    category: "cakes",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop",
  },
  {
    id: "7",
    name: "Wedding Cake",
    description: "Multi-tiered elegance for your special day",
    price: "Custom quote",
    category: "cakes",
  },
  {
    id: "8",
    name: "Chocolate Chip Cookies",
    description: "Classic cookies with premium chocolate chips",
    price: "$12/dozen",
    category: "cookies",
    tags: ["Nut-free"],
    popular: true,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
  },
  {
    id: "9",
    name: "Oatmeal Raisin Cookies",
    description: "Chewy oats with plump raisins",
    price: "$10/dozen",
    category: "cookies",
    tags: ["Nut-free"],
  },
  {
    id: "10",
    name: "Vegan Brownies",
    description: "Rich, fudgy brownies made without dairy or eggs",
    price: "$15/dozen",
    category: "cookies",
    tags: ["Vegan", "Nut-free"],
  },
];
