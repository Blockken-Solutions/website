import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

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
