import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDesktop,
  faServer,
  faCloud,
  faFlask,
  faWrench,
  faDatabase,
  faCode,
  faLeaf,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faReact,
  faJava,
  faDocker,
  faAws,
  faMicrosoft,
  faJenkins,
  faGitAlt,
  faJira,
  faConfluence,
  faFigma,
  faHtml5,
  faSass,
  faGoogle,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import * as SimpleIcons from 'simple-icons';

interface SimpleIcon {
  title: string;
  slug: string;
  hex: string;
  svg: string;
}

interface Skill {
  name: string;
  isPrimary?: boolean;
  icon?: any;
  simpleIcon?: string;
}

interface SkillCategory {
  name: string;
  icon: any;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="skills" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-2">Technical Skills</h2>
          <div class="divider max-w-md mx-auto"></div>
          <p class="max-w-2xl mx-auto">
            I specialize in modern technologies and continuously expand my skill set.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (category of skillCategories; track category.name) {
            <div
              class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border-l-4 border-primary"
            >
              <div class="card-body">
                <h2 class="card-title text-xl">
                  <span class="text-primary">
                    <fa-icon [icon]="category.icon" class="w-6 h-6" />
                  </span>
                  {{ category.name }}
                </h2>

                <div class="flex flex-wrap gap-2 mt-4">
                  @for (skill of category.skills; track skill.name) {
                    <div
                      class="badge badge-lg py-3 gap-1.5"
                      [ngClass]="skill.isPrimary ? 'badge-primary' : 'badge-outline'"
                    >
                      @if (skill.simpleIcon) {
                        <span class="w-4 h-4" [innerHTML]="getSimpleIcon(skill.simpleIcon)"></span>
                      } @else {
                        <fa-icon [icon]="skill.icon" class="w-4 h-4 flex" />
                      }
                      {{ skill.name }}
                    </div>
                  }
                </div>
              </div>
            </div>
          }
        </div>

        <div class="mt-16 p-8 bg-base-100 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold text-center mb-8">Additional Technologies</h3>
          <div class="flex flex-wrap justify-center gap-3">
            @for (tech of otherTechnologies; track tech) {
              <span class="badge badge-lg badge-ghost p-3">{{ tech }}</span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .badge svg {
        vertical-align: -0.125em;
      }
    `,
  ],
})
export class SkillsComponent {
  constructor(
    private sanitizer: DomSanitizer,
    library: FaIconLibrary,
  ) {
    library.addIcons(
      faDesktop,
      faServer,
      faCloud,
      faFlask,
      faWrench,
      faDatabase,
      faCode,
      faLeaf,
      faShieldAlt,
      faAngular,
      faReact,
      faJava,
      faDocker,
      faAws,
      faMicrosoft,
      faJenkins,
      faGitAlt,
      faJira,
      faConfluence,
      faFigma,
      faHtml5,
      faSass,
      faGoogle,
      faJs,
    );
  }

  getSimpleIcon(slug: string) {
    const iconKey = `si${slug.replace(/ /g, '')}`;
    const icon = (SimpleIcons as unknown as { [key: string]: SimpleIcon })[iconKey];

    if (!icon) {
      console.warn(`SimpleIcon not found: ${slug}`);
      return '';
    }

    const svg = icon.svg
      .replace(/^<svg /, '<svg fill="currentColor" ')
      .replace(/width="\d+"/, '')
      .replace(/height="\d+"/, '')
      .replace(/<svg /, '<svg viewBox="0 0 24 24" ');

    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      icon: ['fas', 'desktop'],
      skills: [
        { name: 'Angular 19+', isPrimary: true, icon: ['fab', 'angular'] },
        { name: 'React', icon: ['fab', 'react'] },
        { name: 'GatsbyJS', simpleIcon: 'Gatsby' },
        { name: 'HTML/CSS', icon: ['fab', 'html5'] },
        { name: 'SCSS', icon: ['fab', 'sass'] },
      ],
    },
    {
      name: 'Backend Development',
      icon: ['fas', 'server'],
      skills: [
        { name: 'Java 8-21', isPrimary: true, icon: ['fab', 'java'] },
        { name: 'Spring Boot', simpleIcon: 'Spring' },
        { name: 'PostgreSQL', icon: ['fas', 'database'] },
        { name: 'Hibernate', simpleIcon: 'Hibernate' },
        { name: 'JPA', icon: ['fab', 'java'] },
      ],
    },
    {
      name: 'DevOps & Deployment',
      icon: ['fas', 'cloud'],
      skills: [
        { name: 'Docker', isPrimary: true, icon: ['fab', 'docker'] },
        { name: 'Kubernetes', simpleIcon: 'Kubernetes' },
        { name: 'AWS', icon: ['fab', 'aws'] },
        { name: 'Azure', icon: ['fab', 'microsoft'] },
        { name: 'Jenkins', icon: ['fab', 'jenkins'] },
      ],
    },
    {
      name: 'Testing & Quality',
      icon: ['fas', 'flask'],
      skills: [
        { name: 'JUnit', isPrimary: true, icon: ['fab', 'java'] },
        { name: 'Wiremock', simpleIcon: 'WireMock' },
        { name: 'Mockito', simpleIcon: 'Mockito' },
        { name: 'Selenium', simpleIcon: 'Selenium' },
        { name: 'Jest', simpleIcon: 'Jest' },
      ],
    },
    {
      name: 'Cloud & Services',
      icon: ['fas', 'cloud'],
      skills: [
        { name: 'AWS', isPrimary: true, icon: ['fab', 'aws'] },
        { name: 'Google Cloud', icon: ['fab', 'google'] },
        { name: 'Azure Cloud', icon: ['fab', 'microsoft'] },
        { name: 'gRPC', simpleIcon: 'GRPC' },
      ],
    },
    {
      name: 'Other Skills',
      icon: ['fas', 'wrench'],
      skills: [
        { name: 'Git', isPrimary: true, icon: ['fab', 'git-alt'] },
        { name: 'Jira', icon: ['fab', 'jira'] },
        { name: 'Confluence', icon: ['fab', 'confluence'] },
        { name: 'Photoshop', simpleIcon: 'AdobePhotoshop' },
        { name: 'Figma', icon: ['fab', 'figma'] },
      ],
    },
  ];

  otherTechnologies: string[] = [
    'GatsbyJS',
    'Next.js',
    'NestJS',
    'gRPC',
    'SCSS',
    'Storybook',
    'Vite',
    'Firebase',
    'Material UI',
    'Adobe XD',
    'Redux',
    'CI/CD',
  ];
}
