import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/components/header.component';
import { ThemeService } from './shared/services/theme.service';
import { FooterComponent } from './features/footer/components/footer.component';
import { SeoService } from './shared/services/seo.service';
import { SchemaService } from './shared/services/schema.service';
import { ProjectService } from './features/projects/services/project.service';

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
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private seoService: SeoService,
    private schemaService: SchemaService,
    private projectService: ProjectService,
  ) {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && this.themeService.availableThemes.includes(savedTheme)) {
      this.themeService.setTheme(savedTheme);
    }
  }

  ngOnInit() {
    this.seoService.init();

    this.seoService.setDefaultTags({
      title: 'Portfolio',
      description:
        'Professional portfolio of Wouter Blockken, a fullstack developer specializing in Angular, React, Java, and modern technologies.',
      keywords:
        'Wouter Blockken, portfolio, fullstack developer, web development, Angular, React, Java, Blockken Solutions',
      image: 'https://blockken.solutions/blockken-solutions.png',
      url: 'https://blockken.solutions',
      type: 'website',
    });

    this.schemaService.addPersonSchema({
      name: 'Wouter Blockken',
      jobTitle: 'Fullstack Developer',
      url: 'https://blockken.solutions',
      image: 'https://blockken.solutions/blockken-solutions.png',
      description:
        'Fullstack developer specializing in Angular, React, Java, and modern technologies.',
      sameAs: ['https://github.com/blockken-solutions', 'https://linkedin.com/in/wouter-blockken/'],
    });

    this.schemaService.addWebsiteSchema({
      name: 'Blockken Solutions',
      url: 'https://blockken.solutions',
      description:
        'Professional portfolio of Wouter Blockken, a fullstack developer specializing in Angular, React, Java, and modern technologies.',
      author: 'Wouter Blockken',
      keywords:
        'Wouter Blockken, portfolio, fullstack developer, web development, Angular, React, Java, Blockken Solutions',
    });

    const projects = this.projectService.getProjects();
    const projectsForSchema = projects.map((project) => ({
      name: project.title,
      description: project.description,
      url: project.demo || 'https://blockken.solutions/projects',
      image: project.image,
      dateCreated: project.startDate.toISOString(),
      creator: 'Wouter Blockken',
      keywords: project.tags.join(', '),
      technologies: project.tags,
    }));

    this.schemaService.addProjectSchema(projectsForSchema);

    const skills = [
      {
        name: 'Angular',
        description: 'Frontend framework for building web applications',
        category: 'Frontend Development',
      },
      {
        name: 'React',
        description: 'JavaScript library for building user interfaces',
        category: 'Frontend Development',
      },
      {
        name: 'Java',
        description: 'Object-oriented programming language',
        category: 'Backend Development',
      },
      {
        name: 'Spring Boot',
        description: 'Framework for building Java applications',
        category: 'Backend Development',
      },
      {
        name: 'Docker',
        description: 'Platform for developing, shipping, and running applications',
        category: 'DevOps & Deployment',
      },
      {
        name: 'Kubernetes',
        description: 'Container orchestration system',
        category: 'DevOps & Deployment',
      },
      { name: 'AWS', description: 'Cloud computing platform', category: 'Cloud & Services' },
      {
        name: 'Azure',
        description: 'Microsoft cloud computing service',
        category: 'Cloud & Services',
      },
      { name: 'Git', description: 'Version control system', category: 'Other Skills' },
    ];

    this.schemaService.addSkillsSchema(skills);
  }

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}
