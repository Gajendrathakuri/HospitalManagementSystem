import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon"
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

enum Roles{
  Admin,
  Staff,
  Doctor
}
@Component({
  selector: 'app-header',
  imports: [MatIconModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 profileIcon:string="https://ui-avatars.com/api/?name=Gajendra+Siggh";
loginUserRole=Roles.Admin;




}
