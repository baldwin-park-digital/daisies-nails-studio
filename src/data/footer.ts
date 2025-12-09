import { siteConfig as globalSiteConfig } from "./site";
import { siteConfig } from "./navigation";

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
      title: "We're Hiring!",
      links: [
        { label: "Nail Technicians, DM your portfolio to us on Instagram.", href: "https://www.instagram.com/daisiesnailsstudio", external: true},
      ],
    },
    {
      title: "Site",
      links: siteConfig.navItems.map(({ label, href, external }) => ({ label, href, external })),
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  copyright: `© ${new Date().getFullYear()} ${globalSiteConfig.company.name}. All rights reserved.`,
};

// Export combined config with company and social info from global site config
export const footerFullConfig = {
  ...globalSiteConfig,
  ...footerConfig,
};
