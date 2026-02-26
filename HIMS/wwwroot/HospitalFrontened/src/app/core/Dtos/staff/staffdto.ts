import { GenderTypes } from '../AddPatientDtos';
import { DepartmentDto } from '../Department/DepartmentDto';

export interface StaffCreateDto {
  name: string;
  address?: string;
  city?: string;
  phoneNo?: string;
  dateOfBirth?: Date;
  age?: number;
  gender: GenderTypes;
  email?: string;
  profile: StaffProfiles;
  departmentId: string;
  accountNumber?: string;
  salary: number;
  joinedDate: Date;
  leaveDate?: Date;
}

export enum StaffProfiles {
  Doctor = 1,
  Nurse,
  HA,
  Pharmacist,
  Lab,
  Receptionist,
  SecurityGuards,
  CleaningWorker,
}

export interface StaffResponseDto {
  id: string;
  name: string;
  address?: string;
  city?: string;
  phoneNo?: string;
  dateofBirth?: string;
  age: number;
  gender: GenderTypes;
  email?: string;

  profile: StaffProfiles;

  departmentId: number;
  department?: DepartmentDto;

  accountNumber?: string;
  salary: number;

  joinedDate: string;
  leaveDate: string;
}
