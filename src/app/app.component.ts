import { Component, signal } from '@angular/core';
import { Language } from './models/portfolio.models';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, TechStackComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly language = signal<Language>('es');

  setLanguage(language: Language): void {
    this.language.set(language);
    document.documentElement.lang = language;
  }
}
