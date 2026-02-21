import { Routes } from '@angular/router';
<<<<<<< HEAD
import { Layout } from './layout/layout';
import { Sidedbar } from './layout/sidedbar/sidedbar';
import { Header } from './layout/header/header';
import {  PatientRegister } from './patient/Register/patient-register';
import { Patientlayout } from './patient/patientlayout/patientlayout';

=======
<<<<<<< Updated upstream

export const routes: Routes = [];
=======
import { Layout } from './layout/layout';
import { Patientlayout } from './patient/patientlayout/patientlayout';
import { PatientRoute } from './patient/patient.route';
import { Appointment } from './appointment/appointment';
import { AppointRoute } from './appointment/AppointRoute.routes';
import { Dashboard } from './dashboard/dashboard';

>>>>>>> feature-backend/controller
export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
<<<<<<< HEAD
        loadComponent: () =>
          import('./dashboard/dashboard').then((e)=>e.Dashboard),
      },
      {
        path:"patient",
        component:Patientlayout,
      },
      { path: '', redirectTo: 'patient', pathMatch: 'full' },
      {path:"patient",component:Patientlayout}
    ],
  },
  { path: '**', redirectTo: '' },
];
=======
        component:Dashboard
      },
      {
        path: 'patient',
        loadChildren:()=>import('./patient/patient.route').then(e=>e.PatientRoute),
      },
      {
        path:"appointment",
    loadChildren:()=>import('./appointment/AppointRoute.routes').then((e)=>e.AppointRoute)      }

    ],
  },
  
  { path: '**', redirectTo: '' },
];
>>>>>>> Stashed changes
>>>>>>> feature-backend/controller
