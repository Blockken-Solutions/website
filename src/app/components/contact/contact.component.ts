import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section id="contact" class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <div class="max-w-3xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h3 class="card-title">Contact Info</h3>
                <div class="space-y-3 mt-4">
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2 text-primary"
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
                    <a href="mailto:your.email@example.com" class="link link-hover">
                      your.email&#64;example.com
                    </a>
                  </div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2 text-primary"
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
                    <span>(123) 456-7890</span>
                  </div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2 text-primary"
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
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                <div class="flex space-x-4 mt-6">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    class="btn btn-circle btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    class="btn btn-circle btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    class="btn btn-circle btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h3 class="card-title">Send a Message</h3>
                <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      [(ngModel)]="contactData.name"
                      required
                      class="input input-bordered w-full"
                      placeholder="Your name"
                    />
                  </div>
                  <div class="form-control w-full mt-4">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      [(ngModel)]="contactData.email"
                      required
                      class="input input-bordered w-full"
                      placeholder="Your email"
                    />
                  </div>
                  <div class="form-control w-full mt-4">
                    <label class="label">
                      <span class="label-text">Message</span>
                    </label>
                    <textarea
                      name="message"
                      [(ngModel)]="contactData.message"
                      required
                      class="textarea textarea-bordered h-24"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div class="form-control mt-6">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      [disabled]="!contactForm.form.valid || isSubmitting"
                    >
                      <span *ngIf="!isSubmitting">Send Message</span>
                      <span *ngIf="isSubmitting">Sending...</span>
                    </button>
                  </div>
                </form>
                <div *ngIf="submitSuccess" class="alert alert-success mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Your message has been sent successfully!</span>
                </div>
                <div *ngIf="submitError" class="alert alert-error mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Something went wrong. Please try again.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  onSubmit(): void {
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;

      // For demo purposes, always success
      // In a real app, you would integrate with a backend service
      this.submitSuccess = true;

      // Reset form after successful submission
      this.contactData = {
        name: '',
        email: '',
        message: '',
      };
    }, 1500);
  }
}
