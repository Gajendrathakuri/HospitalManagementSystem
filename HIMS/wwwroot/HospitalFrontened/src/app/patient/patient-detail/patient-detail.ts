import { Component, importProvidersFrom, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientDto } from '../../core/Dtos/AddPatientDtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  imports: [],
  templateUrl: './patient-detail.html',
  styleUrl: './patient-detail.css',
})
export class PatientDetail  {

@Input() Currentpatient:any={
  name:"Gajendra",
  address:"kailali",
  gender:"male",
  age:10,

}

  
}
