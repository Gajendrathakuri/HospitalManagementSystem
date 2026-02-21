// patient.dto.ts

export type GenderTypes = 'Male' | 'Female' | 'Others';

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
