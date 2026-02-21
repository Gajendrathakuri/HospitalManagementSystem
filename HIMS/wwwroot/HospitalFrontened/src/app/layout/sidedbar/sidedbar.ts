import { Component } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav"
import { sidebarData } from '../../core/SidebarDatas/Sidebardata';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { MatIcon, MatIconModule } from "@angular/material/icon";


@Component({
  selector: 'app-sidedbar',
  imports: [MatSidenavModule, RouterOutlet, NgClass, NgForOf, NgIf, MatIconModule, RouterLinkWithHref],
  templateUrl: './sidedbar.html',
  styleUrl: './sidedbar.css',
})
export class Sidedbar {
  navdatas:any[]=sidebarData;
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
