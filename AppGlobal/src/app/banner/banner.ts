import { Component } from '@angular/core';
import { LanguageService } from '../services/language';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
    animate = false;
  constructor(public lang: LanguageService) {}

  setPt() {
    if (this.lang.currentLang !== 'pt') {
      this.triggerAnimation();
      this.lang.setLanguage('pt');
    }
  }

  setEn() {
    if (this.lang.currentLang !== 'en') {
      this.triggerAnimation();
      this.lang.setLanguage('en');
    }
  }

  triggerAnimation() {
    this.animate = false;
    setTimeout(() => (this.animate = true), 10);
  }
}
