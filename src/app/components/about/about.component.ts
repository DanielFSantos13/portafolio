import { Component, Input } from '@angular/core';
import { Language } from '../../models/portfolio.models';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html'
})
export class AboutComponent {
  @Input({ required: true }) language!: Language;
}
