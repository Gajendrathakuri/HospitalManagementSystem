import {
  Component,
  importProvidersFrom,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IpatientReponse } from '../../core/types/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDto } from '../../core/Dtos/AddPatientDtos';

@Component({
  selector: 'app-patient-detail',
  imports: [],
  templateUrl: './patient-detail.html',
  styleUrl: './patient-detail.css',
})
export class PatientDetail implements OnInit {
curr = {
  name: 'Aarya Sharma',
  age: 28,
  gender: 'Female',
  email: 'aarya.sharma@example.com',
  phoneNo: '+977-9841000000',
  address: 'Baluwatar-04, Gairidhara',
  city: 'Kathmandu',
  citizenshipNo: '27-01-71-04532'
};

  constructor(private router:ActivatedRoute){}
  patientId:string | null =null;
 ngOnInit(): void {
   this.patientId=this.router.snapshot.paramMap.get('id');
   console.log(this.patientId);
 }

}
