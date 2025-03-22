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
  providers: [ThemeService],
  template: `
    <div class="min-h-screen flex flex-col" [attr.data-theme]="currentTheme">
      <app-header (themeChanged)="changeTheme($event)"></app-header>
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {
  currentTheme = 'dark';

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
    this.currentTheme = this.themeService.theme;
  }
}
