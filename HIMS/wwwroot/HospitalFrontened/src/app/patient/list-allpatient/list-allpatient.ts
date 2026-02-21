import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IpatientReponse } from '../../core/types/patient';
import { PatientService } from '../../core/services/PatientService';
import { TableComponent } from "../../shared/Components/table-component/table-component";
import { ValueFormatterParams } from 'ag-grid-community';
import * as bootstrap from "bootstrap";
import { PatientUpdate } from "../patient-update/patient-update";
@Component({
  selector: 'app-list-allpatient',
  imports: [TableComponent, PatientUpdate],
  templateUrl: './list-allpatient.html',
  styleUrl: './list-allpatient.css',
})
export class ListAllpatient implements OnInit {
AllPatient:IpatientReponse[]=[];
constructor(private patientservice:PatientService){}

ngOnInit(): void {
  this.GetAllPatient();
 
}


GetAllPatient():void{
  this.patientservice.ListAllPatients().subscribe((res:IpatientReponse[])=>{
<<<<<<< HEAD
    this.AllPatient=[...res];
=======
    this.AllPatient=res;
    console.log(res);
>>>>>>> feature-backend/controller
    
  })
}
  selectedRow:any=null;

  patientColumns = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Gender', field: 'gender',
      valueFormatter: (params:ValueFormatterParams) => params.value === 0 ? 'Male' : params.value === 1 ? 'Female' : 'Other'
    },
    { headerName: 'Address', field: 'address' },
    { headerName: 'City', field: 'city' },
    { headerName: 'Phone', field: 'phoneNo' },
    { headerName: 'Citizenship No', field: 'citizenshipNo' },
    { headerName:"Actions",
       field: 'actions',
    cellRenderer: (params: any) => {
      const container = document.createElement('div');

      // Update Button
      const updateBtn = document.createElement('button');
      updateBtn.className = 'btn btn-sm btn-primary me-2';
      updateBtn.textContent = `Edit`;
      updateBtn.onclick = () => this.onUpdate(params.data); // call component method

      // Delete Button
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-sm btn-danger me-2';
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => this.onDelete(params.data); // call component method

      //  const view button
      const viewbutton=document.createElement("span");
      viewbutton.className='btn btn-sm btn-primary me-2 ';
      viewbutton.textContent='View'
      viewbutton.onclick=()=>this.viewPatient(params.data);
      container.appendChild(updateBtn);
      container.appendChild(deleteBtn);
      container.appendChild(viewbutton);

      return container;
    },
    flex: 2,
    minWidth: 180,
    sortable: false,
    filter: false
    }
  ];
   modalInstance: any;

  onRowSelected(rowdata:any):void{
    console.log(rowdata);
 this.selectedRow=rowdata;
   console.log("selected row is",this.selectedRow);
  }

onUpdate(event:any){
  this.selectedRow=event;
  const mymodel = document.getElementById("update")!;
  this.modalInstance = new bootstrap.Modal(mymodel); // initialize modal
  this.modalInstance.show(); // show modal
}
close() {
  if (this.modalInstance) {
    this.modalInstance.hide();
  }
}

  onDelete(event:any){
    console.log(event.id);
    this.patientservice.Deletepatient(event.id);
    
  }

  viewPatient(event:any){
    console.log(event.data);
    console.log("viewing");
  }


  UpdatePatient(data:any){
    console.log(data);
    this.modalInstance.hide();
  }

}
