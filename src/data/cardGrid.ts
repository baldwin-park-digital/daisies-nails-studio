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
  title: "Card Variants",
  description: "Explore different ways to use the Card component",
  columns: "3",
  variant: "default",
  items: [
    {
      id: "basic",
      title: "Basic Card",
      description: "Simple card with title and description",
    },
    {
      id: "badge",
      title: "With Badge",
      description: "Card with a badge label to highlight status",
      badge: "Popular",
    },
    {
      id: "cta",
      title: "With CTA",
      description: "Card with a clickable link",
      href: "/",
    },
    {
      id: "external",
      title: "External Link",
      description: "Card linking to external resource",
      href: "https://astro.build",
      external: true,
    },
    {
      id: "image",
      title: "With Image",
      description: "Card displaying an image above content",
      image: "https://picsum.photos/400/160?random=1",
    },
    {
      id: "all",
      title: "All Features",
      description: "Card showcasing all available properties",
      badge: "Featured",
      href: "/",
      image: "https://picsum.photos/400/160?random=2",
    },
  ],
};
