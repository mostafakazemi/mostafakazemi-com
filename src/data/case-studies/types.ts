export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  period?: string;
  role: string;
  summary: string;
  technologies: string[];
  problem: string;
  responsibilities: string[];
  challenges: string[];
  results: string[];
  learnings?: string[];
  featured?: boolean;
}
