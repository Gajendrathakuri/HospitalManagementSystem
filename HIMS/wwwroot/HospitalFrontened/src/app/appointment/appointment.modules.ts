import { NgModule } from "@angular/core";
import { Appointment } from "./appointment";
import { NewAppointment } from "./new-appointment/new-appointment";
import { TableComponent } from "../shared/Components/table-component/table-component";
import { RouterModule } from "@angular/router";
import { AppointRoute } from "./AppointRoute.routes";



@NgModule({
    imports:[
        Appointment,
        NewAppointment,
        TableComponent,
        RouterModule.forChild(AppointRoute)
    ]
})


export class AppointmentModule{}

