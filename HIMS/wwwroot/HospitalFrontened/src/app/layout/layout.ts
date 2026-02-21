import { Component } from '@angular/core';
import { Sidedbar } from "./sidedbar/sidedbar";
import { Header } from "./header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
<<<<<<< HEAD
  imports: [Sidedbar, Header, RouterOutlet],
=======
  imports: [Sidedbar, Header],
>>>>>>> feature-backend/controller
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
