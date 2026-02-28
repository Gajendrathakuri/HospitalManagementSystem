import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffCreateDto, StaffResponseDto } from '../Dtos/staff/staffdto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Staffservices {
  constructor(private http:HttpClient){

  }
    staffbaseurl:string="http://localhost:5066/api/Staff";
  GetAllStaffs():Observable<StaffResponseDto[]>{
    return this.http.get<StaffResponseDto[]>(this.staffbaseurl);
  }
  // crate new staff

  CreateNewStaff(Staff:StaffCreateDto){
    return this.http.post(this.staffbaseurl+"/createstaff",Staff);
  }

  //Get all doctors
  GetAllDoctors():Observable<StaffResponseDto[]>{
    return this.http.get<StaffResponseDto[]>(this.staffbaseurl+"/Doctors")
  }
}
