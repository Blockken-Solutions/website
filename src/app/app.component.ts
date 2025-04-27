import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/components/header.component';
import { ThemeService } from './shared/services/theme.service';
import { FooterComponent } from './features/footer/components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header (themeChanged)="changeTheme($event)"></app-header>
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {
  constructor(private themeService: ThemeService) {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && this.themeService.availableThemes.includes(savedTheme)) {
      this.themeService.setTheme(savedTheme);
    }
  }

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}
