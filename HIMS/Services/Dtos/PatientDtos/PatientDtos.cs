using HIMS.Models.Patient;

namespace HIMS.Services.Dtos.PatientDtos
{
    public class PatientDto
    {
        public DateTime? DateofBirth { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string? Email { get; set; }
        public GenderTypes Gender { get; set; }
        public int Age { get; set; }
        public string? City { get; set; }
        public string? Disease { get; set; }
        public string? Religion { get; set; }
        public string? PhoneNo { get; set; }
        public string? CitizenshipNo { get; set; }
        public List<string>? Symptoms { get; set; }

    }
}
