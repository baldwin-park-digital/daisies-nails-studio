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
    {
      label: "Docs",
      href: "/docs",
      submenu: [
        { label: "Getting Started", href: "/docs" },
        { label: "API Reference", href: "/docs/api" },        { label: "API Reference", href: "/docs/api" },
      ]
    },
    { label: "Theme", href: "/theme" },
    { label: "Contact", href: "#contact" }
  ],
  actionItems: [
    { label: globalSiteConfig.contact.phone || "", href: `tel:${globalSiteConfig.contact.phone}`, variant: "default" },
    { label: "Get Started", href: "/signup", variant: "outline" },
  ]
};

export const siteConfig = {
  logo: globalSiteConfig.company.logo,
  logoHref: globalSiteConfig.company.logoHref,
  ...navigationConfig,
};
