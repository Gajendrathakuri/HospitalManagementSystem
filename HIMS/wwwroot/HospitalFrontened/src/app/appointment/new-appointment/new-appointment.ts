import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableComponent } from "../../shared/Components/table-component/table-component";
import { PatientDetail } from "../../patient/patient-detail/patient-detail";
import { ActivatedRoute, Route } from '@angular/router';
import { PatientService } from '../../core/services/PatientService';
import { IpatientReponse } from '../../core/types/patient';
import { NgForOf } from '@angular/common';
import { FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AppointmentStatus, CreateAppointmentDto } from '../../core/Dtos/Appointmentdots/AppointmentDtos';
import { StaffCreateDto, StaffResponseDto } from '../../core/Dtos/staff/staffdto';
import { Staffservices } from '../../core/services/staffservices';
import { Staff } from '../../staff/staff';

@Component({
  selector: 'app-new-appointment',
  imports: [PatientDetail, NgForOf, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './new-appointment.html',
  styleUrl: './new-appointment.css',
})
export class NewAppointment  { 
  @Input() patient!: any;
  @Output() appointmentCreated = new EventEmitter<CreateAppointmentDto>();

  appointmentForm!: FormGroup;
  doctors: StaffResponseDto[] = [];

  constructor(
    private fb: FormBuilder,
    private staffService: Staffservices
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadDoctors();
  }

  get f() {
    return this.appointmentForm.controls;
  }

  createForm() {
    this.appointmentForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      staffId: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
    });
  }

  loadDoctors() {
    this.staffService.GetAllDoctors().subscribe({
      next: (res: StaffResponseDto[]) => this.doctors = res,
    });
  }

  submit() {
    this.appointmentForm.markAllAsTouched();

    if (this.appointmentForm.invalid) return;

    const appointment: CreateAppointmentDto = {
      title: this.f['title'].value,
      patientId: this.patient.patientId,
      staffId: this.f['staffId'].value,
      appointmentDate: this.f['appointmentDate'].value,
      appointmentTime: this.f['appointmentTime'].value,
      appointmentStatus: AppointmentStatus.Pending
    };

    this.appointmentCreated.emit(appointment);
  }
}
