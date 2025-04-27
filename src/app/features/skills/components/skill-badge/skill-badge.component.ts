import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  styleUrls: ['./skill-badge.component.css'],
  template: `
    <div
      class="badge badge-primary badge-lg py-3 gap-1.5"
      [ngClass]="!isPrimary ? 'badge-outline' : ''"
    >
      @if (simpleIcon) {
        <span *ngIf="getSimpleIcon()" class="w-4 h-4" [innerHTML]="getSimpleIcon()"></span>
      } @else if (icon) {
        <fa-icon [icon]="icon" class="w-4 h-4 flex mr-1" />
      }
      {{ name }}
    </div>
  `,
})
export class SkillBadgeComponent {
  @Input() name!: string;
  @Input() isPrimary: boolean = false;
  @Input() icon: any;
  @Input() simpleIcon: string = '';
  @Input() iconMap: { [key: string]: any } = {};

  constructor(private sanitizer: DomSanitizer) {}

  getSimpleIcon(): SafeHtml {
    if (!this.simpleIcon || !this.iconMap) return '';

    const icon = this.iconMap[this.simpleIcon];

    if (!icon) {
      console.warn(`SimpleIcon not found: ${this.simpleIcon}`);
      return '';
    }

    const svg = icon.svg
      .replace(/^<svg /, '<svg fill="currentColor" ')
      .replace(/width="\d+"/, '')
      .replace(/height="\d+"/, '')
      .replace(/<svg /, '<svg viewBox="0 0 24 24" ');

    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
