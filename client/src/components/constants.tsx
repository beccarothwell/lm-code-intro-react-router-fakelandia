export interface NavItemLink {
  text: string;
  slug: string;
}

export const MAIN_NAV_LINKS: Array<NavItemLink> = [
  { text: "Home", slug: "" },
  { text: "Confession", slug: "confession" },
  { text: "Misdemeanour", slug: "misdemeanour" },
];
