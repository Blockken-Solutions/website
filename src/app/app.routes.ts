import { Routes } from '@angular/router';
import { HeroComponent } from './features/hero/components/hero.component';
import { SkillsComponent } from './features/skills/components/skills.component';
import { ContactComponent } from './features/contact/components/contact.component';
import { ProjectsComponent } from './features/projects/components/projects.component';

export const routes: Routes = [
  // { path: '', component: HeroComponent },
  {
    path: 'about',
    component: HeroComponent,
    data: {
      title: 'About Me',
      description:
        'Professional portfolio and personal information about Wouter Blockken, a fullstack developer specializing in Angular, React, Java, and modern technologies.',
      keywords:
        'Wouter Blockken, portfolio, fullstack developer, Angular, React, Java, web development, modern technologies, Blockken Solutions',
    },
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: {
      title: 'Skills & Expertise',
      description:
        'Technical skills and expertise in Angular, React, Java, and modern fullstack development technologies that Wouter Blockken specializes in.',
      keywords:
        'skills, Angular, React, Java, fullstack development, frontend, backend, programming languages, frameworks, modern technologies, web development',
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projects Portfolio',
      description:
        'Showcase of fullstack projects developed by Wouter Blockken, featuring Angular, React, and Java applications, software solutions, and client work.',
      keywords:
        'projects, portfolio, Angular projects, React applications, Java development, fullstack applications, web applications, software solutions, client work, case studies',
    },
  },
  // { path: 'experience', component: ExperienceComponent },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact Me',
      description:
        'Get in touch with Wouter Blockken for fullstack development services, Angular, React, and Java projects, collaboration opportunities, or questions about services.',
      keywords: 'contact, email, fullstack development services, Angular development, React development, Java development, professional inquiries, collaboration, hire developer',
    },
  },
  {
    path: '**',
    redirectTo: 'about',
  },
];
