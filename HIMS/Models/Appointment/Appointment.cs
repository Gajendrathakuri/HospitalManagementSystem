using HIMS.Models.DoctorModel;
using HIMS.Models.PatientModels;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations.Schema;

namespace HIMS.Models.Appointment
{
    public class Appointment
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public Guid PatientId { get; set; }
        [ForeignKey("PatientId")]
        public Models.PatientModels.Patient Patient{ get; set; }
        public Guid DoctorId { get; set; }
        [ForeignKey("DoctorId")]
        public Doctor Doctor { get; set; }
        public AppointmentStatus AppointmentStatus { get; set; }
        public DateTime AppointmentDate { get; set; }
        public TimeOnly AppointmentTime { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime LastUpdate { get; set; } = DateTime.UtcNow;
    }
}
