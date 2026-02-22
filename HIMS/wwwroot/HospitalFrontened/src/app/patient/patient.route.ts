import { Routes } from "@angular/router";
import { Patientlayout } from "./patientlayout/patientlayout";
import { ListAllpatient } from "./list-allpatient/list-allpatient";
import { Header } from "../layout/header/header";
import { PatientDetail } from "./patient-detail/patient-detail";

export const PatientRoute:Routes=[
    {
        path:"",
        component:Patientlayout, 
    },
    {
        path:"detail/:id",
        component:PatientDetail,
        
    }
]