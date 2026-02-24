import { GenderTypes } from "../Dtos/AddPatientDtos";


//GetpatientResponse 
export interface IpatientReponse{
  id?: string;          
  name: string;
  email: string;
  address?: string;
  city?: string;
  dateOfBirth?: string; 
  citizenshipNo?: string;
  phoneNo?: string;
  symptoms?: string[];
  age?: number;
  gender?: string;
  disease?: string;
}


export enum ReligionTypes {
  Hindu = 'Hindu',
  Muslim = 'Muslim',
  Christian = 'Christian',
  Sikh = 'Sikh',
  Buddhist = 'Buddhist',
  Jain = 'Jain',
  Jewish = 'Jewish',
  Other = 'Other'
}


export interface IPatient {
  dateOfBirth?: string;         
  name: string;                
  address: string;               
  email?: string;               
  gender: GenderTypes;          
  age: number;                  
  city?: string;              
  disease?: string;              
  religion?: string;             
  phoneNo?: string;             
  citizenshipNo?: string;      
  symptoms?: string[];           
}
