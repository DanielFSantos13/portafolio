import { Component, Input } from '@angular/core';
import { Language } from '../../models/portfolio.models';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @Input({ required: true }) language!: Language;
}
