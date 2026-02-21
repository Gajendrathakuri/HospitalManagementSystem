import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Sidedbar } from './layout/sidedbar/sidedbar';
import { Header } from './layout/header/header';
import {  PatientRegister } from './patient/Register/patient-register';
import { Patientlayout } from './patient/patientlayout/patientlayout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
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
