import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-additional-technologies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="technologies.length > 0" class="mt-16 p-8 bg-base-100 rounded-lg shadow-lg">
      <h3 class="text-xl font-bold text-center mb-8">Additional Technologies</h3>
      <div class="flex flex-wrap justify-center gap-3">
        @for (tech of technologies; track tech) {
          <span class="badge badge-lg badge-ghost p-3">{{ tech }}</span>
        }
      </div>
    </div>
  `,
})
export class AdditionalTechnologiesComponent {
  @Input() technologies: string[] = [];
}
