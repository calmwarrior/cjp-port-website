export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  clientUrl?: string;
  agency?: string;
  year: number;
  role: string;
  duration?: string;
  tools?: string[];
  category: string;
  coverImage: string;
  coverColor: string;
  coverPosition?: string;
  coverFit?: "cover" | "contain";
  challenge: string;
  process: ProcessStep[];
  result: string;
  resultMetrics?: ResultMetric[];
  images: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ResultMetric {
  value: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startYear: number;
  endYear?: number;
  description: string;
  highlights?: string[];
  type: "full-time" | "freelance" | "education" | "teaching";
}

export interface Skill {
  category: string;
  items: string[];
}
