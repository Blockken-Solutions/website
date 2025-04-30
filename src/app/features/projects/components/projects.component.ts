import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendarAlt,
  faBuilding,
  faCodeBranch,
  faGlobe,
  faChevronDown,
  faChevronUp,
  faArrowRight,
  faClock,
  faFilter,
  faTimes,
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="projects" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-2">Project Portfolio</h2>
          <div class="divider divider-primary max-w-md mx-auto"></div>
          <p class="max-w-2xl mx-auto">
            A showcase of my professional journey through projects, technologies, and client work.
          </p>
        </div>
        <!-- Filter and sort controls -->
        <div class="mb-8 flex flex-wrap gap-4 justify-center">
          <div class="join">
            <button
              class="join-item btn btn-outline btn-md"
              [class.btn-primary]="viewMode === 'all'"
              (click)="setViewMode('all')"
            >
              All Projects
            </button>
            <button
              class="join-item btn btn-outline btn-md"
              [class.btn-primary]="viewMode === 'client'"
              (click)="setViewMode('client')"
            >
              By Client
            </button>
          </div>
          <div class="dropdown">
            <label tabindex="0" class="btn btn-outline btn-md">
              <fa-icon [icon]="faFilter" class="mr-2"></fa-icon>
              Filter Technologies
              <fa-icon [icon]="faChevronDown" class="ml-2"></fa-icon>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 max-h-96 overflow-y-auto"
            >
              @for (tag of allTags; track tag) {
                <li>
                  <a [class.active]="activeFilters.includes(tag)" (click)="toggleFilter(tag)">
                    {{ tag }}
                  </a>
                </li>
              }
            </ul>
          </div>
          <button class="btn btn-outline btn-md flex items-center" (click)="toggleSortDirection()">
            <span class="inline-flex items-center">
              <fa-icon [icon]="getSortIcon()" class="mr-2 flex items-center"></fa-icon>
              {{ sortNewestFirst ? 'Newest First' : 'Oldest First' }}
            </span>
          </button>
        </div>
        <!-- Active filters -->
        @if (activeFilters.length > 0) {
          <div class="flex flex-wrap gap-2 mb-6 justify-center">
            <span class="text-base opacity-70">Active filters:</span>
            @for (filter of activeFilters; track filter) {
              <div class="badge badge-primary gap-1">
                {{ filter }}
                <button class="btn btn-xs btn-circle btn-ghost" (click)="toggleFilter(filter)">
                  <fa-icon [icon]="faTimes"></fa-icon>
                </button>
              </div>
            }
            <button class="btn btn-ghost btn-xs" (click)="clearFilters()">Clear all</button>
          </div>
        }
        <!-- All projects view -->
        @if (viewMode === 'all') {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (project of filteredProjects; track project.id) {
              <div
                class="card bg-base-200 shadow-xl h-full flex flex-col border-t-4 border-primary"
              >
                <div class="flex p-4 bg-base-300">
                  <!-- Logo area -->
                  <div
                    class="w-16 h-16 rounded-full bg-base-100 flex items-center justify-center overflow-hidden mr-4 border-2 border-primary"
                  >
                    @if (project.image) {
                      <img
                        [src]="project.image"
                        [alt]="project.title"
                        class="w-full h-full object-cover"
                      />
                    } @else {
                      <span class="text-xl font-bold text-primary">
                        {{ project.title.charAt(0) }}
                      </span>
                    }
                  </div>
                  <!-- Title area -->
                  <div class="flex flex-col justify-center">
                    <h2 class="card-title">{{ project.title }}</h2>
                    @if (project.client) {
                      <div class="flex items-center gap-2 text-base opacity-80">
                        <fa-icon [icon]="faBuilding" class="text-primary"></fa-icon>
                        {{ project.client }}
                      </div>
                    }
                  </div>
                </div>
                <div class="card-body flex-1 flex flex-col">
                  <!-- Date range -->
                  <div class="flex items-center gap-2 mb-4">
                    <span class="text-primary text-base">
                      <fa-icon [icon]="faCalendarAlt"></fa-icon>
                    </span>
                    {{ formatDate(project.startDate) }}
                    <fa-icon [icon]="faArrowRight"></fa-icon>
                    {{ project.endDate ? formatDate(project.endDate) : 'Present' }}
                  </div>
                  <p class="flex-1 text-base">{{ project.description }}</p>
                  <div class="flex flex-wrap gap-2 my-3">
                    @for (tag of project.tags; track tag) {
                      <span
                        class="badge badge-primary badge-md cursor-pointer"
                        [class.badge-outline]="!activeFilters.includes(tag)"
                        (click)="toggleFilter(tag)"
                      >
                        {{ tag }}
                      </span>
                    }
                  </div>
                  <div class="card-actions justify-end mt-auto">
                    @if (project.github) {
                      <a [href]="project.github" target="_blank" class="btn btn-outline btn-sm">
                        <fa-icon [icon]="faCodeBranch" class="mr-2"></fa-icon>
                        Code
                      </a>
                    }
                    @if (project.demo) {
                      <a [href]="project.demo" target="_blank" class="btn btn-primary btn-sm">
                        <fa-icon [icon]="faGlobe" class="mr-2"></fa-icon>
                        Demo
                      </a>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        }
        <!-- Client view -->
        @if (viewMode === 'client') {
          <div class="space-y-12">
            @for (client of clientGroups; track client.name) {
              <div class="bg-base-200 rounded-lg p-6 shadow-lg">
                <div
                  class="flex items-center justify-between cursor-pointer"
                  (click)="toggleClientGroup(client.name)"
                >
                  <h3 class="text-xl font-bold flex items-center">
                    <span class="text-primary mr-3">
                      <fa-icon [icon]="faBuilding"></fa-icon>
                    </span>
                    {{ client.name || 'Personal Projects' }}
                  </h3>
                  <fa-icon
                    [icon]="expandedClients.includes(client.name) ? faChevronUp : faChevronDown"
                    class="text-primary"
                  ></fa-icon>
                </div>
                @if (expandedClients.includes(client.name)) {
                  <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    @for (project of client.projects; track project.id) {
                      <div
                        class="card bg-base-100 shadow-xl border-t-4 border-primary h-full flex flex-col"
                      >
                        <div class="flex p-4 bg-base-300">
                          <!-- Logo area -->
                          <div
                            class="w-16 h-16 rounded-full bg-base-200 flex items-center justify-center overflow-hidden mr-4 border-2 border-primary"
                          >
                            @if (project.image) {
                              <img
                                [src]="project.image"
                                [alt]="project.title"
                                class="w-full h-full object-cover"
                              />
                            } @else {
                              <span class="text-xl font-bold text-primary">
                                {{ project.title.charAt(0) }}
                              </span>
                            }
                          </div>
                          <!-- Title area -->
                          <div class="flex flex-col justify-center">
                            <h3 class="text-xl font-bold">{{ project.title }}</h3>
                            <div class="flex items-center gap-2 text-base opacity-80">
                              <fa-icon
                                [icon]="faCalendarAlt"
                                class="text-primary text-base"
                              ></fa-icon>
                              {{ formatDate(project.startDate) }}
                              <fa-icon [icon]="faArrowRight"></fa-icon>
                              {{ project.endDate ? formatDate(project.endDate) : 'Present' }}
                            </div>
                          </div>
                        </div>
                        <div class="card-body flex-1 flex flex-col">
                          <p class="flex-1 text-base">{{ project.description }}</p>
                          <div class="flex flex-wrap gap-2 my-3">
                            @for (tag of project.tags; track tag) {
                              <span
                                class="badge badge-primary badge-sm cursor-pointer"
                                [class.badge-outline]="!activeFilters.includes(tag)"
                                (click)="toggleFilter(tag)"
                              >
                                {{ tag }}
                              </span>
                            }
                          </div>
                          <div class="card-actions justify-end mt-auto">
                            @if (project.github) {
                              <a
                                [href]="project.github"
                                target="_blank"
                                class="btn btn-outline btn-sm"
                              >
                                <fa-icon [icon]="faCodeBranch" class="mr-2"></fa-icon>
                                Code
                              </a>
                            }
                            @if (project.demo) {
                              <a
                                [href]="project.demo"
                                target="_blank"
                                class="btn btn-primary btn-sm"
                              >
                                <fa-icon [icon]="faGlobe" class="mr-2"></fa-icon>
                                Demo
                              </a>
                            }
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                }
              </div>
            }
          </div>
        }
        <!-- No results message -->
        @if (filteredProjects.length === 0) {
          <div class="text-center py-12">
            <p class="text-xl opacity-70">No projects match your current filters.</p>
            <button class="btn btn-primary mt-4" (click)="clearFilters()">Clear Filters</button>
          </div>
        }
      </div>
    </section>
  `,
  styles: [],
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  clientGroups: { name: string; projects: Project[] }[] = [];
  expandedClients: string[] = [];
  allTags: string[] = [];
  viewMode: 'all' | 'client' = 'all';
  activeFilters: string[] = [];
  sortNewestFirst: boolean = true;

  // FontAwesome icons
  faCalendarAlt = faCalendarAlt;
  faBuilding = faBuilding;
  faCodeBranch = faCodeBranch;
  faGlobe = faGlobe;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faArrowRight = faArrowRight;
  faFilter = faFilter;
  faTimes = faTimes;

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.applyFiltersAndSort();
    this.generateClientGroups();
    this.extractAllTags();
  }

  setViewMode(mode: 'all' | 'client') {
    this.viewMode = mode;
  }

  toggleFilter(tag: string) {
    if (this.activeFilters.includes(tag)) {
      this.activeFilters = this.activeFilters.filter((t) => t !== tag);
    } else {
      this.activeFilters.push(tag);
    }
    this.applyFiltersAndSort();
    this.generateClientGroups();
  }

  clearFilters() {
    this.activeFilters = [];
    this.applyFiltersAndSort();
    this.generateClientGroups();
  }

  toggleSortDirection() {
    this.sortNewestFirst = !this.sortNewestFirst;
    this.applyFiltersAndSort();
    this.generateClientGroups();
  }

  getSortIcon() {
    return this.sortNewestFirst ? faSortDown : faSortUp;
  }

  toggleClientGroup(clientName: string) {
    if (this.expandedClients.includes(clientName)) {
      this.expandedClients = this.expandedClients.filter((name) => name !== clientName);
    } else {
      this.expandedClients.push(clientName);
    }
  }

  formatDate(date: Date | undefined): string {
    if (!date) return 'Present';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  }

  private applyFiltersAndSort() {
    // Apply filters
    if (this.activeFilters.length === 0) {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter((project) =>
        this.activeFilters.every((tag) => project.tags.includes(tag)),
      );
    }

    // Apply sort using endDate (or current date for ongoing projects)
    this.filteredProjects.sort((a, b) => {
      // For projects without an end date (ongoing), use current date
      const currentDate = new Date().getTime();
      const dateA = a.endDate ? new Date(a.endDate).getTime() : currentDate;
      const dateB = b.endDate ? new Date(b.endDate).getTime() : currentDate;
      return this.sortNewestFirst ? dateB - dateA : dateA - dateB;
    });
  }

  private generateClientGroups() {
    const clientMap = new Map<string, Project[]>();

    this.filteredProjects.forEach((project) => {
      const clientName = project.client || 'Personal';
      if (!clientMap.has(clientName)) {
        clientMap.set(clientName, []);
      }
      clientMap.get(clientName)?.push(project);
    });

    // Use current date for ongoing projects when sorting
    const currentDate = new Date().getTime();

    this.clientGroups = Array.from(clientMap.entries())
      .map(([name, projects]) => ({
        name,
        projects: [...projects].sort((a, b) => {
          const dateA = a.endDate ? new Date(a.endDate).getTime() : currentDate;
          const dateB = b.endDate ? new Date(b.endDate).getTime() : currentDate;
          return this.sortNewestFirst ? dateB - dateA : dateA - dateB;
        }),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    // Expand the first client by default if none are expanded
    if (this.expandedClients.length === 0 && this.clientGroups.length > 0) {
      this.expandedClients = [this.clientGroups[0].name];
    }
  }

  private extractAllTags() {
    const tagSet = new Set<string>();
    this.projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    this.allTags = Array.from(tagSet).sort();
  }
}
