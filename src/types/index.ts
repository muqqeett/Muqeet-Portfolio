export interface Project {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  isSpotlight?: boolean;
}

export interface SkillItem {
  name: string;
  level?: string;
  iconName?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineMilestone {
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  type?: 'project' | 'milestone' | 'education' | 'tech';
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface StatMetric {
  label: string;
  value: string;
  detail: string;
}
