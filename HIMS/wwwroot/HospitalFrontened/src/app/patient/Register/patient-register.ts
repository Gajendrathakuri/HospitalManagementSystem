import { GenderTypes, PatientDto } from '../../core/Dtos/AddPatientDtos';
import { NgFor, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RtcNepaliDatePickerModule } from '@rishovt/angular-nepali-datepicker';
import { PatientService } from '../../core/services/PatientService';
import { ReligionTypes } from '../../core/types/patient';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-patientregister',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, FormsModule, RtcNepaliDatePickerModule, NgIf],
  templateUrl: './patient-register.html',
  styleUrl: './patient-register.css',
})
export class PatientRegister implements OnInit {
  form!: FormGroup;
  GenderTypes = Object.values(GenderTypes);
  Religons = Object.values(ReligionTypes);
  currentAge!: number;
  constructor(
    private patientservice: PatientService,
    private toaster: ToastrService,
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),

      age: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(120),
        Validators.pattern(/^[0-9]+$/),
      ]),

      phoneNo: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),

      address: new FormControl('', [Validators.required]),

      gender: new FormControl('', [Validators.required]),

      citizenshipNo: new FormControl(''),

      dateOfBirth: new FormControl('', [Validators.required]),

      religion: new FormControl(''),

      email: new FormControl('', [Validators.email]),

      city: new FormControl(''),

      disease: new FormControl(''),

      symptoms: new FormControl([]),
    });
  }

  get f() {
    return this.form.controls;
  }
  getAge(selecteddate: any | string) {
    const parsedate = new Date(selecteddate);
    const todayYear = new Date().getFullYear();
    const age = todayYear - parsedate.getFullYear();
    this.currentAge = age;
  }

  getPatientDto(): PatientDto {
    const formValue = this.form.value;
    const dto: PatientDto = {
      name: formValue.name,
      age: this.currentAge,
      gender: formValue.gender,
      address: formValue.address,
      email: formValue.email,
      dateOfBirth: formValue.dateOfBirth,
      city: formValue.city,
      disease: formValue.disease,
      religion: formValue.religion,
      phoneNo: formValue.phoneNo,
      citizenshipNo: formValue.citizenshipNo,
      symptoms: formValue.symptoms,
    };
    return dto;
  }
  submit() {
    console.log(this.form.value);
    this.form.markAllAsTouched();
    
    if (this.form.invalid) {
      return;
    }
    this.patientservice.AddPatients(this.getPatientDto()).subscribe((res) => {
      console.log(res);
    });
  }
}
