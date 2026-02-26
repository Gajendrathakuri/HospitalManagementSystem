import { Component, OnInit, Query } from '@angular/core';
import { ListAllpatient } from '../patient/list-allpatient/list-allpatient';
import { TableComponent } from '../shared/Components/table-component/table-component';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { PatientService } from '../core/services/PatientService';
import { AppointmentResponseDto } from '../core/Dtos/Appointmentdots/AppointmentDtos';
import { Appointmentservice } from '../core/services/appointmentservice';
@Component({
  selector: 'app-appointment',
  imports: [AgGridModule, RouterLink, TableComponent],
  templateUrl: './appointment.html',
  styleUrl: './appointment.css',
})
export class Appointment implements OnInit {
  AppointmentsData: AppointmentResponseDto[] = [];
  constructor(private appointmentservice: Appointmentservice) {}

  ngOnInit(): void {
    this.GetAllAppointments();
  }

  cols: ColDef[] = [
    { headerName: 'Name', field: 'name', filter: true },
    { headerName: 'Address', field: 'address' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'phohneNo', field: 'phoneNo' },
    {
      headerName: 'Actions',
      field: 'action',
      cellRenderer: (params: any) => {
        const container = document.createElement('div');
        container.className = 'd-flex';
        const BookAppointment = document.createElement('button');
        ((BookAppointment.className = 'btn me-2  btn-primary m-auto'),
          (BookAppointment.textContent = 'Book'));
        BookAppointment.onclick = () => {
          console.log('buttonclicked');
        };

        container.appendChild(BookAppointment);
        return container;
      },
    },
  ];

  GetAllAppointments() {
    this.appointmentservice
      .GetAllAppointments()
      .subscribe({ next: (res) => {
        console.log(res);
        this.AppointmentsData=res;
      } });
  }
}
