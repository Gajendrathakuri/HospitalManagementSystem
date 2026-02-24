using HIMS.dbconfig;
using HIMS.Models.Departments;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HIMS.Services.DepartmentServices
{
    public class DepartmentService:IDepartmentService
    {
        private readonly Appdbcontext _dbcontext;
        public  DepartmentService(Appdbcontext dbcontext)
        {
            _dbcontext =  dbcontext;
        }

        public async Task<List<Department>> GetAllDepartments()
        {
            var AllDepartment = await _dbcontext.Department.ToListAsync();
            return AllDepartment;
        }
    }
}
