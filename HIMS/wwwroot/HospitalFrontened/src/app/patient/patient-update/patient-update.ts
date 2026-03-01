import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GenderTypes } from '../../core/Dtos/AddPatientDtos';

@Component({
  selector: 'app-patient-update',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf],
  templateUrl: './patient-update.html',
})
export class PatientUpdate implements OnChanges {
  @Input() Patient: any;
  @Output() save = new EventEmitter<any>();
  originalDob: any;
  formdata!: FormGroup;
  currentAge!: number;
  beforeUpdateDateofBirth:any;
  genders = Object.keys(GenderTypes)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      value: GenderTypes[key as keyof typeof GenderTypes],
      name: key,
    }));

  constructor(private fb: FormBuilder) {
    this.formdata = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      address: [''],
      phoneNo: [''],
      citizenshipNo: [''],
      dateOfBirth: [''],
      city: [''],
      disease: [''],
      email: [''],
      symptoms: [[]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Patient'] && this.Patient) {
      const currentPatient = { ...this.Patient };
      this.beforeUpdateDateofBirth=currentPatient.dateofBirth;
      this.originalDob = currentPatient?.dateofBirth.split('T')[0];
      // date format
      const day=this.originalDob.split("-")[2]
      const year=this.originalDob.split("-")[0]
      const month=this.originalDob.split("-")[1]
      const finalDate=`${month}/${day}/${year}`;
      this.originalDob=finalDate;
      currentPatient?.dateofBirth!=this.originalDob;
      this.formdata.patchValue(currentPatient);

    }
  }

  getAge(selectedDate: string | any) {
    if (!selectedDate) return;
    const birthDate = new Date(selectedDate);
    const today = new Date();
    this.currentAge = today.getFullYear() - birthDate.getFullYear();
    this.formdata.get('age')?.setValue(this.currentAge);
  }

  submit() {
    const formValues = this.formdata.value;
    formValues.gender = Number(formValues.gender);

    if (!formValues.dateOfBirth && this.originalDob) {
      formValues.dateOfBirth = this.beforeUpdateDateofBirth;
    }
    console.log(formValues);
    if (this.formdata.valid) {
      this.save.emit({
        ...this.Patient,
        ...this.formdata.value,
      });
    }
  }
}
