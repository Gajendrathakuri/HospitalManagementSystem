import { NgModule } from "@angular/core";
import { PatientDetail } from "./patient-detail/patient-detail";
import { PatientRegister } from "./Register/patient-register";
import { PatientUpdate } from "./patient-update/patient-update";
import { Patientlayout } from "./patientlayout/patientlayout";
import { TableComponent } from "../shared/Components/table-component/table-component";
import { RouterModule } from "@angular/router";
import { PatientRoutes } from "./patient.routes";

@NgModule(
    {
        imports:[
            PatientDetail,
            PatientRegister,
            PatientUpdate,
            Patientlayout,
            TableComponent,
            RouterModule.forChild(PatientRoutes)
        ],
        
    }
)


export class PatientModule {}



