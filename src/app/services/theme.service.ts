import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private themeSignal = signal<string>('night');

  readonly availableThemes = ['night', 'nord'];

  get currentTheme() {
    return this.themeSignal();
  }

  constructor() {
    effect(() => {
      const theme = this.themeSignal();
      this.document.documentElement.setAttribute('data-theme', theme);
    });

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && this.availableThemes.includes(savedTheme)) {
      this.themeSignal.set(savedTheme); // This will trigger the effect
    } else {
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
