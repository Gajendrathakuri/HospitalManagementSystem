  import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { PatientService } from '../../core/services/PatientService';
import { Staffservices } from '../../core/services/staffservices';
import { StaffResponseDto } from '../../core/Dtos/staff/staffdto';
import {
  AppointmentStatus,
  CreateAppointmentDto,
} from '../../core/Dtos/Appointmentdots/AppointmentDtos';
import { IpatientReponse } from '../../core/types/patient';
import { NgFor, NgIf } from '@angular/common';
import { Appointmentservice } from '../../core/services/appointmentservice';
import {  ToastrService } from 'ngx-toastr';
@Component({
  imports: [ReactiveFormsModule, FormsModule, NgFor, NgIf],
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.html',
  styleUrls: ['./new-appointment.css'],
})
export class NewAppointment implements OnInit {
  @Output() ModelClose =new EventEmitter<any>();
  Allpatients: IpatientReponse[] = [];
  patient:any;
  searchTerm: string = '';
  appointmentForm!: FormGroup;
  doctors: StaffResponseDto[] = [];
isPatientFound:boolean=false;
  constructor(

    private fb: FormBuilder,
    private toastserv:ToastrService,
    private patientService: PatientService,
    private staffService: Staffservices,
    private appointmentService:Appointmentservice
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadDoctors();
    this.GetAllPatients();
  }

  createForm() {
    this.appointmentForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      staffId: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
    });
  }

  get f() {
    return this.appointmentForm.controls;
  }

  loadDoctors() {
    this.staffService.GetAllDoctors().subscribe((res) => (this.doctors = res));
  }

  GetAllPatients() {
    this.patientService.ListAllPatients().subscribe((res) => {
      this.Allpatients = res;
    });
  }

  // filter patients 
  filterPatients() {
    const term = this.searchTerm.trim().toLowerCase();
    console.log(term);
    if (!term) {
      this.patient = undefined!;
      return;
    }
    this.patient = this.Allpatients.filter((p) => p.phoneNo == this.searchTerm);  
    if(this.patient){
      this.isPatientFound=true;
    }
  }
  submit() {
    this.appointmentForm.markAllAsTouched();
    if (this.appointmentForm.invalid || !this.patient) return;

    const appointment: CreateAppointmentDto = {
      title: this.f['title'].value,
      patientId: this.patient[0].id,
      staffId: this.f['staffId'].value,
      appointmentDate: this.f['appointmentDate'].value,
      appointmentTime: this.f['appointmentTime'].value,
      appointmentStatus: AppointmentStatus.Pending,
    };

    this.appointmentService.CreateNewAppointment(appointment).subscribe(({
      next:(res)=>
          this.toastserv.success("New Appointmentment Created")
    }))
    this.ModelClose.emit();
  }
}
