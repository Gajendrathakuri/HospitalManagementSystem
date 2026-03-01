import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, Query } from '@angular/core';
import { IPatient, IpatientReponse } from '../../core/types/patient';
import { PatientService } from '../../core/services/PatientService';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import * as bootstrap from 'bootstrap';
import { PatientUpdate } from '../patient-update/patient-update';
import { Router } from '@angular/router';
import { ToastRef, ToastrService } from 'ngx-toastr';
import { AgGridAngular } from "ag-grid-angular";
import { TableComponent } from "../../shared/Components/table-component/table-component";
import { ShareService } from '../../core/services/GlobalSeerevice/share-service';

@Component({
  selector: 'app-list-allpatient',
  imports: [PatientUpdate, TableComponent],
  templateUrl: './list-allpatient.html',
  // styleUrl: './list-allpatient.css',
})
export class ListAllpatient implements OnInit {
  AllPatient: IpatientReponse[]= [];
  patientToDelete?:IpatientReponse;
  constructor(
    private patientservice: PatientService,
    private router: Router,
    private toastser: ToastrService,
    private cd:ChangeDetectorRef,
    private shareservice:ShareService
  ) {}
   DeletePatientstatus: boolean = false;
  
  ngOnInit(): void {
    this.GetAllpatients();
  }

 
// get all patients
  GetAllpatients() {
    this.patientservice.ListAllPatients().subscribe((res: IpatientReponse[]) => {
      this.AllPatient = res;
      this.cd.detectChanges();
    });
  }
  selectedRow: any = null;

  patientColumns:ColDef<IpatientReponse>[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    {
      headerName: 'Gender',
      field: 'gender',
      valueFormatter: (params: ValueFormatterParams) =>
        params.value === 0 ? 'Male' : params.value === 1 ? 'Female' : 'Other',
    },
    { headerName: 'Address', field: 'address' },
    { headerName: 'Phone', field: 'phoneNo' },
    { headerName: 'Citizenship No', field: 'citizenshipNo' },
    {
      headerName: 'Actions',
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

        //   view button
        const viewbutton = document.createElement('span');
        viewbutton.className = 'btn btn-sm btn-primary me-2 ';
        viewbutton.textContent = 'View';
        viewbutton.onclick = () => {
          this.shareservice.SetData(params.data);
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
  deletemodelInstany: any;
  onRowSelected(rowdata: any): void {
    console.log(rowdata)
  }


  // model close
  close() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

// delete handler
  onDelete(event: any) {
    this.patientToDelete=event;
    const mymodel = document.getElementById('confirmDelete')!;
    this.deletemodelInstany = new bootstrap.Modal(mymodel);
    this.deletemodelInstany.show();
  }


  // Confirm delete
deletepatientswith() {
  if (!this.patientToDelete) return;

  this.patientservice.Deletepatient(this.patientToDelete.id).subscribe({
    next: (res) => {
      // Remove patient from local list
      this.AllPatient = this.AllPatient.filter(p => p.id !== this.patientToDelete!.id);
      this.deletemodelInstany?.hide();
      this.toastser.success("Patient deleted Successfully");
      this.patientToDelete = undefined; 
      this.cd.detectChanges();
    },
    error: (err) => {
      this.toastser.error('Failed to delete patient');
    }
  });
}

onUpdate(patient: IpatientReponse) {
  this.selectedRow = patient;
  const modalEl = document.getElementById('update')!;
  this.modalInstance = new bootstrap.Modal(modalEl);
  this.modalInstance.show();
}

UpdatePatient(updatedPatientValue: IpatientReponse) {
  // Update locally
  // const index = this.AllPatient.findIndex(p => p.id === updatedPatient.id);
 this.patientservice.Upatepatient(updatedPatientValue?.id,updatedPatientValue).subscribe((res)=>{
  this.toastser.success("patient Updated Successfully");
  console.log(res);
 })
  // Close modal
  this.modalInstance?.hide();
}
}
