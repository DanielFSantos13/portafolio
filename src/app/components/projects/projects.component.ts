import { Component, Input } from '@angular/core';
import { Language } from '../../models/portfolio.models';

@Component({ selector: 'app-projects', standalone: true, templateUrl: './projects.component.html' })
export class ProjectsComponent {
  @Input({ required: true }) language!: Language;

  readonly projects = [
    {
      title: 'Arsotek S.A.S.',
      url: 'https://arsotek.com.co/',
      domain: 'arsotek.com.co',
      preview: 'arsotek-home.jpg',
      role: { es: 'Desarrollador frontend principal', en: 'Lead frontend developer' },
      description: {
        es: 'Tienda en línea de productos electrónicos. Desarrollé componentes reutilizables a partir de diseños en Figma, integré el frontend con APIs REST y trabajé en el rendimiento y la usabilidad de la tienda.',
        en: 'An online electronics store. I built reusable components from Figma designs, connected the frontend to REST APIs, and worked on store performance and usability.'
      },
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3']
    }
  ];
}
