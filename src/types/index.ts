export interface Project {
  id: string;
  name: string;
  oneLiner: string;
  category: 'Cognitive AI' | 'Robotics & Control' | 'Software Systems' | 'FinTech / Agents' | 'Healthcare AI' | 'Venture Intelligence' | 'Engineering';
  status: 'Active Prototype' | 'Open Source' | 'Conceptual Architecture' | 'Research Prototype';
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  technologies: string[];
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  currentStage: string;
  futureRoadmap: string[];
  isFeatured?: boolean;
}

export interface Venture {
  name: string;
  formerName?: string;
  role: string;
  tagline: string;
  websiteUrl?: string;
  shortDescription: string;
  detailedVision: string;
  problemSpace: string;
  technicalDirection: string;
  currentStage: string;
  explorations: {
    title: string;
    description: string;
  }[];
  milestones: {
    period: string;
    milestone: string;
    status: 'completed' | 'in-progress' | 'planned';
  }[];
  heroImage: string;
}

export interface TechnicalExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  category: 'Whitepaper' | 'Technical Blueprint' | 'Research Note' | 'Academic Report' | 'Internship Report' | 'Certificate' | 'Venture Brief' | 'Pitch Deck' | 'Curriculum Vitae';
  date: string;
  fileType: 'PDF' | 'Blueprint' | 'Specification';
  pages: number;
  readTime: string;
  summary: string;
  keySections: string[];
  contentExcerpt: string;
  tags: string[];
  fileUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: {
    heading?: string;
    paragraphs: string[];
  }[];
  tags: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  organization: string;
  category: 'Venture' | 'Academic' | 'Software' | 'Engineering';
  description: string;
  highlights: string[];
}
