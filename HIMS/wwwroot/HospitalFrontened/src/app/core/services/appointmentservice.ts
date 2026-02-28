import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentResponseDto, CreateAppointmentDto } from '../Dtos/Appointmentdots/AppointmentDtos';

@Injectable({
  providedIn: 'root',
})
export class Appointmentservice {
  constructor(private http:HttpClient){}
  base_url:string="http://localhost:5066/api/Appointment";
  // get all appointments
  GetAllAppointments():Observable<AppointmentResponseDto[]>{
    return this.http.get<AppointmentResponseDto[]>(this.base_url);
  } 
  // book new appointment
  CreateNewAppointment(newAppointment:CreateAppointmentDto):Observable<AppointmentResponseDto[]>{
    return this.http.post<AppointmentResponseDto[]>(this.base_url,newAppointment);
  }
}
