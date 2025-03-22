import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private themeSignal = signal<string>('night');

  // List of available DaisyUI themes
  readonly availableThemes = ['night', 'nord'];

  get theme() {
    return this.themeSignal();
  }

  setTheme(theme: string) {
    // Validate theme is in available themes
    if (!this.availableThemes.includes(theme)) {
      console.warn(`Theme "${theme}" is not a valid DaisyUI theme. Using "dark" instead.`);
      theme = 'night';
    }

    this.themeSignal.set(theme);
    localStorage.setItem('portfolio-theme', theme);
  }

  constructor() {
    // Initialize theme from localStorage if available
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && this.availableThemes.includes(savedTheme)) {
      this.themeSignal.set(savedTheme);
    }

    // Set up an effect to apply the theme whenever it changes
    effect(() => {
      const currentTheme = this.themeSignal();
      this.document.documentElement.setAttribute('data-theme', currentTheme);
    });
  }
}
