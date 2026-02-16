using HIMS.Models.DoctorModel;
using HIMS.Models.StaffModel;


namespace HIMS.Models.Departments
{
    public class Department
    {
        public Guid Id { get; set; }
        public string? DepartmentName { get; set; }
        public string? Description { get; set; }
        public DepartmentTypes? Departmenttype { get; set; }
        public string? BuildingBlock { get; set; }
        public ICollection<Doctor>? Doctors { get; set; }
        public ICollection<StaffModel.Staff>?  Staffs { get; set; }
    }
}
