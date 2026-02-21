import { Routes } from "@angular/router";
import { Patientlayout } from "./patientlayout/patientlayout";
import { ListAllpatient } from "./list-allpatient/list-allpatient";
import { Header } from "../layout/header/header";

export const PatientRoute:Routes=[
    {
        path:"",
        component:Patientlayout, 
    },
    {
        path:"about",
        component:Header
    }
]