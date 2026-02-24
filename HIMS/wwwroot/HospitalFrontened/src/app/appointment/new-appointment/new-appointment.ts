import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../../shared/Components/table-component/table-component";
import { PatientDetail } from "../../patient/patient-detail/patient-detail";
import { ActivatedRoute, Route } from '@angular/router';
import { PatientService } from '../../core/services/PatientService';
import { IpatientReponse } from '../../core/types/patient';
import { NgForOf } from '@angular/common';
import { FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-appointment',
  imports: [PatientDetail, NgForOf, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './new-appointment.html',
  styleUrl: './new-appointment.css',
})
export class NewAppointment  { 
   patientid:any;
   CurrentPatient:any;
   form!:FormGroup;
 Doctors=["Ram","Shyam","Hari","Gopal"];
 
  constructor(private route:ActivatedRoute,private patientser:PatientService){
    this.form=new FormGroup(
      {
        time:new FormControl('',[Validators.required]),
        bookDate:new FormControl('',[Validators.required]),
        doctorid:new FormControl('',Validators.required),
        reason:new FormControl('')
      }
    );
    this.patientid=this.route.snapshot.paramMap.get('patientId');
   this.patientser.ListAllPatients().subscribe((res)=>{
     this.CurrentPatient= res.find((pat)=>pat.id==this.patientid);
     console.log(this.CurrentPatient,"selected patient");
  });
}

get f(){
  return this.form.controls;
}

// validate time

isTimevalid(time:any):boolean{
    const currenttime: string = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});
console.log(currenttime)
   return time>currenttime ? true:false;
}
// appoint
appointment(){
  console.log(this.isTimevalid('22:00'));
}
}
