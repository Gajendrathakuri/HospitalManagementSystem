using HIMS.dbconfig;
using HIMS.Services.Appoinment;
using HIMS.Services.Dtos.AppointmentDtos;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace HIMS.Controllers.AppointmentCont
{
    [ApiController]
    [Route("api/[Controller]")]
    public class AppointmentController:ControllerBase
    {
        private readonly IAppointmentService _appointmentservice;
        public AppointmentController(IAppointmentService appointmentService)
        {
            _appointmentservice = appointmentService;
        }

        //GetAllAppointment
        public async Task<IActionResult> ListAllAppointment()
        {
            return Ok(await _appointmentservice.ListAllAppointment());
        }

            // createing appointment
        public async Task<IActionResult> CreateAppointment([FromBody] CreateAppointmentDtos appointmentcreate)
        {
            var result=await _appointmentservice.BookAppointment(appointmentcreate);
            return Ok(result);
        }

        // Canceling Appointment
        public async Task<IActionResult> CancelAppointment(Guid id)
        {
            if(id==Guid.Empty)
            {
                return BadRequest(new { message = $"{id} with this person not found" });
            }

            return Ok(await _appointmentservice.CancelAppointment(id));
        }


    }
}