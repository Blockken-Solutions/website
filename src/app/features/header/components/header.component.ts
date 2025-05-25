import { Component, Output, EventEmitter, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-30 bg-base-100 shadow-md">
      <div class="navbar container mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label #dropdownToggle tabindex="0" class="btn btn-ghost lg:hidden">
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
              class="menu menu-md dropdown-content font-bold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  routerLink="/about"
                  routerLinkActive="router-link-active"
                  (click)="closeDropdownMenu()"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  routerLink="/skills"
                  routerLinkActive="router-link-active"
                  (click)="closeDropdownMenu()"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  routerLink="/projects"
                  routerLinkActive="router-link-active"
                  (click)="closeDropdownMenu()"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  routerLink="/contact"
                  routerLinkActive="router-link-active"
                  (click)="closeDropdownMenu()"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a
            routerLink="/"
            class="btn btn-ghost normal-case text-sm md:text-base lg:text-lg xl:text-xl"
          >
            Blockken
            <span class="text-primary">Solutions</span>
          </a>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu-lg menu-horizontal font-bold px-1">
            <li><a routerLink="/about" routerLinkActive="router-link-active">About</a></li>
            <li><a routerLink="/skills" routerLinkActive="router-link-active">Skills</a></li>
            <li><a routerLink="/projects" routerLinkActive="router-link-active">Projects</a></li>
            <li><a routerLink="/contact" routerLinkActive="router-link-active">Contact</a></li>
          </ul>
        </div>

        <div class="navbar-end gap-2">
          <button
            class="btn btn-ghost btn-square"
            (click)="toggleTheme()"
            aria-label="Toggle theme"
          >
            <svg
              *ngIf="isDarkTheme"
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
            <svg
              *ngIf="!isDarkTheme"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
              />
              <circle cx="12" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <a routerLink="/contact" class="btn btn-primary">Hire Me</a>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  @Output() themeChanged = new EventEmitter<string>();
  private themeService = inject(ThemeService);

  @ViewChild('dropdownToggle') dropdownToggleRef!: ElementRef<HTMLElement>;

  get isDarkTheme() {
    return this.themeService.currentTheme === 'night';
  }

  toggleTheme() {
    const newTheme = this.isDarkTheme ? 'nord' : 'night';
    this.themeService.setTheme(newTheme);
    this.themeChanged.emit(newTheme);
  }

  closeDropdownMenu() {
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      if (this.dropdownToggleRef && this.dropdownToggleRef.nativeElement) {
        this.dropdownToggleRef.nativeElement.blur();
      }
    }, 0);
  }
}
