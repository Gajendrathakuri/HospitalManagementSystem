import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { GenderTypes } from '../../core/Dtos/AddPatientDtos';
import { StaffProfiles } from '../../core/Dtos/staff/staffdto';
import { Departmentservice } from '../../core/services/departmentservice';
import { DepartmentDto } from '../../core/Dtos/Department/DepartmentDto';
import { ToastrService } from 'ngx-toastr';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-staff-form-component',
  templateUrl: './staff-form-component.html',
  styleUrls: ['./staff-form-component.css'],
  imports: [NgIf, ɵInternalFormsSharedModule, ReactiveFormsModule, NgForOf],
})
export class StaffFormComponent implements OnInit {
  staffForm!: FormGroup;
  @Output() staffCreated = new EventEmitter<any>();
  ALLDepartments: DepartmentDto[] = [];

  staffProfiles = Object.keys(StaffProfiles)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      name: key,
      value: StaffProfiles[key as keyof typeof StaffProfiles],
    }));

  gendersTypes = Object.keys(GenderTypes)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      name: key,
      value: GenderTypes[key as keyof typeof GenderTypes],
    }));

  constructor(
    private toast: ToastrService,
    private fb: FormBuilder,
    private departmentservice: Departmentservice
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadDepartments();
    this.onDOBChange();
  }

  // form controls values
  get f() {
    return this.staffForm.controls;
  }

  createForm() {
    this.staffForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      city: [''],
      phoneNo: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ],
      dateOfBirth: ['', [Validators.required]],
      age: [{ value: '', disabled: true }],
      departmentId: ['', [Validators.required]],
      gender: ['', Validators.required],
      email: ['', [Validators.email]],
      profile: ['', Validators.required],
      accountNumber: [''],
      salary: ['', [Validators.required, Validators.min(0)]],
      joinedDate: [''],
      leaveDate: [''],
    });
  }

  // load all departments
  loadDepartments() {
    this.departmentservice.GetAllDepartments().subscribe({
      next: (res: DepartmentDto[]) => {
        this.ALLDepartments = res;
      },
      error: (err) => {
        console.error('Error fetching departments', err);
      },
    });
  }

  // auto-calculate age from DOB
  onDOBChange() {
    this.staffForm.get('dateOfBirth')?.valueChanges.subscribe((dob) => {
      if (dob) {
        const birthDate = new Date(dob);
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        this.staffForm.get('age')?.setValue(calculatedAge);
      } else {
        this.staffForm.get('age')?.setValue('');
      }
    });
  }

  submit() {
    this.staffForm.markAllAsTouched(); 

    if (this.staffForm.invalid) {
      
      return;
    }
    const formdata={...this.staffForm.value};
    formdata.gender=Number(formdata.gender);
    formdata.profile=Number(formdata.profile);
    formdata.departmentId=Number(formdata.departmentId);
      console.log(formdata);
    this.staffCreated.emit(formdata);
  }
}