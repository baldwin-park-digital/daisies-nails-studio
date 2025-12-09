/**
 * Master site configuration - single source of truth for all site-wide data
 * Edit this file to update company info, contact details, and branding across the entire site
 */

export interface SiteConfig {
  company: {
    name: string;
    description: string;
    logo: { part1: string; part2: string };
    logoSrc: { src: string; width: number; height: number };
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
  }[];
}

import logoImg from '../assets/logo.png';

export const siteConfig: SiteConfig = {
  company: {
    name: "Daisies Nail Studio",
    description: "Luxury nail artistry and spa treatments designed for modern elegance.",
    logo: { part1: "Daisies", part2: "Nails Studio" },
    logoSrc: logoImg,
    logoHref: "./",
  },
  contact: {
    email: "daisiesnailsstudio@gmail.com",
    phone: "+1 (323) 957-9879",
    address: "5770 Melrose Ave, Los Angeles, CA 90038",
  },
  hours: [
    { day: "Monday - Sunday", time: "9:00 AM - 5:00 PM" },
    { day: "", time: "Hours may vary on Holidays" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583520501321"},
    { label: "Instagram", href: "https://instagram.com/daisiesnailsstudio" },
    { label: "TikTok", href: "https://www.tiktok.com/@daisiesnailsstudio" },
  ],
};
