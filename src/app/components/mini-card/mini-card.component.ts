import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.scss',
})
export class MiniCardComponent {
  @Input()
  backgroundImage: string = '';

  @Input()
  gameName: string = '';

  @Input()
  alternativeImage: string = '';

  constructor() {}
}
