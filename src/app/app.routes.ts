import { Routes } from '@angular/router';
import { HeroComponent } from './features/hero/components/hero.component';
import { SkillsComponent } from './features/skills/components/skills.component';
import { ContactComponent } from './features/contact/components/contact.component';

export const routes: Routes = [
  // { path: '', component: HeroComponent },
  { path: 'about', component: HeroComponent },
  { path: 'skills', component: SkillsComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'about' },
];
