import { Routes } from '@angular/router';
<<<<<<< Updated upstream

export const routes: Routes = [];
=======
import { Layout } from './layout/layout';
import { Patientlayout } from './patient/patientlayout/patientlayout';
import { PatientRoute } from './patient/patient.route';
import { Appointment } from './appointment/appointment';
import { AppointRoute } from './appointment/AppointRoute.routes';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
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
