import { Component } from '@angular/core';
import { ListAllpatient } from "../list-allpatient/list-allpatient";
import { PatientRegister } from '../Register/patient-register';
<<<<<<< HEAD
@Component({
  selector: 'app-patientlayout',
  imports: [ListAllpatient,PatientRegister],
=======
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-patientlayout',
  imports: [PatientRegister, RouterOutlet],
>>>>>>> feature-backend/controller
  templateUrl: './patientlayout.html',
  styleUrl: './patientlayout.css',
})
export class Patientlayout {

}
