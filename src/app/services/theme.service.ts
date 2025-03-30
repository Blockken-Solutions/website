import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private themeSignal = signal<string>('night'); // Default theme

  readonly availableThemes = ['night', 'nord'];

  get currentTheme() {
    return this.themeSignal();
  }

  constructor() {
    // 1. Create effect FIRST
    effect(() => {
      const theme = this.themeSignal();
      this.document.documentElement.setAttribute('data-theme', theme);
    });

    // 2. Then initialize from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && this.availableThemes.includes(savedTheme)) {
      this.themeSignal.set(savedTheme); // This will trigger the effect
    } else {
      // Explicitly set default to trigger effect
      this.themeSignal.set('night');
    }
  }

  setTheme(theme: string) {
    if (!this.availableThemes.includes(theme)) {
      theme = 'night';
    }
    this.themeSignal.set(theme);
    localStorage.setItem('portfolio-theme', theme);
  }
}
