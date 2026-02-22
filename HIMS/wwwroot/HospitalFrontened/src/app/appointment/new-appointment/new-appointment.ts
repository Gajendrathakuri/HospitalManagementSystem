import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../../shared/Components/table-component/table-component";
import { PatientDetail } from "../../patient/patient-detail/patient-detail";
import { ActivatedRoute, Route } from '@angular/router';
import { PatientService } from '../../core/services/PatientService';
import { IpatientReponse } from '../../core/types/patient';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-new-appointment',
  imports: [PatientDetail, NgForOf],
  templateUrl: './new-appointment.html',
  styleUrl: './new-appointment.css',
})
export class NewAppointment implements OnInit {
  constructor(private route:ActivatedRoute,private patientser:PatientService){
  }
  CurrentPatient:IpatientReponse | undefined ;
  patientid:any;
 Doctors=["Ram","Shyam","Hari","Gopal"];
  ngOnInit(): void {
   this.patientid=this.route.snapshot.paramMap.get('patientId');
   this.patientser.ListAllPatients().subscribe((res)=>{
     this.CurrentPatient= res.find((pat)=>pat.id==this.patientid);
     console.log(this.CurrentPatient,"selected patient");
    })
  }

}
