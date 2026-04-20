import { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "coordination-friction",
    name: "Meeting Friction",
    shortDescription:
      "When decisions are slow, meetings are overloaded, and coordination keeps leaking.",
    oneLineDefinition:
      "A structured facilitated entry product for identifying where visible coordination friction is actually coming from.",
    contextLine:
      "Use this when meetings continue, but decisions do not settle.",
    diagnosticId: "friction",
  },
  {
    slug: "manager-conversations",
    name: "Manager Conversations",
    shortDescription:
      "When difficult conversations are delayed, softened, or handled without enough structure.",
    oneLineDefinition:
      "A structured facilitated format for managers who need better conversation architecture, not generic communication training.",
    contextLine:
      "Use this when the same tensions recur because hard conversations are not being held well enough, or early enough.",
    diagnosticId: "manager",
  },
  {
    slug: "team-climate-reset",
    name: "Team Climate Reset",
    shortDescription:
      "When something shifted after pressure, and the team still functions but no longer feels the same.",
    oneLineDefinition:
      "A repair format for teams that need a structured way to surface what changed and re-establish working ground.",
    contextLine:
      "Use this after strain, reorganization, leadership change, difficult delivery periods, or a departure that was never fully processed.",
    diagnosticId: "climate",
  },
  {
    slug: "change-communication",
    name: "Change Communication",
    shortDescription:
      "When a major change has been announced, but the communication architecture around it is weak.",
    oneLineDefinition:
      "A structured facilitation format for leadership teams designing how change is carried across a distributed organization.",
    contextLine:
      "Use this when uncertainty, resistance, or inconsistency is being created by how a change is being communicated.",
    diagnosticId: "change",
  },
  {
    slug: "distributed-operating-system",
    name: "Distributed Operating System",
    shortDescription:
      "When the organization is ready to design how distributed work should actually run.",
    oneLineDefinition:
      "A capstone system-design engagement for mature clients ready to redesign coordination architecture, not just patch symptoms.",
    contextLine:
      "Use this when acute issues have been addressed and the organization is ready for structural design work.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
