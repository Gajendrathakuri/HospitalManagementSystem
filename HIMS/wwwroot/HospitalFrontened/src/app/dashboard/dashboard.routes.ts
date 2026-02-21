import { Routes } from "@angular/router"
import { Dashboard } from "./dashboard";
import { Header } from "../layout/header/header";

export const DashboardRoutes: Routes = [
        {
            path:"dashboard",
            component:Dashboard,
            children:[
                {path:"",redirectTo:'home',pathMatch:"full"},
              
            ]
        }

];
