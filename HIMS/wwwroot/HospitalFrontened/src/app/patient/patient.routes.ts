import { Routes } from "@angular/router";
import { routes } from "../app.routes";
import { Patientlayout } from "./patientlayout/patientlayout";

export const PatientRoutes:Routes=[
    {
        path:"",
        component:Patientlayout
    }
]