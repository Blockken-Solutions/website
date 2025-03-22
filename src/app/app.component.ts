import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    ExperienceComponent,
  ],
  providers: [ThemeService],
  template: `
    <div class="min-h-screen flex flex-col" [attr.data-theme]="currentTheme">
      <app-header (themeChanged)="changeTheme($event)"></app-header>
      <main class="flex-grow">
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-experience></app-experience>
        <app-contact></app-contact>
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
