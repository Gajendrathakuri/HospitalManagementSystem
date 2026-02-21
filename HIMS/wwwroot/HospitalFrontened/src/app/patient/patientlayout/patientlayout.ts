import { Component } from '@angular/core';
import { ListAllpatient } from "../list-allpatient/list-allpatient";
import { PatientRegister } from '../Register/patient-register';
@Component({
  selector: 'app-patientlayout',
  imports: [ListAllpatient,PatientRegister],
  templateUrl: './patientlayout.html',
  styleUrl: './patientlayout.css',
})
export class Patientlayout {

}
