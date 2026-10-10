/**
 * Site-wide configuration. Update these values when they change.
 */

/** Official contact address. Used in the Contact section, footer and every mailto link. */
export const CONTACT_EMAIL = "ceo@nidspace.com";

/** Canonical origin for the site. Used for canonical and Open Graph URLs. */
export const SITE_URL = "https://nidspace.com";

export type ProductStatus = "live" | "in-development";

export interface Product {
  id: "emi" | "tamil-cinema" | "family-heritage";
  name: string;
  description: string;
  status: ProductStatus;
  features: string[];
  url?: string;
  ctaLabel?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "emi",
    name: "Nidspace EMI Calculator",
    description:
      "Make loan planning easier with EMI calculations, loan comparisons and prepayment tools designed to help users understand repayment options.",
    status: "live",
    features: ["EMI Calculation", "Loan Comparison", "Prepayment Analysis"],
    url: "https://emi.nidspace.com/",
    ctaLabel: "Open EMI Calculator",
  },
  {
    id: "tamil-cinema",
    name: "Nidspace Tamil Cinema Database",
    description:
      "Explore Tamil cinema through film information, cast and crew details, and a growing searchable collection of cinema data.",
    status: "live",
    features: ["Discover Tamil Films", "Explore Cast and Crew", "Search Cinema Information"],
    url: "https://ott.nidspace.com/",
    ctaLabel: "Explore Tamil Cinema",
  },
  {
    id: "family-heritage",
    name: "Nidspace Family Heritage",
    description:
      "A family-history platform concept focused on preserving family connections, memories, milestones and heritage information.",
    status: "in-development",
    features: ["Family Tree Exploration", "Family Milestones", "Heritage Records"],
  },
];
