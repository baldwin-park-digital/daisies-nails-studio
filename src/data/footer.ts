import { siteConfig as globalSiteConfig } from "./site";

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterConfig {
  sections: FooterSection[];
  legal: {
    label: string;
    href: string;
  }[];
  copyright: string;
}

export const footerConfig: FooterConfig = {
  sections: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Documentation", href: "/docs" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "#help", external: true },
        { label: "Community", href: "#community", external: true },
        { label: "API Docs", href: "/api" },
        { label: "Status", href: "#status", external: true },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  copyright: `© ${new Date().getFullYear()} ${globalSiteConfig.company.name}. All rights reserved.`,
};

// Export combined config with company and social info from global site config
export const footerFullConfig = {
  ...globalSiteConfig,
  ...footerConfig,
};
