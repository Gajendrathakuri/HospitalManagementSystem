import { Component } from '@angular/core';
import { Sidedbar } from "./sidedbar/sidedbar";
import { Header } from "./header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Sidedbar, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
