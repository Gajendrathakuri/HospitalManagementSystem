import { Component } from '@angular/core';
import { StaffFormComponent } from "./staff-form-component/staff-form-component";
import * as bootstrap from 'bootstrap';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-staff',
  imports: [StaffFormComponent, NgIf],
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff {
  modalInstance:any;
constructor(){
}
data:any;
modelOpen(){ 
    const mymodel = document.getElementById('staffModal')!;
    this.modalInstance = new bootstrap.Modal(mymodel); 
    this.modalInstance.show(); 
}

updatehandler(event:any){
  this.data=event;
  console.log(this.data);
}



}
