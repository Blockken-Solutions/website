import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section id="contact" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Let's Connect</h2>
          <div class="divider divider-primary max-w-xs mx-auto"></div>
          <p class="text-lg opacity-90 mt-4">Reach out through any channel below</p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div
            class="card bg-gradient-to-br from-base-100 to-primary/10 shadow-2xl border border-primary/20"
          >
            <div class="card-body p-8 md:p-12">
              <div class="space-y-8">
                <!-- Contact Items -->
                <div class="flex flex-col gap-8">
                  <!-- Email -->
                  <div class="flex items-center gap-4">
                    <div class="p-3 rounded-box bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href="mailto:wouter@blockken.solutions"
                      class="text-lg link link-hover link-primary"
                    >
                      wouter&#64;blockken.solutions
                    </a>
                  </div>

                  <!-- Phone -->
                  <div class="flex items-center gap-4">
                    <div class="p-3 rounded-box bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span class="text-lg">(+32) 471 12 87 27</span>
                  </div>

                  <!-- Location -->
                  <div class="flex items-center gap-4">
                    <div class="p-3 rounded-box bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span class="text-lg">Hasselt, BE</span>
                  </div>
                </div>

                <!-- Social Links with Top Spacing -->
                <div class="mt-12 flex gap-4 justify-center">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    class="btn btn-ghost btn-square text-xl hover:bg-primary/10 hover:text-primary"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/wouter-blockken/"
                    target="_blank"
                    class="btn btn-ghost btn-square text-xl hover:bg-primary/10 hover:text-primary"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {}
