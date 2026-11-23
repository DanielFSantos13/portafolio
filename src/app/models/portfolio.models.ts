export type Language = 'en' | 'es';

export interface Project {
  number: string;
  title: string;
  description: { en: string; es: string };
  tags: string[];
  status: 'planned' | 'in-progress' | 'completed';
  githubUrl: string;
  demoUrl?: string;
}

export interface SkillGroup {
  title: { en: string; es: string };
  skills: string[];
}
