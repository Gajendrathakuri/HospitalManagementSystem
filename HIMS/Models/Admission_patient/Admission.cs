using HIMS.Models.Departments;
using HIMS.Models.PatientModels;
using HIMS.Models.RegistrationFrontDesk;
using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography.Pkcs;

namespace HIMS.Models.Admission_patient
{
    public class Admission
    {
        [Key]
        public Guid Id { get; set; }
        public Guid PatientId { get; set; }

        public Models.PatientModels.Patient? Patient { get; set; }

        public Guid DepartmentId { get; set; }
        public Department? Department { get; set; }

        public WardTypes WardType { get; set; }
           public int BedNo { get; set; }

        public DateTime AdmissionDate { get; set; }

        public DateTime DischargedDate { get; set; }


    }
}
