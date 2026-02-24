using HIMS.Models.Departments;

namespace HIMS.Services.DepartmentServices
{
    public interface IDepartmentService
    {
        Task<List<Department>> GetAllDepartments();
    }
}
