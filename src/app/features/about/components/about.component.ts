import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-2">About Me</h2>
          <div class="divider max-w-md mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="assets/images/about.jpg"
              alt="About Me"
              class="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4">
              I'm
              <span class="text-primary">Your Name</span>
              , a passionate developer
            </h3>
            <p class="mb-4">
              With over 5 years of experience in web development, I specialize in building robust,
              scalable, and user-friendly applications using cutting-edge technologies.
            </p>
            <p class="mb-6">
              I'm dedicated to creating clean, maintainable code and delivering exceptional user
              experiences. I'm constantly learning and expanding my skill set to stay at the
              forefront of web development.
            </p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 class="font-semibold">Name:</h4>
                <p>Your Name</p>
              </div>
              <div>
                <h4 class="font-semibold">Email:</h4>
                <p>wouter&#64;blockken.solutions</p>
              </div>
              <div>
                <h4 class="font-semibold">Location:</h4>
                <p>New York, USA</p>
              </div>
              <div>
                <h4 class="font-semibold">Availability:</h4>
                <p>Freelance / Full-time</p>
              </div>
            </div>

            <a href="assets/resume.pdf" download class="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
