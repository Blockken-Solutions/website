import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sticky top-0 z-30 bg-base-100 shadow-md">
      <div class="navbar container mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">
            Dev
            <span class="text-primary">Portfolio</span>
          </a>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a (click)="changeTheme('light')">Light</a></li>
              <li><a (click)="changeTheme('dark')">Dark</a></li>
              <li><a (click)="changeTheme('synthwave')">Synthwave</a></li>
              <li><a (click)="changeTheme('cyberpunk')">Cyberpunk</a></li>
            </ul>
          </div>
          <a href="#contact" class="btn btn-primary ml-4">Hire Me</a>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  @Output() themeChanged = new EventEmitter<string>();
  private themeService = inject(ThemeService);

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
    this.themeChanged.emit(theme);
  }
}
