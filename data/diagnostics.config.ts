import { DiagnosticConfig } from "@/types/diagnostic";

const note = "This is a structured interpretation of a short set of responses, not a formal diagnosis of the situation.";

export const diagnosticsConfig: Record<string, DiagnosticConfig> = {
  friction: {
    id: "friction",
    tileLabel: "Meetings & coordination",
    tileDesc: "Decisions are slow. Meetings are overloaded. Coordination is leaking.",
    label: "Meeting Friction",
    toolName: "Is this actually a meeting problem?",
    intro: "Coordination failures and meeting failures are not the same thing. This check helps clarify which is present in your organization.",
    questions: [
      { text: "After most meetings, are next steps clear to everyone who was there?", options: [
        { label: "Rarely — ambiguity usually follows", weight: 2 },
        { label: "Partly — it varies by meeting", weight: 1 },
        { label: "Generally yes", weight: 0 }
      ]},
      { text: "Are decisions made inside meetings or relitigated afterward?", options: [
        { label: "Relitigated — decisions rarely hold", weight: 2 },
        { label: "Sometimes", weight: 1 },
        { label: "Mostly decided and held", weight: 0 }
      ]},
      { text: "Would reducing meetings solve the problem or relocate it?", options: [
        { label: "Relocate it — the issue is coordination", weight: 2 },
        { label: "Partly help", weight: 1 },
        { label: "Solve it", weight: 0 }
      ]}
    ],
    results: {
      low: { headline: "The meetings themselves may not be the core issue.", interpretation: "The pattern suggests meetings may be functioning better than the surrounding coordination structure.", note, cta: "Talk through your situation", ctaNote: "No commitment. A 25-minute conversation.", ctaHref: "/book" },
      medium: { headline: "There are signs of genuine meeting dysfunction, alongside other factors.", interpretation: "Some of what is happening reflects structural meeting problems, but the picture is mixed.", note, cta: "Book a diagnostic conversation", ctaNote: "We will identify which product, if any, is relevant.", ctaHref: "/book" },
      strong: { headline: "The pattern suggests real structural problems in how meetings are functioning.", interpretation: "The responses indicate meetings are not serving their coordination function well enough.", note, cta: "Learn about Meeting Friction", ctaNote: "Or book a conversation first if you would like to discuss.", ctaHref: "/products/coordination-friction" }
    }
  },
  manager: {
    id: "manager",
    tileLabel: "Manager conversations",
    tileDesc: "Difficult conversations are not being had. The same issues recur.",
    label: "Manager Conversations",
    toolName: "Are conversations being delayed?",
    intro: "In distributed organizations, difficult conversations are easy to defer. This check identifies whether deferral has become a pattern.",
    questions: [
      { text: "Are there situations your managers know need a direct conversation but have not had yet?", options: [
        { label: "Yes — several come to mind", weight: 2 },
        { label: "Probably one or two", weight: 1 },
        { label: "Not that I am aware of", weight: 0 }
      ]},
      { text: "Do difficult conversations resolve the issue or manage the discomfort?", options: [
        { label: "Manage the discomfort", weight: 2 },
        { label: "It varies", weight: 1 },
        { label: "Generally resolve the issue", weight: 0 }
      ]},
      { text: "Do managers share a language for hard conversations or improvise?", options: [
        { label: "Each improvises", weight: 2 },
        { label: "Some shared norms", weight: 1 },
        { label: "There is a shared approach", weight: 0 }
      ]}
    ],
    results: {
      low: { headline: "Conversation deferral does not appear to be the primary issue.", interpretation: "The pattern suggests difficult conversations are being held with reasonable frequency and some structure.", note, cta: "Talk through your situation", ctaNote: "No commitment. A 25-minute conversation.", ctaHref: "/book" },
      medium: { headline: "There are signs that some conversations are being systematically avoided.", interpretation: "Deferral appears uneven across managers, which is often the more structural problem.", note, cta: "Book a diagnostic conversation", ctaNote: "We will identify which product, if any, is relevant.", ctaHref: "/book" },
      strong: { headline: "Conversation deferral appears to be a systemic pattern, not an individual one.", interpretation: "The responses suggest difficult conversations are being consistently avoided or mishandled.", note, cta: "Learn about Manager Conversations", ctaNote: "Or book a conversation first if you would like to discuss.", ctaHref: "/products/manager-conversations" }
    }
  },
  climate: {
    id: "climate",
    tileLabel: "Team climate",
    tileDesc: "Something shifted after a difficult period. The team functions but feels different.",
    label: "Team Climate Reset",
    toolName: "Has the team drifted after pressure?",
    intro: "Teams that have been through significant change often function on the surface while something structural has shifted underneath.",
    questions: [
      { text: "Has this team experienced a significant change, strain, or loss recently?", options: [
        { label: "Yes — something significant happened", weight: 2 },
        { label: "Some turbulence", weight: 1 },
        { label: "No — it has been stable", weight: 0 }
      ]},
      { text: "Does the team function on tasks but feel more distant from each other?", options: [
        { label: "Yes — something is different", weight: 2 },
        { label: "Somewhat", weight: 1 },
        { label: "No — connection seems intact", weight: 0 }
      ]},
      { text: "Has the team had a structured opportunity to reflect on what changed?", options: [
        { label: "No — not as a team", weight: 2 },
        { label: "Informally only", weight: 1 },
        { label: "Yes — openly and deliberately", weight: 0 }
      ]}
    ],
    results: {
      low: { headline: "The team does not appear to have drifted significantly from a prior state.", interpretation: "The pattern does not suggest the kind of latent strain that a Climate Reset is designed to address.", note, cta: "Talk through your situation", ctaNote: "No commitment. A 25-minute conversation.", ctaHref: "/book" },
      medium: { headline: "There are some signs of post-pressure drift — but the picture is not clear-cut.", interpretation: "Something has shifted, but whether it requires a structured intervention is not yet fully apparent.", note, cta: "Book a diagnostic conversation", ctaNote: "We will identify which product, if any, is relevant.", ctaHref: "/book" },
      strong: { headline: "The pattern suggests the team has moved into a different state after a period of pressure.", interpretation: "What you are describing is common in teams that have been through something significant without a structured space to process it.", note, cta: "Learn about the Team Climate Reset", ctaNote: "Or book a conversation first if you would like to discuss.", ctaHref: "/products/team-climate-reset" }
    }
  },
  change: {
    id: "change",
    tileLabel: "Organizational change",
    tileDesc: "A change was announced. The response has been uncertain or resistant.",
    label: "Change Communication",
    toolName: "Is the change clear, or just announced?",
    intro: "Announcing a change and communicating it are not the same thing. This check identifies whether the communication structure around a current change is holding.",
    questions: [
      { text: "Has the change been communicated more than once, in more than one format?", options: [
        { label: "No — it was essentially announced once", weight: 2 },
        { label: "A couple of times", weight: 1 },
        { label: "Yes — there has been a sequence", weight: 0 }
      ]},
      { text: "Is there a designed channel for honest questions?", options: [
        { label: "No — uncertainty travels informally", weight: 2 },
        { label: "There is something, but it is weak", weight: 1 },
        { label: "Yes — there is a working channel", weight: 0 }
      ]},
      { text: "Is communication following a designed structure or responding to events?", options: [
        { label: "Largely reactive", weight: 2 },
        { label: "Partly designed", weight: 1 },
        { label: "Deliberately structured", weight: 0 }
      ]}
    ],
    results: {
      low: { headline: "The communication of this change appears to be reasonably well-structured.", interpretation: "The pattern does not strongly suggest a communication breakdown.", note, cta: "Talk through your situation", ctaNote: "No commitment. A 25-minute conversation.", ctaHref: "/book" },
      medium: { headline: "There are gaps in how this change has been communicated.", interpretation: "Some elements are present, but the overall communication has been inconsistent or reactive.", note, cta: "Book a diagnostic conversation", ctaNote: "We will identify which product, if any, is relevant.", ctaHref: "/book" },
      strong: { headline: "The communication of this change is operating without a clear architecture.", interpretation: "The pattern is consistent with a change that was announced but not fully communicated across the organization.", note, cta: "Learn about Change Communication", ctaNote: "Or book a conversation first if you would like to discuss.", ctaHref: "/products/change-communication" }
    }
  }
};
