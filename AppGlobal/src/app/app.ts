import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Footer } from './footer/footer';
import { Assistencia } from './assistencia/assistencia';
import { LanguageService } from './services/language';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Footer,Assistencia],
  templateUrl: './app.html',
  styleUrl: './app.css',
  template: `
   

   <button (click)="lang.setLanguage('pt')">PT</button>
    <button (click)="lang.setLanguage('en')">EN</button>

    <p>Idioma atual: {{ lang.currentLang }}</p>


    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `
})
export class App  {
  protected readonly title = signal('AppGlobal');
   constructor(public lang: LanguageService) {}


}
