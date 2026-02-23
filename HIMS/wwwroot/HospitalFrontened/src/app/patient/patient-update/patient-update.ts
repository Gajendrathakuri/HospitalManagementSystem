import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgForOf } from '@angular/common';
import { GenderTypes } from '../../core/Dtos/AddPatientDtos';
import { FormBuilder, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { ReligionTypes } from '../../core/types/patient';

@Component({
  selector: 'app-patient-update',
  imports: [NgForOf, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './patient-update.html',
  styleUrl: './patient-update.css',
})
export class PatientUpdate implements OnChanges {
  GenderTypes = Object.values(GenderTypes);
  Religions = Object.values(ReligionTypes);
  @Input() Patient: any;
  @Output() save=new EventEmitter<any>();

  formdata!: FormGroup;
  constructor(private fb:FormBuilder){

    this.formdata=this.fb.group(
      {
        name:[''],
      age: [''],
      gender: [''],
      address: [''],
      phoneNo: [''],
      citizenshipNo: [''],
      dateofBirth: [''],
      city: [''],
      disease: [''],
      religion: [''],
      email: [''],
      symptoms: [[]]
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Patient'] && this.Patient) {
      console.log(this.Patient);
      this.formdata.patchValue(this.Patient);
    }
  }

  submit(){
    if(this.formdata.valid){
      this.save.emit({
        ...this.Patient,
        ...this.formdata.value
      })
      
    }
  }
}
