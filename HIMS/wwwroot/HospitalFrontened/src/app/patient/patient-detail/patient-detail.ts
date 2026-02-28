import {
  Component,
  importProvidersFrom,
  Input,
  OnChanges,
  OnInit,
  output,
  SimpleChanges,
} from '@angular/core';
import { IpatientReponse } from '../../core/types/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDto } from '../../core/Dtos/AddPatientDtos';
import { ShareService } from '../../core/services/GlobalSeerevice/share-service';

@Component({
  selector: 'app-patient-detail',
  imports: [],
  templateUrl: './patient-detail.html',
  styleUrl: './patient-detail.css',
})
export class PatientDetail {
  
    patient:PatientDto[]=[{ 
      // id: '8409480e-26d4-4023-9b28-13c70b55c4ed',
    name: 'Binod Chaudhary',
    email: 'binodchy@gmail.com',
    address: 'Kailali 4',
    city: 'Dhangadhi',
    phoneNo: '9847514263',
    // dateOfBirth: '2002-02-25T09:31:27.892',
    age: 22,
    gender: 0,
    citizenshipNo: '147-58-7147',
    disease: 'Fever',
    symptoms: ['Fever', 'Cough', 'Fatigue']}
    ]
}
