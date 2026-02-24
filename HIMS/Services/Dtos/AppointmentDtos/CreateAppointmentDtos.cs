using HIMS.Models.Appointment;

namespace HIMS.Services.Dtos.AppointmentDtos
{
    public class CreateAppointmentDtos
    {
        public string Title { get; set; }
        public Guid PatientId {get;set;}
        public Guid StaffId { get; set; }
        public AppointmentStatus appointmentStatus { get; set; } = AppointmentStatus.Pending;
        public DateOnly AppointmentDate { get; set; } 
        public TimeOnly AppointmentTime { get; set; } 
        
    }

}
