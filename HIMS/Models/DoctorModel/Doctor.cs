using HIMS.Models.Departments;
using HIMS.Models.Patient;
using HIMS.Models.PatientModels;
using HIMS.Models.Person;
using System.ComponentModel.DataAnnotations.Schema;

namespace HIMS.Models.DoctorModel
{
    public class Doctor:Models.Person.Person
    {
       
        public string Speacialization { get; set; }
        public string Degree { get; set; }
        public int DepartmentId { get; set; }

        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }

    }

}
