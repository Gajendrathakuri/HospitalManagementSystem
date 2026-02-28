import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GenderTypes } from '../../core/Dtos/AddPatientDtos';

@Component({
  selector: 'app-patient-update',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf],
  templateUrl: './patient-update.html',
  styleUrl: './patient-update.css',
})
export class PatientUpdate implements OnChanges {
  @Input() Patient: any;
  @Output() save = new EventEmitter<any>();
  originalDob:any;
  formdata!: FormGroup;
  currentAge!: number;

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
      // Make a copy to avoid mutating the original object
      const patchPatientValue = { ...this.Patient };

      // Store original DOB in case user doesn't change it
      this.originalDob = patchPatientValue.dateOfBirth;

      // Convert ISO date (or legacy format) to YYYY-MM-DD for input[type=date]
      if (patchPatientValue.dateOfBirth) {
        if (patchPatientValue.dateOfBirth.includes('T')) {
          // ISO string
          patchPatientValue.dateOfBirth = patchPatientValue.dateOfBirth.split('T')[0];
        } else {
          // Optional: handle legacy format 3030-10-2
          const parts = patchPatientValue.dateOfBirth.split('-');
          if (parts.length === 3) {
            const year = Number(parts[0]) - 7; 
            const month = Number(parts[1]);
            const day = Number(parts[2]);
            const date = new Date(year, month - 1, day);
            patchPatientValue.dateOfBirth = date.toISOString().split('T')[0];
          }
        }

        // Update age automatically
        this.getAge(patchPatientValue.dateOfBirth);
      }

      // Patch the form
      this.formdata.patchValue(patchPatientValue);
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
    console.log(formValues);
    formValues.gender = Number(formValues.gender);
   if (!formValues.dateOfBirth && this.originalDob) {
      formValues.dateOfBirth = this.originalDob;
    }
    if (this.formdata.valid) {
      this.save.emit({
        ...this.Patient,
        ...this.formdata.value,
      });
    }
  }
}
