import { Component, Input } from '@angular/core';
import { StaffProfiles, StaffResponseDto } from '../../core/Dtos/staff/staffdto';
import { DepartmentTypes } from '../../core/Dtos/Department/DepartmentDto';
import { GenderTypes } from '../../core/Dtos/AddPatientDtos';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-staff-detail',
  imports: [DatePipe],
  templateUrl: './staff-detail.html',
  styleUrl: './staff-detail.css',
})
export class StaffDetail {
 @Input() staff?: StaffResponseDto;

//  getGender
  getGenderName(): string {
    return GenderTypes[this.staff?.gender as number];
  }
  // getDepartments
  GetDept():string{
    return DepartmentTypes[this.staff?.departmentId as number];
  }
// getUserprofilel
GetStaffProfile():string{
  return StaffProfiles[this.staff?.profile as number];
}
}
