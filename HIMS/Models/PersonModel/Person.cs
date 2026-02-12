using HIMS.Models.Patient;

namespace HIMS.Models.Person
{
    public abstract class Person
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string PhoneNo { get; set; }
        public int Age { get; set; }
        public GenderTypes Gender { get; set; }
        public string Email { get; set; }
    }
}
 