import { siteConfig as globalSiteConfig } from "./site";

export interface NavItem {
  label: string;
  href: string;
  variant?: "default" | "primary" | "secondary" | "outline" | "action";
  external?: boolean;
  submenu?: NavItem[];
}

export interface NavigationConfig {
  navItems: NavItem[];
  actionItems?: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  navItems: [
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" }
  ],
  actionItems: [
    { label: globalSiteConfig.contact.phone || "", href: `tel:${globalSiteConfig.contact.phone}`, variant: "default" },
    { label: "BOOK NOW", href: "https://daisiesnailsstudio.getrichbooking.com/", variant: "outline" },
  ]
};

export const siteConfig = {
  logo: globalSiteConfig.company.logo,
  logoSrc: globalSiteConfig.company.logoSrc,
  logoHref: globalSiteConfig.company.logoHref,
  ...navigationConfig,
};
