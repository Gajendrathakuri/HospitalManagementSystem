// patient.dto.ts

export enum GenderTypes{
  Male=0,
  Female=1,
  Other=2
}

export interface PatientDto {
  dateOfBirth?: Date;
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
