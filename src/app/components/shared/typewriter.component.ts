import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center">
      <span>{{ text() }}</span>
      <span class="animate-blink">|</span>
    </div>
  `,
  styles: [
    `
      @keyframes blink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
      .animate-blink {
        animation: blink 1s step-end infinite;
      }
    `,
  ],
})
export class TypewriterComponent implements OnInit {
  @Input() textArray: string[] = [];
  @Input() typingSpeed = 100;
  @Input() deleteSpeed = 50;
  @Input() delayAfterType = 2000;

  text = signal('');
  private currentIndex = 0;
  private isDeleting = false;

  ngOnInit() {
    this.startTyping();
  }

  private startTyping() {
    const currentPhrase = this.textArray[this.currentIndex];
    const currentLength = this.text().length;

    if (!this.isDeleting && this.text() === currentPhrase) {
      // Completed typing the current phrase, wait before deleting
      this.isDeleting = true;
      setTimeout(() => this.startTyping(), this.delayAfterType);
      return;
    }

    if (this.isDeleting && this.text() === '') {
      // Completed deleting, move to next phrase
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
      setTimeout(() => this.startTyping(), 500);
      return;
    }

    // Set the new display text
    this.text.set(
      this.isDeleting
        ? currentPhrase.substring(0, currentLength - 1)
        : currentPhrase.substring(0, currentLength + 1),
    );

    // Set the delay for the next operation
    const delay = this.isDeleting ? this.deleteSpeed : this.typingSpeed;

    setTimeout(() => this.startTyping(), delay);
  }
}
