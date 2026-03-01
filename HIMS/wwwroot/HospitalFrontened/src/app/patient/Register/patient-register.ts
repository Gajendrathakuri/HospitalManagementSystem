import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RtcNepaliDatePickerModule } from '@rishovt/angular-nepali-datepicker';
import { PatientService } from '../../core/services/PatientService';
import { ToastrService } from 'ngx-toastr';
import { GenderTypes, PatientDto } from '../../core/Dtos/AddPatientDtos';
import { ReligionTypes } from '../../core/types/patient';

@Component({
  selector: 'app-patientregister',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RtcNepaliDatePickerModule],
  templateUrl: './patient-register.html',
})
export class PatientRegister implements OnInit {
  form!: FormGroup;
  GenderTypes = Object.values(GenderTypes);
  Religons = Object.values(ReligionTypes);
  currentAge!: number;

  constructor(private fb: FormBuilder, private patientService: PatientService, private toastr: ToastrService,private cd:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      age: [{ value: '', disabled: true }, [Validators.required, Validators.min(0), Validators.max(120)]],
      phoneNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', [Validators.required]],
      gender: ['', Validators.required],
      citizenshipNo: [''],
      dateOfBirth: ['', Validators.required],
      religion: [''],
      email: ['', [Validators.email]],
      city: [''],
      disease: [''],
      symptoms: [[]],
    });
  }

  get f() {
    return this.form.controls;
  }

  getAge(selectedDate: string | any) {
    if (!selectedDate) return;
    const birthDate = new Date(selectedDate);
    const today = new Date();
    this.currentAge = today.getFullYear() - birthDate.getFullYear();
    this.form.get('age')?.setValue(this.currentAge);
  }

  

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
   const formValue = this.form.value; 
    const  patient= {
      name: formValue.name,
      age: this.currentAge,
      gender: Number(formValue.gender),
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
      this.patientService.AddPatients(patient).subscribe(() => {
      this.toastr.success('Patient added successfully');
      this.form.reset();
      this.cd.detectChanges();

    });
  }
}