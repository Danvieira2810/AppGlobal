import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language';

@Component({
  selector: 'app-assistencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assistencia.html',
  styleUrls: ['./assistencia.css']
})
export class Assistencia {
  constructor(public lang: LanguageService) {}
}
