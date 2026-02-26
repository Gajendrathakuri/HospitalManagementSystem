export interface DepartmentDto {
  id: number;
  departmentName: string;
  description?: string;
  buildingBlock?: string;
  doctors?: any[] | null;
  staffs?: any[] | null;
}