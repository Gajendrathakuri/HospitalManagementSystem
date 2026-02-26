import { Component, OnInit } from '@angular/core';
import { StaffFormComponent } from './staff-form-component/staff-form-component';
import * as bootstrap from 'bootstrap';
import { NgIf } from '@angular/common';
import { Staffservices } from '../core/services/staffservices';
import { StaffCreateDto, StaffProfiles, StaffResponseDto } from '../core/Dtos/staff/staffdto';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { TableComponent } from '../shared/Components/table-component/table-component';
import { GenderTypes } from '../core/Dtos/AddPatientDtos';
import { ToastrService } from 'ngx-toastr';
import { DepartmentDto } from '../core/Dtos/Department/DepartmentDto';
import { Departmentservice } from '../core/services/departmentservice';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-staff',
  imports: [StaffFormComponent, TableComponent, NgIf, RouterOutlet],
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff implements OnInit {
  modalInstance: any;
  departmentMap: { [key: number]: string } = {};
  allDepartments: DepartmentDto[] = [];
  AllStaffs: StaffResponseDto[] = [];
  constructor(
    private staffservice: Staffservices,
    private deptsrevice: Departmentservice,
    private toast: ToastrService,
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
    });
  }

  
// list all departments
  GetAllDepartments() {
    this.deptsrevice.GetAllDepartments().subscribe({
      next: (res) => (this.allDepartments = res),
    });

    // Create a map for quick lookup
    this.departmentMap = this.allDepartments.reduce(
      (acc, dept) => {
        acc[dept.id] = dept.departmentName;
        return acc;
      },
      {} as { [key: number]: string },
    );
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
      headerName:"EmpolyeeRole",
      field:"profile",
      valueFormatter:(param:ValueFormatterParams)=>{

        return StaffProfiles[param.value as number];
      }
    },
    {
      headerName: 'Department',
      field: 'departmentId',
      valueFormatter: (params: ValueFormatterParams): string => {
        const id=params.value;
        return this.departmentMap[id];
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
     width:300,
      cellRenderer:(params:StaffResponseDto)=>{
        const container=document.createElement("div");
        const EditStaff=document.createElement("span");
        EditStaff.innerText="Edit Staff";
        EditStaff.className="bg-primary me-1 px-1 "
     
        // deeletebutton

         const deletestaff=document.createElement("span");
        deletestaff.innerText="DeleteStaff";
        deletestaff.className=" bg-danger me-1  px-1 rounded-1" 
        // view staff

        const viewstaff=document.createElement("span");
        viewstaff.innerText="View"
        viewstaff.className='bg-info me-1  px-1 rounded-2'
 
        container.appendChild(viewstaff);
        container.appendChild(EditStaff);
        container.append(deletestaff);
        return container;
      }
    },
  ];

  updatehandler(event: StaffCreateDto) {
    this.staffservice.CreateNewStaff(event).subscribe({
      next: (res) => {
        console.log(res);

        this.toast.success('Staff created successfully!');
        this.modalInstance.hide();
        this.GetAllstaff();
      },
      error: (err) => {
        console.error(err);
        // Show error toast
        this.toast.error('Failed to create staff. Please try again.', 'Error');
      },
      complete: () => {},
    });
  }
}
