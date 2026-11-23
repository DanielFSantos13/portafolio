import { Component, Input } from '@angular/core';
import { Language } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  @Input({ required: true }) language!: Language;
}
