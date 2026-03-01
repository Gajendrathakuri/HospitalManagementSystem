import { CommonModule } from "@angular/common";
import { Staff } from "./staff";
import { StaffDetail } from "./staff-detail/staff-detail";
import { TableComponent } from "../shared/Components/table-component/table-component";
import { StaffFormComponent } from "./staff-form-component/staff-form-component";
import { RouterModule } from "@angular/router";
import { staffRoutes } from "./staff.routes";
import { NgModule } from "@angular/core";


@NgModule(
    {
        imports:[
            CommonModule,
            Staff,
            StaffDetail,
            TableComponent,
            StaffFormComponent,
            RouterModule.forChild(staffRoutes),
        ]
    }
)

export class StaffModule{}

