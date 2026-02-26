import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpatientReponse ,IPatient} from '../types/patient';
import { PatientDto } from '../Dtos/AddPatientDtos';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
 constructor(private http:HttpClient){}
  base_url:string="http://localhost:5066/api/";
 //getallPatients
   ListAllPatients():Observable<IpatientReponse[]>{
    return this.http.get<IpatientReponse[]>(this.base_url+"Patient")
   }
 //createpatient
 AddPatients(patient:PatientDto ):Observable<IpatientReponse>{
  return this.http.post<IpatientReponse>(this.base_url,patient);
 }
 //deletepatient
Deletepatient(id:any):Observable<any>{
  return this.http.delete<any>(this.base_url+"patient/"+id);
}
 //updatepatients
Upatepatient(id:string | number ,patient:IPatient):Observable<IpatientReponse>{
  return this.http.put<IpatientReponse>(this.base_url+id,patient);
}

}
