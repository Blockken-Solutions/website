import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, FaIconComponent],
  template: `
    <section id="contact" class="py-20 bg-base-200 relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4">Let's Connect</h2>
          <div class="divider divider-primary max-w-xs mx-auto"></div>
          <p class="text-base opacity-90 mt-4 max-w-xl mx-auto">
            Reach out through any channel below and I'll get back to you as soon as possible
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div
            class="card bg-gradient-to-br from-base-100 to-primary/10 shadow-xl border border-primary/20 backdrop-blur-sm hover:shadow-primary/20 transition-all duration-300"
            data-aos="fade-right"
          >
            <div class="card-body p-8">
              <h3 class="card-title text-2xl font-bold mb-6 text-center md:text-left">
                Contact Information
              </h3>
              <div class="space-y-8">
                <div class="flex flex-col gap-8">
                  <div class="flex items-center gap-5 group">
                    <div
                      class="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <fa-icon [icon]="faEnvelope" class="text-primary text-xl"></fa-icon>
                    </div>
                    <div>
                      <p class="text-sm opacity-70 mb-1">Email</p>
                      <a
                        href="mailto:wouter@blockken.solutions"
                        class="text-lg font-medium link link-hover link-primary"
                      >
                        wouter&#64;blockken.solutions
                      </a>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 group">
                    <div
                      class="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <fa-icon [icon]="faPhone" class="text-primary text-xl"></fa-icon>
                    </div>
                    <div>
                      <p class="text-sm opacity-70 mb-1">Phone</p>
                      <a
                        href="tel:+32471128727"
                        class="text-lg font-medium hover:text-primary transition-colors"
                      >
                        (+32) 471 12 87 27
                      </a>
                    </div>
                  </div>
                  <div class="flex items-center gap-5 group">
                    <div
                      class="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <fa-icon [icon]="faLocationDot" class="text-primary text-xl"></fa-icon>
                    </div>
                    <div>
                      <p class="text-sm opacity-70 mb-1">Location</p>
                      <span class="text-lg font-medium">Diest, Belgium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card bg-gradient-to-tl from-base-100 to-primary/10 shadow-xl border border-primary/20 backdrop-blur-sm hover:shadow-primary/20 transition-all duration-300"
            data-aos="fade-left"
          >
            <div class="card-body p-8 flex flex-col justify-between">
              <div>
                <h3 class="card-title text-2xl font-bold mb-6 text-center md:text-left">
                  Connect With Me
                </h3>
                <p class="mb-8 opacity-80">
                  Feel free to reach out on social media or send me a message directly.
                </p>
              </div>
              <div class="flex flex-wrap gap-5 justify-center md:justify-start">
                <a
                  href="https://github.com/blockken-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-lg btn-circle bg-base-100 hover:bg-primary hover:text-base-100 border-primary/20 text-xl shadow-md hover:shadow-primary/30 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <fa-icon [icon]="faGithub"></fa-icon>
                </a>
                <a
                  href="https://linkedin.com/in/wouter-blockken/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-lg btn-circle bg-base-100 hover:bg-primary hover:text-base-100 border-primary/20 text-xl shadow-md hover:shadow-primary/30 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <fa-icon [icon]="faLinkedin"></fa-icon>
                </a>
                <a
                  href="mailto:wouter@blockken.solutions"
                  class="ml-auto btn btn-primary text-base-100 shadow-md shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                >
                  Say Hello
                  <span class="ml-2">👋</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
