import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  faGolang,
} from '@fortawesome/free-brands-svg-icons';
import {
  siGatsby,
  siSpring,
  siHibernate,
  siKubernetes,
  siSelenium,
  siJest,
  siSonar,
} from 'simple-icons/icons';
import { AdditionalTechnologiesComponent } from './additional-technologies/additional-technologies.component';
import { SkillCategoryComponent } from './skill-category/skill-category.component';
import { SkillCategory } from '../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    SkillCategoryComponent,
    AdditionalTechnologiesComponent,
    AdditionalTechnologiesComponent,
    SkillCategoryComponent,
  ],
  template: `
    <section id="skills" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-2">Technical Skills</h2>
          <div class="divider divider-primary max-w-md mx-auto"></div>
          <p class="max-w-2xl mx-auto">
            I specialize in modern technologies and continuously expand my skill set.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (category of skillCategories; track category.name) {
            <app-skill-category
              [name]="category.name"
              [icon]="category.icon"
              [skills]="category.skills"
              [iconMap]="iconMap"
            ></app-skill-category>
          }
        </div>

        <app-additional-technologies
          [technologies]="otherTechnologies"
        ></app-additional-technologies>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  iconMap: { [key: string]: any } = {
    Gatsby: siGatsby,
    Spring: siSpring,
    Hibernate: siHibernate,
    Kubernetes: siKubernetes,
    Selenium: siSelenium,
    Jest: siJest,
    Sonar: siSonar,
  };

  constructor(library: FaIconLibrary) {
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
      faGolang,
    );
  }

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      icon: ['fas', 'desktop'],
      skills: [
        { name: 'Angular 4-19', isPrimary: true, icon: ['fab', 'angular'] },
        { name: 'React', icon: ['fab', 'react'] },
        { name: 'GatsbyJS', simpleIcon: 'Gatsby' },
        { name: 'SCSS', icon: ['fab', 'sass'] },
      ],
    },
    {
      name: 'Backend Development',
      icon: ['fas', 'server'],
      skills: [
        { name: 'Java 8-21', isPrimary: true, icon: ['fab', 'java'] },
        { name: 'Spring Boot', simpleIcon: 'Spring' },
        { name: 'Golang', icon: ['fab', 'golang'] },
        { name: 'PostgreSQL', icon: ['fas', 'database'] },
        { name: 'Hibernate', simpleIcon: 'Hibernate' },
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
        { name: 'Wiremock', simpleIcon: 'Wiremock' },
        { name: 'Mockito', simpleIcon: 'Mockito' },
        { name: 'Selenium', simpleIcon: 'Selenium' },
        { name: 'Jest', simpleIcon: 'Jest' },
        { name: 'Sonar', simpleIcon: 'Sonar' },
      ],
    },
    {
      name: 'Cloud & Services',
      icon: ['fas', 'cloud'],
      skills: [
        { name: 'AWS', isPrimary: true, icon: ['fab', 'aws'] },
        { name: 'Google Cloud', icon: ['fab', 'google'] },
        { name: 'Azure Cloud', icon: ['fab', 'microsoft'] },
      ],
    },
    {
      name: 'Other Skills',
      icon: ['fas', 'wrench'],
      skills: [
        { name: 'Git', isPrimary: true, icon: ['fab', 'git-alt'] },
        { name: 'Jira', icon: ['fab', 'jira'] },
        { name: 'Confluence', icon: ['fab', 'confluence'] },
        { name: 'Photoshop', simpleIcon: 'Photoshop' },
        { name: 'Figma', icon: ['fab', 'figma'] },
      ],
    },
  ];

  otherTechnologies: string[] = [];
}
