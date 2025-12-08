import { siteConfig } from "./site";

export interface ContactInfo {
  title: string;
  description?: string;
  mapEmbedUrl?: string; // Google Maps embed iframe src
}

export const contactInfo: ContactInfo = {
  title: "Visit Us",
  description: "Stop by and say hello! We'd love to meet you.",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890",
};

// Combine with siteConfig - contact, hours, and social info come from site.ts
export const fullContactData = {
  ...contactInfo,
  contact: siteConfig.contact,
  hours: siteConfig.hours,
  social: siteConfig.social,
};
