import { Component, Input } from '@angular/core';
import { Language } from '../../models/portfolio.models';

interface TechGroup {
  id: string;
  title: Record<Language, string>;
  skills: { name: string; icon: string; englishName?: string }[];
}

@Component({ selector: 'app-tech-stack', standalone: true, templateUrl: './tech-stack.component.html' })
export class TechStackComponent {
  @Input({ required: true }) language!: Language;

  readonly groups: TechGroup[] = [
    {
      id: 'frontend',
      title: { es: 'Frontend', en: 'Frontend' },
      skills: [
        { name: 'Angular', icon: 'angular' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'Figma', icon: 'figma' }
      ]
    },
    {
      id: 'data',
      title: { es: 'Backend y datos', en: 'Backend & data' },
      skills: [
        { name: 'APIs REST', icon: 'rest', englishName: 'REST APIs' },
        { name: 'Python', icon: 'python' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'C++', icon: 'cplusplus' }
      ]
    },
    {
      id: 'tools',
      title: { es: 'Herramientas y nube', en: 'Tools & cloud' },
      skills: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'AWS', icon: 'amazonwebservices' }
      ]
    },
    {
      id: 'ai',
      title: { es: 'IA generativa', en: 'Generative AI' },
      skills: [
        { name: 'ChatGPT', icon: 'chatgpt' },
        { name: 'Claude', icon: 'claude' },
        { name: 'Gemini', icon: 'gemini' },
        { name: 'NotebookLM', icon: 'notebooklm' },
        { name: 'Automatización con IA (RPA)', icon: 'rpa', englishName: 'AI automation (RPA)' }
      ]
    }
  ];
}
