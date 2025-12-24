import { Injectable, signal } from '@angular/core';

export type Language = 'pt' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  lang = signal<Language>('pt');

  setLanguage(lang: Language) {
    this.lang.set(lang);
  }

  get currentLang(): Language {
    return this.lang();
  }
}
