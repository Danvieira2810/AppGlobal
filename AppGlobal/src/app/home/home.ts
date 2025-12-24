import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Banner } from "../banner/banner";
import { Assistencia } from "../assistencia/assistencia";
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Header, Banner, Assistencia, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
