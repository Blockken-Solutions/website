import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  // { path: '', component: HeroComponent },
  { path: 'about', component: HeroComponent },
  { path: 'skills', component: SkillsComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'about' },
];
