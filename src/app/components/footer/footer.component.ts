import { Component, Input } from '@angular/core';
import { Language } from '../../models/portfolio.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Input({ required: true }) language!: Language;
  readonly year = new Date().getFullYear();
}
