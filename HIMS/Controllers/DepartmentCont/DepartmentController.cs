using HIMS.Services.DepartmentServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace HIMS.Controllers.DepartmentCont
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;
        public DepartmentController( IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }
        //get all department
      [HttpGet]
    public async Task<IActionResult> ListAllDepartment()
        {
            return Ok(await _departmentService.GetAllDepartments());
        }


    }
}
