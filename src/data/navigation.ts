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
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ],
  actionItems: [
    { label: globalSiteConfig.contact.phone || "", href: `tel:+13239579879`, variant: "default" },
    { label: "Book Now", href: "tel:+13239579879", variant: "primary" },
  ]
};

export const siteConfig = {
  logo: globalSiteConfig.company.logo,
  logoHref: globalSiteConfig.company.logoHref,
  ...navigationConfig,
};
