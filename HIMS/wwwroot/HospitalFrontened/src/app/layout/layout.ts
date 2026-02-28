import { Component } from '@angular/core';
import { Sidedbar } from "./sidedbar/sidedbar";
import { Header } from "./header/header";

@Component({
  selector: 'app-layout',
  imports: [Sidedbar, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
