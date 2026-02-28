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
@Component({
  selector: 'app-appointment',
  imports: [AgGridModule, TableComponent, NewAppointment],
  templateUrl: './appointment.html',
  styleUrl: './appointment.css',
})
export class Appointment implements OnInit {
  AppointmentsData: AppointmentResponseDto[] = [];
  appointmentModel!: bootstrap.Modal;
  constructor(private appointmentservice: Appointmentservice,
    private cd:ChangeDetectorRef
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
      cellRenderer: (params: any) => {
        const container = document.createElement('div');
        container.className = 'd-flex';
        const BookAppointment = document.createElement('button');
        ((BookAppointment.className = 'btn me-2  btn-primary m-auto'),
          (BookAppointment.textContent = 'cancel Appointment'));
        BookAppointment.onclick=()=>{
          this.CancelAppointment(params.id);
        }

        container.appendChild(BookAppointment);
        return container;
      },
    },
  ];

  GetAllAppointments() {
    this.appointmentservice.GetAllAppointments().subscribe({
      next: (res) => {
        this.AppointmentsData = res;
        console.log(res);
        this.cd.detectChanges();
      },
    });
  }
  // cancel Appointment
  CancelAppointment(id:string){
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
