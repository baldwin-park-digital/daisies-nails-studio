export interface CardItem {
  id?: string;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  image?: string;
  badge?: string;
}

export interface CardGridConfig {
  title?: string;
  description?: string;
  items: CardItem[];
  columns?: "2" | "3" | "4";
  variant?: "default" | "highlight" | "minimal";
}

export const featuresCardGrid: CardGridConfig = {
  title: "Features",
  description: "Everything you need to build amazing sites",
  columns: "3",
  variant: "default",
  items: [
    {
      id: "fast",
      title: "Fast",
      description: "Lightning quick performance with Astro's static site generation",
    },
    {
      id: "styled",
      title: "Styled",
      description: "Beautiful default styling with Tailwind CSS and custom components",
    },
    {
      id: "responsive",
      title: "Responsive",
      description: "Mobile-first responsive design that works on all devices",
    },
    {
      id: "accessible",
      title: "Accessible",
      description: "Built with accessibility best practices from the ground up",
    },
    {
      id: "seo",
      title: "SEO Ready",
      description: "Optimized for search engines with proper meta tags and structure",
    },
    {
      id: "themeable",
      title: "Themeable",
      description: "Built-in light/dark theme support with CSS custom properties",
    },
  ],
};

export const cardVariantsGrid: CardGridConfig = {
  title: "Our Services",
  description: "Expert nail care and artistry for every occasion",
  columns: "3",
  variant: "default",
  items: [
    {
      id: "manicures",
      title: "Manicures",
      description: "From classic to gel, we offer a range of manicure services to keep your hands looking pristine",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=160&fit=crop",
    },
    {
      id: "pedicures",
      title: "Pedicures",
      description: "Relax and rejuvenate with our luxurious pedicure treatments",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&h=160&fit=crop",
    },
    {
      id: "nail-art",
      title: "Nail Art",
      description: "Express your unique style with custom hand-painted designs and creative embellishments",
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&h=160&fit=crop",
    },
    {
      id: "gel",
      title: "Gel Services",
      description: "Long-lasting gel manicures and pedicures that stay perfect for weeks",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=160&fit=crop",
    },
    {
      id: "enhancements",
      title: "Nail Enhancements",
      description: "Acrylic, gel extensions, and dip powder for stunning, durable nails",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&h=160&fit=crop",
    },
    {
      id: "special",
      title: "Special Occasions",
      description: "Bridal nails, special events, and group packages available",
      badge: "Featured",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=160&fit=crop",
    },
  ],
};
