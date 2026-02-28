import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentDto } from '../Dtos/Department/DepartmentDto';

@Injectable({
  providedIn: 'root',
})
export class Departmentservice {
    baseUrl:string="http://localhost:5066/api/Department";

    constructor(private http:HttpClient){}

    // list all the departments
    GetAllDepartments():Observable<DepartmentDto[]>{
      return this.http.get<DepartmentDto[]>(this.baseUrl);
    }
}
