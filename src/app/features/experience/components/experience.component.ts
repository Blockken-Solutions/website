// app-experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Work Experience</h2>

        <div class="max-w-4xl mx-auto">
          <div class="timeline">
            <div *ngFor="let job of experiences; let i = index" class="timeline-item mb-12">
              <div
                class="card bg-base-100 shadow-xl border-l-4 border-primary hover:shadow-2xl transition-all duration-300"
              >
                <div class="card-body">
                  <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <h3 class="card-title text-lg md:text-xl">{{ job.title }}</h3>
                    <div class="badge badge-primary">{{ job.period }}</div>
                  </div>

                  <div class="flex flex-col md:flex-row md:justify-between mt-1">
                    <p class="font-medium text-sm md:text-base">{{ job.company }}</p>
                    <p class="text-sm opacity-70">{{ job.location }}</p>
                  </div>

                  <ul class="mt-4 space-y-2">
                    <li *ngFor="let item of job.description" class="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      <span>{{ item }}</span>
                    </li>
                  </ul>

                  <div class="flex flex-wrap gap-2 mt-4">
                    <span *ngFor="let tech of job.technologies" class="badge badge-outline">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <a href="/resume.pdf" target="_blank" class="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechSolutions Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: [
        'Led the development of a large-scale enterprise application using Angular and TypeScript',
        'Implemented responsive UI components using Tailwind CSS and custom design systems',
        'Mentored junior developers and conducted code reviews to ensure code quality',
        'Optimized application performance, resulting in a 40% decrease in load time',
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'Jest', 'Cypress'],
    },
    {
      title: 'Frontend Developer',
      company: 'WebInnovate Labs',
      period: '2019 - 2022',
      location: 'Remote',
      description: [
        'Developed and maintained multiple client websites and web applications',
        'Created reusable component libraries that reduced development time by 30%',
        'Collaborated with designers to implement pixel-perfect UI/UX designs',
        'Improved application performance through code optimization and lazy-loading techniques',
      ],
      technologies: ['Angular', 'JavaScript', 'SCSS', 'Bootstrap', 'Firebase', 'Jasmine'],
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Creations',
      period: '2017 - 2019',
      location: 'Boston, MA',
      description: [
        'Assisted in the development of web applications using Angular and JavaScript',
        'Built responsive layouts using CSS frameworks and modern HTML techniques',
        'Participated in daily stand-ups and collaborated with cross-functional teams',
        'Contributed to documentation and testing procedures',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Git', 'Jira'],
    },
  ];
}
