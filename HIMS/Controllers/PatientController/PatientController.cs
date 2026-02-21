using HIMS.Services.Dtos.PatientDtos;
using HIMS.Services.PatientServices;
using Microsoft.AspNetCore.Mvc;

namespace HIMS.Controllers.PatientController
{
    [ApiController]
    [Route("api/[Controller]")]

    
    public class PatientController:ControllerBase
    {
        private readonly IPatientService _ipatientservice;
        public PatientController(IPatientService patientservice)
        {
            _ipatientservice = patientservice;
        }

        //testing 

        [HttpGet("test")]
        public string test()
        {
            return "server is working";
        }
        //get

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _ipatientservice.GetAllpatients());
        }

        // create
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] PatientDto patient)

        {
            var patients =await _ipatientservice.CreatePatient(patient);
            if(patients==null)
            {
                return null;
            }

            return Ok(patients);
        }

        // getbyid

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {

            var patient = await _ipatientservice.GetPatientById(id);
            if(patient==null)
            {
                return NotFound(new
                {
                    message = $"patient with this id {id} not Found"
                });
            }
            return Ok(patient);
        }


        //deletebyid
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return Ok(await _ipatientservice.DeletePatient(id));
        }
    }
}
