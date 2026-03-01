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
import { GenderTypes, PatientDto } from '../../core/Dtos/AddPatientDtos';
import { ShareService } from '../../core/services/GlobalSeerevice/share-service';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-patient-detail',
  imports: [NgIf,DatePipe],
  templateUrl: './patient-detail.html',
  styleUrl: './patient-detail.css',
})
export class PatientDetail implements OnInit {
  patient:any;
  constructor(private shareservice:ShareService){
  }
  ngOnInit(): void {
    this.patient=this.shareservice.GetAllDatas();
  }
   getGenderName():string{ 
return GenderTypes[this.patient.gender as number];
   }

  goBack() {
    window.history.back();
  }
}
