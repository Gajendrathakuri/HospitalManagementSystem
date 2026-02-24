
using HIMS.Models.StaffModel;
using HIMS.Services.Dtos;
using HIMS.Services.StaffServices;
using Microsoft.AspNetCore.Mvc;

namespace HIMS.Controllers.Staffcontro
{
    [ApiController]
    [Route("api/[Controller]")]
    public class StaffController : ControllerBase
    {
        private readonly IstaffService _staffservice;
        public StaffController(IstaffService staffservice)
        {
            _staffservice = staffservice;
        }
        //list all staffs
        [HttpGet]
        public async Task<IActionResult> GetAllStaff()
        {
            return Ok(await _staffservice.ListAllStaff());
        }

        //Create new Staff
        [HttpPost("createstaff")]
        public async Task<IActionResult> CreatenewStaff(CreateStaffDto staffdto)
        {
            return Ok(await _staffservice.CreateNewStaff(staffdto));
        }

        [HttpGet("Doctors")]
        
        public async Task<IActionResult> GetAllDoctors()
        {
            return Ok(await _staffservice.GetDoctors());
        }

    }
}
