import { Type } from "@angular/core";

export interface DepartmentDto {
  id: number;
  departmentName: string;
  description?: string;
  buildingBlock?: string;
  doctors?: any[] | null;
  staffs?: any[] | null;
}



export enum DepartmentTypes{
  Pharmacy=1,
  Lab=2,
  Opd=3,
  ICU=4
}