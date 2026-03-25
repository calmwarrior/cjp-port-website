import { Experience, Skill } from "@/types/project";

export const experiences: Experience[] = [
  {
    company: "Konrad Group",
    role: "Senior UX Designer",
    location: "London, United Kingdom",
    startYear: 2023,
    description:
      "Leading end-to-end design across simultaneous client engagements \u2014 from discovery and user research through to production-ready Figma assets and engineering handoff. Most recently embedded within a leading UK retailer's product team for 6 months, working directly on financial services UX for their money and home insurance digital journeys.",
    highlights: [
      "Established scalable component libraries and reusable interaction frameworks",
      "Embedded within a leading UK retailer's internal product design team",
      "Designed for trust-critical financial services: accessibility, compliance, emotional clarity",
      "Mentored mid-weight designers with structured critique and coaching",
    ],
    type: "full-time",
  },
  {
    company: "Interbrand",
    role: "Senior Customer Experience Consultant",
    location: "London, United Kingdom",
    startYear: 2021,
    endYear: 2023,
    description:
      "Built out Interbrand's global CX practice \u2014 developing measurement frameworks, capability toolkits, and repeatable methodologies deployed across the international network. Defined data-driven CX strategies and presented directly to C-suite stakeholders.",
    highlights: [
      "LEGO Discovery Centre CX design guardrails",
      "Samsung UK market CX opportunity mapping",
      "LSEG CX guidelines",
    ],
    type: "full-time",
  },
  {
    company: "Freelance",
    role: "CX Consultant & Design Strategist",
    location: "Santiago, Chile & London, UK",
    startYear: 2014,
    endYear: 2021,
    description:
      "Designed and delivered end-to-end digital experiences for financial services, FMCG, and B2B clients. Facilitated co-creative workshops with C-suite stakeholders to define strategy and build internal design capability.",
    highlights: [
      "Barclays corporate digital campaign",
      "BMW B2B loyalty platform",
      "J&J HR intranet redesign",
      "AI startup brand strategy (Y Combinator winner)",
      "Chiletur/Copec omnichannel tourism platform",
    ],
    type: "freelance",
  },
  {
    company: "Universidad Diego Portales",
    role: "Associate Lecturer & Course Leader",
    location: "Santiago, Chile",
    startYear: 2009,
    endYear: 2019,
    description:
      "Taught core courses in experience design and branding at undergraduate level. Managed external partnerships between the university, industry organisations, and students.",
    type: "teaching",
  },
  {
    company: "Daw",
    role: "Senior Art Director",
    location: "Santiago, Chile",
    startYear: 2011,
    endYear: 2013,
    description:
      "Led brand identity and in-store experience design for retail clients including Walmart and Shell. Managed a small design team and pitched directly to clients.",
    type: "full-time",
  },
];

export const education = [
  {
    institution: "Pontificia Universidad Cat\u00f3lica de Chile",
    alliance: "in alliance with Stanford University, CA",
    degree: "Master\u2019s in Innovation & Entrepreneurship",
    years: "2013 \u2013 2015",
  },
  {
    institution: "Universidad Diego Portales",
    degree: "BA Graphic Design, minor in Management & Marketing",
    years: "2003 \u2013 2007",
  },
  {
    institution: "Fachhochschule M\u00fcnchen",
    degree: "Erasmus Exchange \u2013 Communication Design",
    years: "2006",
  },
];

export const skills: Skill[] = [
  {
    category: "Strategy",
    items: [
      "CX Strategy",
      "Product Strategy",
      "Design Thinking",
      "Service Design",
      "Workshop Facilitation",
      "Design Leadership",
    ],
  },
  {
    category: "Design",
    items: [
      "UX Design",
      "Information Architecture",
      "Wireframing & Prototyping",
      "High-Fidelity Design",
      "Design Systems",
      "Native Mobile Design",
      "Web Design",
      "Branding",
    ],
  },
  {
    category: "Research",
    items: [
      "User Research",
      "Usability Testing",
      "User Journeys",
      "Persona Development",
      "Competitive Analysis",
      "Data-Driven UX",
    ],
  },
  {
    category: "Tools",
    items: ["Figma", "Adobe Creative Suite", "Miro", "Maze", "Notion", "Jira"],
  },
];
