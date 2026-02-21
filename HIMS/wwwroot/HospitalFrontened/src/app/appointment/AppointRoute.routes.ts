import { Routes } from "@angular/router";
import { NewAppointment } from "./new-appointment/new-appointment";
import { Appointment } from "./appointment";

export const AppointRoute:Routes=[
    {
        path:"",
        component:Appointment
    },
    {
        path:"bookappointment/:patientId",
        component:NewAppointment
    }
]