import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrl: './app.component.css',
  template: `
    <section class="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div class="animate-pulse">
        <h1 class="text-5xl font-bold">🚀 Coming Soon!</h1>
        <p class="text-lg mt-4">Something awesome is on the way. Stay tuned!</p>
      </div>

      <div class="mt-8 w-64">
        <progress class="progress progress-primary w-full" value="70" max="100"></progress>
      </div>

      <div class="absolute bottom-10 text-gray-400 text-sm animate-bounce">
        <p>Website under construction... 🚧</p>
      </div>
    </section>

    <router-outlet/>
  `,
})
export class AppComponent {
}
