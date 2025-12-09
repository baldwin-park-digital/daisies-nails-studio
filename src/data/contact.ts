import { siteConfig } from "./site";

export interface ContactInfo {
  title: string;
  description?: string;
  mapEmbedUrl?: string; // Google Maps embed iframe src
}

export const contactInfo: ContactInfo = {
  title: "Visit Us",
  description: "Stop by and say hello! We'd love to meet you.",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.4662516860853!2d-118.33051031255505!3d34.08319430390274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b9742bebcf2b%3A0xc32363afef66ada6!2sDaisies%20Nails%20Studio!5e0!3m2!1sen!2sus!4v1765242441429!5m2!1sen!2sus",
};

// Combine with siteConfig - contact, hours, and social info come from site.ts
export const fullContactData = {
  ...contactInfo,
  contact: siteConfig.contact,
  hours: siteConfig.hours,
  social: siteConfig.social,
};
