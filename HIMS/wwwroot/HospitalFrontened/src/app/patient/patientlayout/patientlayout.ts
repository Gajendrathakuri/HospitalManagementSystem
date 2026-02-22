import { Component } from '@angular/core';
import { ListAllpatient } from "../list-allpatient/list-allpatient";
import { PatientRegister } from '../Register/patient-register';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-patientlayout',
  imports: [PatientRegister, RouterOutlet, ListAllpatient],

  templateUrl: './patientlayout.html',
  styleUrl: './patientlayout.css',
})
export class Patientlayout {

}
