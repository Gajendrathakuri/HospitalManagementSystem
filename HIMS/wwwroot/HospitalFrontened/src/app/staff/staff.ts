import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { StaffFormComponent } from './staff-form-component/staff-form-component';
import * as bootstrap from 'bootstrap';
import { NgIf } from '@angular/common';
import { Staffservices } from '../core/services/staffservices';
import { StaffCreateDto, StaffProfiles, StaffResponseDto } from '../core/Dtos/staff/staffdto';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { TableComponent } from '../shared/Components/table-component/table-component';
import { GenderTypes } from '../core/Dtos/AddPatientDtos';
import { ToastrService } from 'ngx-toastr';
import { DepartmentDto, DepartmentTypes } from '../core/Dtos/Department/DepartmentDto';
import { Departmentservice } from '../core/services/departmentservice';
import { RouterOutlet } from '@angular/router';
import { StaffDetail } from './staff-detail/staff-detail';
@Component({
  selector: 'app-staff',
  imports: [StaffFormComponent, TableComponent, RouterOutlet],
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff implements OnInit {
  modalInstance: any;
  StafftoDelete: any;
  SelectedStaff!: StaffResponseDto;
  StaffViewModel!: bootstrap.Modal;
  staffDeleteModel!: bootstrap.Modal;
  allDepartments: DepartmentDto[] = [];
  AllStaffs: StaffResponseDto[] = [];

  constructor(
    private staffservice: Staffservices,
    private deptsrevice: Departmentservice,
    private toast: ToastrService,
    private cd: ChangeDetectorRef,
  ) {
    this.GetAllstaff();
    this.GetAllDepartments();
  }
  ngOnInit(): void {
    this.GetAllDepartments();
    this.GetAllstaff();
  }
  GetAllstaff() {
    this.staffservice.GetAllStaffs().subscribe((res) => {
      console.log(res);
      this.AllStaffs = res;
      this.cd.detectChanges();
    });
  }

  // list all departments
  GetAllDepartments() {
    this.deptsrevice.GetAllDepartments().subscribe({
      next: (res) => (this.allDepartments = res),
    });
  }

  data: any;
  modelOpen() {
    const mymodel = document.getElementById('staffModal')!;
    this.modalInstance = new bootstrap.Modal(mymodel);
    this.modalInstance.show();
  }

  cols: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Address', field: 'address' },
    {
      headerName: 'Gender',
      field: 'gender',
      valueFormatter: (params: ValueFormatterParams) => {
        return GenderTypes[params.value as number];
      },
    },
    {
      headerName: 'EmpolyeeRole',
      field: 'profile',
      valueFormatter: (param: ValueFormatterParams) => {
        return StaffProfiles[param.value as number];
      },
    },
    {
      headerName: 'Department',
      field: 'departmentId',
      valueFormatter: (params: ValueFormatterParams): string => {
        return DepartmentTypes[params.value as number];
      },
    },
    {
      headerName: 'Joined Date',
      field: 'joinedDate',
      valueFormatter: (params: ValueFormatterParams): string => {
        if (!params.value) return '';
        const date = new Date(params.value);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      },
    },
    {
  headerName: 'Actions',
  minWidth: 300,
  cellStyle: {
    display: 'flex',
    justifyContent: 'center', // centers horizontally
    alignItems: 'center',     // centers vertically
    gap: '4px',               // optional spacing between buttons
  },
  cellRenderer: (params: StaffResponseDto) => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.gap = '4px'; // spacing between items

    const viewstaff = document.createElement('span');
    viewstaff.innerText = 'View';
    viewstaff.style.fontSize="12px"
    viewstaff.className = 'btn btn-info me-2 btn-sm px-2 py-1';
    viewstaff.addEventListener('click', () => {
      this.ViewModels(params);
    });

    const EditStaff = document.createElement('span');
    EditStaff.innerText = 'Edit Staff';
    EditStaff.style.fontSize="12px"
    EditStaff.className = 'btn btn-primary me-2 btn-sm px-2 py-1';
    EditStaff.addEventListener('click', () => {
     
    });

    const deletestaff = document.createElement('btn');
    deletestaff.innerText = 'Delete Staff';
    deletestaff.style.fontSize="12px"
    deletestaff.className = 'btn btn-danger me-2 btn-sm px-2 py-1';
    deletestaff.addEventListener('click', () => {
      this.onDelete(params);
    });

    // Append in the order you want
    container.appendChild(viewstaff);
    container.appendChild(EditStaff);
    container.appendChild(deletestaff);

    return container;
  },
}
  ];

  // view model
  ViewModels(event: any) {
    this.SelectedStaff = event?.data;
    console.log(this.SelectedStaff);
    const mymodel = document.getElementById('viewStaffModal')!;
    this.StaffViewModel = new bootstrap.Modal(mymodel);
    this.StaffViewModel.show();
  }

  // update handler
  updatehandler(event: StaffCreateDto) {
    this.staffservice.CreateNewStaff(event).subscribe({
      next: (res) => {
        this.toast.success('Staff created successfully!');
        this.modalInstance.hide();
        this.cd.detectChanges();
      },
      error: (err) => {
        this.toast.error('Failed to create staff. Please try again.', 'Error');
      },
      complete: () => {},
    });
  }

  // delete staff model
  onDelete(event: any) {
    this.StafftoDelete = event?.data;
    const mymodel = document.getElementById('staffDelete')!;
    this.staffDeleteModel = new bootstrap.Modal(mymodel);
    this.staffDeleteModel.show();
  }

  //confirm delete
  deletepatientswith() {
    if (!this.StafftoDelete) return;

    // this.staffservice.Deletepatient(this.StafftoDelete.id).subscribe({
    //   next: (res) => {

    this.AllStaffs = this.AllStaffs.filter((p) => p.id !== this.StafftoDelete.id);
    this.staffDeleteModel?.hide();
    this.toast.success('Patient deleted Successfully');
    this.cd.detectChanges();
    //   this.StafftoDelete = undefined;
    //   this.cd.detectChanges();
    // },
    // error: (err) => {
    //   this.toastser.error('Failed to delete patient');
    // }
    // });
  }
}
