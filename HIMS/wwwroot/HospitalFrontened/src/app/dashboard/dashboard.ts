import { Component, OnInit } from '@angular/core';
import { Appointmentservice } from '../core/services/appointmentservice';
import { PatientService } from '../core/services/PatientService';
import { Staffservices } from '../core/services/staffservices';
import { IpatientReponse } from '../core/types/patient';
import { map, Observable } from 'rxjs';
import { StaffResponseDto } from '../core/Dtos/staff/staffdto';
import { AppointmentResponseDto } from '../core/Dtos/Appointmentdots/AppointmentDtos';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
totalAppointments$!: Observable<number>;
  totalPatients$!: Observable<number>;
  totalDoctors$!: Observable<number>;
  totalStaff$!: Observable<number>;

  constructor(
    private appointmentService: Appointmentservice,
    private patientService: PatientService,
    private staffService: Staffservices
  ) {}

  ngOnInit(): void {
    // Transform the array response into count using map
    this.totalAppointments$ = this.appointmentService.GetAllAppointments()
      .pipe(map((res: AppointmentResponseDto[]) => res.length));

    this.totalPatients$ = this.patientService.ListAllPatients()
      .pipe(map((res: IpatientReponse[]) => res.length));

    this.totalDoctors$ = this.staffService.GetAllDoctors()
      .pipe(map((res: StaffResponseDto[]) => res.length));

    this.totalStaff$ = this.staffService.GetAllStaffs()
      .pipe(map((res: StaffResponseDto[]) => res.length));
  }

  // Navigation buttons
  goToPatients() {
    window.location.href = '/patient';
  }

  goToAppointments() {
    window.location.href = '/appointment';
  }

  goToStaff() {
    window.location.href = '/staff';
  }

  ViewDoctos(){
    
  }
 
}
