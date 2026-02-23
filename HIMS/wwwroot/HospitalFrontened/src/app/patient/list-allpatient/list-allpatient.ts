import { Component, EventEmitter, Input, OnInit, Output, Query } from '@angular/core';
import { IpatientReponse } from '../../core/types/patient';
import { PatientService } from '../../core/services/PatientService';
import { TableComponent } from '../../shared/Components/table-component/table-component';
import { ValueFormatterParams } from 'ag-grid-community';
import * as bootstrap from 'bootstrap';
import { PatientUpdate } from '../patient-update/patient-update';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-list-allpatient',
  imports: [TableComponent, PatientUpdate, NgIf],
  templateUrl: './list-allpatient.html',
  styleUrl: './list-allpatient.css',
})

export class ListAllpatient implements OnInit {
  AllPatient: IpatientReponse[] = [];
  constructor(
    private patientservice: PatientService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.patientservice.ListAllPatients().subscribe((res: IpatientReponse[]) => {
     this.AllPatient=[...res];
    });
  }
  selectedRow: any = null;

  patientColumns = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    {
      headerName: 'Gender',
      field: 'gender',
      valueFormatter: (params: ValueFormatterParams) =>
        params.value === 0 ? 'Male' : params.value === 1 ? 'Female' : 'Other',
    },
    { headerName: 'Address', field: 'address' },
    { headerName: 'City', field: 'city' },
    { headerName: 'Phone', field: 'phoneNo' },
    { headerName: 'Citizenship No', field: 'citizenshipNo' },
    {
      headerName: 'Actions',
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
        const viewbutton = document.createElement('span');
        viewbutton.className = 'btn btn-sm btn-primary me-2 ';
        viewbutton.textContent = 'View';
        viewbutton.onclick = () => {
          this.router.navigate(['patient/detail/', params.data.id]);
        };
        container.appendChild(updateBtn);
        container.appendChild(deleteBtn);
        container.appendChild(viewbutton);

        return container;
      },
      flex: 2,
      minWidth: 180,
      sortable: false,
      filter: false,
    },
  ];

  modalInstance: any;

  onRowSelected(rowdata: any): void {
    console.log(rowdata);
  }

  onUpdate(event: any) {
    this.selectedRow = event;
    const mymodel = document.getElementById('update')!;
    this.modalInstance = new bootstrap.Modal(mymodel); 
    this.modalInstance.show(); 
  }

  // model close
  close() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  onDelete(event: any) {
    console.log(event.id);
    this.patientservice.Deletepatient(event.id);
  }

  UpdatePatient(data: any) {
    console.log(data);
    this.modalInstance.hide();
  }


}
