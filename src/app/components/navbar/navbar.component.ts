import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from '../../models/portfolio.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input({ required: true }) language!: Language;
  @Output() languageChange = new EventEmitter<Language>();
  switchLanguage(language: Language): void {
    this.languageChange.emit(language);
  }
}
