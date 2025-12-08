import { siteConfig } from "./site";

export interface ContactInfo {
  title: string;
  description?: string;
  mapEmbedUrl?: string; // Google Maps embed iframe src
}

export const contactInfo: ContactInfo = {
  title: "Visit Our Studio",
  description: "Experience luxury nail care in our elegant Los Angeles studio. Walk-ins welcome, appointments preferred.",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.9551234567!2d-118.3425!3d34.0838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bec6f2b8a9e7%3A0x0!2s5770%20Melrose%20Ave%2C%20Los%20Angeles%2C%20CA%2090038!5e0!3m2!1sen!2sus!4v1234567890",
};

// Combine with siteConfig - contact, hours, and social info come from site.ts
export const fullContactData = {
  ...contactInfo,
  contact: siteConfig.contact,
  hours: siteConfig.hours,
  social: siteConfig.social,
};
