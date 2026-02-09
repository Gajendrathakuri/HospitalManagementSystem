using Microsoft.AspNetCore.Mvc;

namespace HIMS.Controllers.Patient
{
    [ApiController]
    [Route("api/[Controller]")]
    public class PatientController
    {
        public string GetAllPatients()
        {
            return "All patients ";
        }
        
    }
}
