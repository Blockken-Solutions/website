import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillBadgeComponent } from '../skill-badge/skill-badge.component';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skill-category',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, SkillBadgeComponent],
  template: `
    <div
      class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border-l-4 border-primary h-full flex flex-col"
    >
      <div class="card-body flex-1">
        <h2 class="card-title text-xl">
          <span class="text-primary">
            <fa-icon [icon]="icon" class="w-6 h-6" />
          </span>
          {{ name }}
        </h2>

        <div class="flex flex-wrap gap-2 mt-4">
          @for (skill of skills; track skill.name) {
            <app-skill-badge
              [name]="skill.name"
              [isPrimary]="skill.isPrimary || false"
              [icon]="skill.icon"
              [simpleIcon]="skill.simpleIcon || ''"
              [iconMap]="iconMap"
            ></app-skill-badge>
          }
        </div>
      </div>
    </div>
  `,
})
export class SkillCategoryComponent {
  @Input() name!: string;
  @Input() icon!: any;
  @Input() skills: Skill[] = [];
  @Input() iconMap: { [key: string]: any } = {};
}
