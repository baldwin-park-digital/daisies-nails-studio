/**
 * Master site configuration - single source of truth for all site-wide data
 * Edit this file to update company info, contact details, and branding across the entire site
 */

export interface SiteConfig {
  company: {
    name: string;
    description: string;
    logo: string;
    logoHref: string;
  };
  contact: {
    email?: string;
    phone?: string;
    address?: string;
  };
  hours?: {
    day: string;
    time: string;
  }[];
  social: {
    label: string;
    href: string;
    icon: string;
  }[];
}

export const siteConfig: SiteConfig = {
  company: {
    name: "Your Company",
    description: "Building amazing products and services for our customers.",
    logo: "YourLogo",
    logoHref: "./",
  },
  contact: {
    email: "hello@yourcompany.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
  },
  hours: [
    { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
    { label: "GitHub", href: "https://github.com", icon: "◆" },
    { label: "Instagram", href: "https://instagram.com", icon: "📷" },
  ],
};
