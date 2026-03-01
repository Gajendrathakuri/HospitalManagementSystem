import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      {
        path: 'patient',
        loadChildren: () => import('./patient/patient.modules').then((e) => e.PatientModule),
      },
      {
        path: 'appointment',
        loadChildren: () => import('./appointment/appointment.modules').then((e) => e.AppointmentModule),
      },
      {
        path: 'staff',
        loadChildren: () => import('./staff/staff.modules').then((m) => m.StaffModule),
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
