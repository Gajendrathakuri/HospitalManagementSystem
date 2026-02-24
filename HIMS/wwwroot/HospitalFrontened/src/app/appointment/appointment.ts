
import { Component, OnInit, Query } from '@angular/core';
import { ListAllpatient } from "../patient/list-allpatient/list-allpatient";
import { TableComponent } from "../shared/Components/table-component/table-component";
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { routes } from '../app.routes';
import { IpatientReponse } from '../core/types/patient';
import { PatientService } from '../core/services/PatientService';

type tpat={
  name:string,
  id:number
}
@Component({
  selector: 'app-appointment',
  imports: [AgGridModule, RouterLink],

  templateUrl: './appointment.html',
  styleUrl: './appointment.css',
})
export class Appointment  implements OnInit{

Rowdata:IpatientReponse[]=[];
 constructor(private router:Router,private patientservice:PatientService){}

ngOnInit(): void {
  this.patientservice.ListAllPatients().subscribe((res)=>{
       this.Rowdata=res;
  })
}

    cols:ColDef[]=[
      {headerName:"Name",field:"name",filter:true},
      {headerName:"Address",field:"address"},
      {headerName:"Age", field:"age"},
      {headerName:"phohneNo",field:"phoneNo",},
      {headerName:"Actions",
        field:"action",
        cellRenderer:(params:any)=>{
          const container=document.createElement("div");
          container.className="d-flex"
          const BookAppointment=document.createElement('button');
        BookAppointment.className='btn me-2  btn-primary m-auto',
          BookAppointment.textContent="Book"
           BookAppointment.onclick=()=>{
            this.router.navigate(['appointment/bookappointment',params.data.id]);
           }
          
          container.appendChild(BookAppointment);
          return container;
        }
      },

    ]



}
