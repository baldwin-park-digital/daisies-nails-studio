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
    name: "Daisies Nail Studio",
    description: "Experience sophisticated nail artistry in an airy, elegant atmosphere. Premium nail care services in the heart of Los Angeles.",
    logo: "Daisies",
    logoHref: "./",
  },
  contact: {
    email: "hello@daisiesnailstudio.com",
    phone: "+1 (323) 957-9879",
    address: "5770 Melrose Ave, Los Angeles, CA 90038",
  },
  hours: [
    { day: "Monday - Friday", time: "10:00 AM - 8:00 PM" },
    { day: "Saturday", time: "10:00 AM - 7:00 PM" },
    { day: "Sunday", time: "11:00 AM - 6:00 PM" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/daisiesnailstudio", icon: "📷" },
    { label: "Facebook", href: "https://facebook.com/daisiesnailstudio", icon: "f" },
    { label: "Yelp", href: "https://yelp.com/biz/daisies-nail-studio", icon: "★" },
    { label: "Google", href: "https://maps.google.com/?q=5770+Melrose+Ave+Los+Angeles+CA+90038", icon: "G" },
  ],
};
