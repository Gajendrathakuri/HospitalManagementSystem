import { Component, EventEmitter, Input, input, OnInit, Output, output } from '@angular/core';
import { GenderTypes, ReligionTypes } from '../../core/types/patient';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatientDto } from '../../core/Dtos/AddPatientDtos';
import { ListAllpatient } from "../list-allpatient/list-allpatient";

@Component({
  selector: 'app-patientregister',
  imports: [NgFor, ReactiveFormsModule, FormsModule, NgIf, ListAllpatient],
  templateUrl: './patient-register.html',
  styleUrl: './patient-register.css',
})
export class PatientRegister implements OnInit {
  @Input() PatientData:PatientDto | null=null;
  @Output() submitted =new EventEmitter<PatientDto>();
  
form!:FormGroup;
GenderTypes=Object.values(GenderTypes);
Religons=Object.values(ReligionTypes);


constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      phoneNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      citizenshipNo: [''],
      dateOfBirth: ['', Validators.required],
      religion: [''],
      email: ['', [Validators.email]],
      city: [''],
      disease: [''],
      symptoms: [[]] // optional array
    });
  }
  // Returns a typed PatientDto from form value
  getPatientDto(): PatientDto {
    const formValue = this.form.value;
    const dto: PatientDto = {
      name: formValue.name,
      age: formValue.age,
      gender: formValue.gender,
      address: formValue.address,
      email: formValue.email,
      dateOfBirth: formValue.dateOfBirth,
      city: formValue.city,
      disease: formValue.disease,
      religion: formValue.religion,
      phoneNo: formValue.phoneNo,
      citizenshipNo: formValue.citizenshipNo,
      symptoms: formValue.symptoms
    };
    console.log(dto);
    return dto;
  }
 submit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const dto: PatientDto = {
      ...this.form.value,
      id: this.PatientData // preserve ID if updating
    };

    this.submitted.emit(dto);
  }
}
