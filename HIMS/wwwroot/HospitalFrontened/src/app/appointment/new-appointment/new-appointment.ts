import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../../shared/Components/table-component/table-component";
import { PatientDetail } from "../../patient/patient-detail/patient-detail";
import { ActivatedRoute, Route } from '@angular/router';
import { PatientService } from '../../core/services/PatientService';

@Component({
  selector: 'app-new-appointment',
  imports: [ PatientDetail],
  templateUrl: './new-appointment.html',
  styleUrl: './new-appointment.css',
})
export class NewAppointment implements OnInit {
  constructor(private route:ActivatedRoute,private patientser:PatientService){
  }
  CurrentPatient:any;
  patientid:any;

  ngOnInit(): void {
   this.patientid=this.route.snapshot.paramMap.get('patientId');
   this.CurrentPatient=this.getSelectedPatient();
   console.log(this.CurrentPatient);
   console.log(this.getSelectedPatient());
  }

  getSelectedPatient():any{
   return this.patientser.ListAllPatients().subscribe((res)=>{
      res.filter((pat)=>pat.id==this.patientid);
    })
  }
}
