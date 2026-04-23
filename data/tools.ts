export type Tool = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const tools: Tool[] = [
  {
    slug: "card-decks",
    title: "Card Decks",
    description:
      "Card-based tools for reflection, facilitation, conversation, and creative development.",
    href: "/tools/card-decks",
  },
  {
    slug: "prompt-kits",
    title: "Prompt Kits",
    description:
      "Structured prompt systems that help ideas become clearer, more usable, and easier to develop.",
    href: "/tools/prompt-kits",
  },
  {
    slug: "printable-tools",
    title: "Printable Tools",
    description:
      "Downloadable formats for workshops, learning, reflection, and low-friction creative work.",
    href: "/tools/printable-tools",
  },
  {
    slug: "workshop-formats",
    title: "Workshop Formats",
    description:
      "Structured workshop formats for groups, participation, facilitation, and collective thinking.",
    href: "/tools/workshop-formats",
  },
];
