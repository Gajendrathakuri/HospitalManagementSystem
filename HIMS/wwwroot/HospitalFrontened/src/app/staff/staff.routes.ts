import { Route, Routes } from "@angular/router";
import { Staff } from "./staff";
import { StaffDetail } from "./staff-detail/staff-detail";

export const staffRoutes:Routes=[
    {path:"",
    component:Staff
    },
    {
        path:"viewstaff",
        component:StaffDetail
    }
]

