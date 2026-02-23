import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { GenderTypes } from '../../core/Dtos/AddPatientDtos';
import { StaffProfiles } from '../../core/Dtos/staff/staffdto';

@Component({
  selector: 'app-staff-form-component',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './staff-form-component.html',
  styleUrl: './staff-form-component.css',
})
export class StaffFormComponent {
staffForm!: FormGroup;
@Output() staffCreated=new EventEmitter<any>();

staffProfiles = Object.keys(StaffProfiles)
  .filter(key => isNaN(Number(key)))
  .map(key => ({
    name: key,
    value: StaffProfiles[key as keyof typeof StaffProfiles]
  }));

  // staffProfiles = Object.values(StaffProfiles)
    // .filter(v => !isNaN(Number(v)));  

  genders = Object.values(GenderTypes)
    .filter(v => !isNaN(Number(v))).map((key)=>({
      name:key,
      value:GenderTypes[key as keyof typeof GenderTypes]
    }));


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }
// form controls values
  get f(){
    return this.staffForm.controls;
  }
  // initialize form 
  createForm() {

    this.staffForm = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(3)]],

      address: [''],
      city: [''],

      phoneNo: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]],

      dateOfBirth: [''],
      age: ['', [Validators.required, Validators.min(18)]],

      gender: ['', Validators.required],

      email: ['', [Validators.email]],

      profile: ['', Validators.required],

      // departmentId: ['', Validators.required],  

      accountNumber: [''],

      salary: ['', [Validators.required, Validators.min(0)]],

      joinedDate: ['', Validators.required],

      leaveDate: ['']
    });
  }

  submit() {
//  if (this.staffForm.invalid) {
//     this.staffForm.markAllAsTouched();
//     return;
//   }

  const formData = this.staffForm.value;
     console.log(this.genders);
  // 🔥 Send data to Parent
  this.staffCreated.emit(formData);
  }
}
