import { Component } from '@angular/core';
import { FooterService } from './services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  navGroups$ = this.footerService.generateNavFooter();

  constructor(private readonly footerService: FooterService) {}
}
