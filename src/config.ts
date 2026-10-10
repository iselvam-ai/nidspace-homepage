/**
 * Site-wide configuration. Update these values when they change.
 *
 * CONTACT_EMAIL: set to a verified, monitored mailbox (e.g. "hello@nidspace.com").
 * Leave it as an empty string until a real address is confirmed; the site will
 * then show a neutral note instead of a contact button or a fabricated address.
 */
export const CONTACT_EMAIL = "";

export const SITE_URL = "https://nidspace.com";

export type ProductStatus = "live" | "in-development";

export interface Product {
  id: string;
  name: string;
  description: string;
  status: ProductStatus;
  url?: string;
  ctaLabel?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "emi",
    name: "Nidspace EMI Calculator",
    description:
      "Explore loan EMIs, compare borrowing options and understand how prepayments can affect your repayment schedule.",
    status: "live",
    url: "https://emi.nidspace.com",
    ctaLabel: "Visit EMI Calculator",
  },
  {
    id: "tamil-cinema",
    name: "Nidspace Tamil Cinema Database",
    description:
      "Discover Tamil films, explore cast and crew information, and browse a growing collection of cinema data.",
    status: "live",
    url: "https://ott.nidspace.com",
    ctaLabel: "Explore Tamil Cinema",
  },
  {
    id: "family-heritage",
    name: "Nidspace Family Heritage",
    description:
      "A family-history platform concept designed to help preserve family connections, memories and milestones.",
    status: "in-development",
  },
];
