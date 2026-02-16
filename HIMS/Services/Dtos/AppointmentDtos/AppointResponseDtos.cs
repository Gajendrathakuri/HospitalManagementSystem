namespace HIMS.Services.Dtos.AppointmentDtos
{
    public class AppointResponseDtos
    {
        
            public DateTime AppointmentDate { get; set; }
            public TimeOnly AppointmentTime { get; set; }

            public string PatientName { get; set; }
            public string PatientContact { get; set; }
            public string PatientAddress { get; set; }
            public string PatientEmail { get; set; }
            public int PatientAge { get; set; }
        

    }
}
