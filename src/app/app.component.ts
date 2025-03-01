import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProgressBarModule} from 'primeng/progressbar';
import {MessageModule} from 'primeng/message';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProgressBarModule, MessageModule],
  styleUrl: './app.component.scss',
  template: `
    <div class="">
      <h1 class="p-mb-3">
        <i class="pi pi-cog p-mr-2"></i>
        Welcome to Blockken Solutions
      </h1>
      <p class="p-mb-3">Our website is currently under construction. Please check back soon!</p>

      <p-progressBar mode="indeterminate" class="p-mb-3"></p-progressBar>

      <!-- Display a Message -->
      <p-message severity="info" text="We are building something amazing!"></p-message>

      <!-- Footer Section -->
      <div class="p-mt-5">
        <p class="p-mb-2">©2025 BlockkenSolutions | All Rights Reserved</p>
      </div>
    </div>
    <router-outlet/>
  `,
})
export class AppComponent {
  protected readonly Date = Date;
}
