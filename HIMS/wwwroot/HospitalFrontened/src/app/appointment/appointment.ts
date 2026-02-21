<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  imports: [],
=======
import { Component, Query } from '@angular/core';
import { ListAllpatient } from "../patient/list-allpatient/list-allpatient";
import { TableComponent } from "../shared/Components/table-component/table-component";
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { concatAll, filter } from 'rxjs';
import { Router, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';

type tpat={
  name:string,
  id:number
}
@Component({
  selector: 'app-appointment',
  imports: [AgGridModule, TableComponent],
>>>>>>> feature-backend/controller
  templateUrl: './appointment.html',
  styleUrl: './appointment.css',
})
export class Appointment {
<<<<<<< HEAD
=======
  constructor(private router:Router){}

Rowdata=[
  {Name:"Gajendra singh ",Address:"kailali ",Age:14},

  {Name:"Hari",Address:"ktm",Age:30}
]


    cols:ColDef[]=[
      {headerName:"Name",field:"Name",filter:true},
      {field:"Address"},
      {field:"Age"},
      {field:"ContactNo",},
      {headerName:"Actions",
        field:"action",
        cellRenderer:(params:any)=>{
          const container=document.createElement("div");
          container.className="d-flex"
          const BookAppointment=document.createElement('button');
        BookAppointment.className='btn me-2  btn-primary m-auto',
          BookAppointment.textContent="Book"

          const cancelbutton=document.createElement('button');
          cancelbutton.className='btn gap-3 btn-danger',
          cancelbutton.textContent="Cancel"
           BookAppointment.onclick=()=>{
            this.router.navigate(['appointment/bookappointment',params.data.Name]);
           }
          
          container.appendChild(BookAppointment);
          container.appendChild(cancelbutton);
          return container;
        }
      },

    ]

>>>>>>> feature-backend/controller

}
