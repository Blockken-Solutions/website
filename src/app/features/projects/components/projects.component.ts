import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-2">My Projects</h2>
          <div class="divider max-w-md mx-auto"></div>
          <p class="max-w-2xl mx-auto">
            Here are some of my recent projects. Each project demonstrates different skills and
            technologies.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.id) {
            <div
              class="card bg-base-200 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <figure class="h-48 overflow-hidden">
                <img
                  [src]="project.image"
                  [alt]="project.title"
                  class="w-full object-cover object-center"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 my-2">
                  @for (tag of project.tags; track tag) {
                    <span class="badge badge-primary">{{ tag }}</span>
                  }
                </div>
                <div class="card-actions justify-end mt-4">
                  @if (project.github) {
                    <a [href]="project.github" target="_blank" class="btn btn-outline btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="mr-1"
                      >
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                      Code
                    </a>
                  }
                  @if (project.demo) {
                    <a [href]="project.demo" target="_blank" class="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-1"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Demo
                    </a>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  private projectService = inject(ProjectService);
  projects: Project[] = this.projectService.getProjects();
}
