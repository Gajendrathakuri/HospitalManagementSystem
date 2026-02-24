using HIMS.Models.Appointment;

namespace HIMS.Services.Dtos.AppointmentDtos
{
    public class AppointResponseDtos
    {
            public Guid Appointmentid { get; set; }
            public DateOnly AppointmentDate { get; set; }
            public TimeOnly AppointmentTime { get; set; }

            public string PatientName { get; set; }
            public string PatientContact { get; set; }
            public string PatientAddress { get; set; }
            public string PatientEmail { get; set; }
            public int PatientAge { get; set; }
            public  AppointmentStatus Appointmentstatus { get; set; }

        

    }
}
