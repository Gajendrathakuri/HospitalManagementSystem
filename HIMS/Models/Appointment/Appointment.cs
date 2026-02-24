
using HIMS.Models.DoctorModel;
using HIMS.Models.StaffModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HIMS.Models.Appointment
{
    public class Appointment
    {
        [Key]
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public Guid PatientId { get; set; }
        [ForeignKey("PatientId")]
        public Models.PatientModels.Patient? Patient{ get; set; }
        public Guid StaffId { get; set; }

        [ForeignKey("StaffId")]
        public Models.StaffModel.Staff? staff { get; set; }
        public AppointmentStatus AppointmentStatus { get; set; } = AppointmentStatus.Pending;
        public DateOnly AppointmentDate { get; set; }
        public TimeOnly AppointmentTime { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime LastUpdate { get; set; } = DateTime.UtcNow;
    }
}
