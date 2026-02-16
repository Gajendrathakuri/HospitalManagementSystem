using HIMS.Models.PatientModels;
using HIMS.Models.DoctorModel;
using HIMS.Models.Registration_front_desk;
using System.ComponentModel.DataAnnotations.Schema;

namespace HIMS.Models.RegistrationFrontDesk
{
    public class Registration
    {
        public Guid Id { get; set; }

       
        public Guid PatientId { get; set; }
        [ForeignKey("PatientId")]
        public PatientModels.Patient?  patient { get; set; }

        
        public Guid DoctorId { get; set; }
        [ForeignKey("DoctorId")]
        public Doctor? Doctor { get; set; }

        public RegistrationStatus? RegistrationStatus { get; set; }
        public VisitTypes VisitType { get; set; }
        
        public DateTime AppointmentDate { get; set; }
    }
}
