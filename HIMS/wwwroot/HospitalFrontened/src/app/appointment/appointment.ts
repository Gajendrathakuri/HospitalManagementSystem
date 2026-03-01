import { ChangeDetectorRef, Component, OnInit, Query } from '@angular/core';
import { TableComponent } from '../shared/Components/table-component/table-component';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import {
  AppointmentResponseDto,
  AppointmentStatus,
} from '../core/Dtos/Appointmentdots/AppointmentDtos';
import { Appointmentservice } from '../core/services/appointmentservice';
import { NewAppointment } from './new-appointment/new-appointment';
import * as bootstrap from 'bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-appointment',
  imports: [AgGridModule, TableComponent, NewAppointment],
  templateUrl: './appointment.html',
  styleUrl: './appointment.css',
})
export class Appointment implements OnInit {
  AppointmentsData: AppointmentResponseDto[] = [];
  appointmentModel!: bootstrap.Modal;
  constructor(
    private appointmentservice: Appointmentservice,
    private cd: ChangeDetectorRef,
    private toastservice: ToastrService,
  ) {}
  ngOnInit(): void {
    this.GetAllAppointments();
  }

  cols: ColDef[] = [
    { headerName: 'Patient Name', field: 'patientName', filter: true },
    { headerName: 'Address', field: 'patientAddress' },
    { headerName: 'Age', field: 'patientAge', width: 40 },
    { headerName: 'phohneNo', field: 'patientContact' },
    { headerName: 'Doctor', field: 'doctorName' },
    { headerName: 'Time', field: 'appointmentTime', width: 200 },
    { headerName: 'Date', field: 'appointmentDate' },
    {
      headerName: 'AppointmentStatus',
      field: 'appointmentstatus',
      valueFormatter: (param: ValueFormatterParams) => {
        return AppointmentStatus[param.value as number];
      },
    },
    {
      headerName: 'Action',
      minWidth: 250,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      cellRenderer: (params: any) => {
        const wrapper=document.createElement("div");
        const BookAppointment = document.createElement('button');
        BookAppointment.className = `${params.data?.appointmentstatus==2 ?'disabled':''} btn btn-primary me-2 btn-sm px-2 py-1 `;
        BookAppointment.style.fontSize = '12px';
        BookAppointment.textContent = 'Cancel Appointment';
        // Delete
        const DeleteAppointment=document.createElement("button")
         DeleteAppointment.className = 'btn btn-primary me-2 btn-sm px-2 py-1';
        DeleteAppointment.style.fontSize = '12px';
        DeleteAppointment.textContent = 'Delete';

        DeleteAppointment.onclick=()=>{   
          console.log(params?.data?.appointmentstatus);
        },
           BookAppointment.onclick = () => {
          this.CancelAppointment(params?.data?.appointmentid);
        };
        wrapper.appendChild(BookAppointment);
        wrapper.appendChild(DeleteAppointment);

        return wrapper; 
      },
    },
  ];
// get All the Appointments 
  GetAllAppointments() {
    this.appointmentservice.GetAllAppointments().subscribe({
      next: (res) => {
        this.AppointmentsData = res;
        this.cd.detectChanges();
      },
    });
  }
  // cancel Appointment
  CancelAppointment(id: string) {
    this.appointmentservice.CancelAppointment(id).subscribe({
      next: (res) => {
        this.toastservice.success('Appointment Cancelled');
      },
    });
    this.cd.detectChanges();
  }

  OpenModel() {
    const mymodel = document.getElementById('appointmentModel');
    if (!mymodel) {
      return;
    }
    if (!this.appointmentModel) {
      this.appointmentModel = new bootstrap.Modal(mymodel);
    }

    this.appointmentModel.show();
  }

  // closeModel

  closeModel() {
    if (this.appointmentModel) {
      this.appointmentModel.hide();
      this.GetAllAppointments();
    }
  }
}
