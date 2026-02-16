
using HIMS.Models.Admission_patient;
using HIMS.Models.Person;
using HIMS.Models.RegistrationFrontDesk;

namespace HIMS.Models.PatientModels
{
    public class Patient : Person.Person
    {
      
        public string Disease { get; set; }
        public string CitizenshipNo { get; set; }
        public List<string> Symptoms { get; set; }
        public ICollection<Admission>? Admission { get; set; }
        public ICollection<Registration>? Registration { get; set; }
    }
}
