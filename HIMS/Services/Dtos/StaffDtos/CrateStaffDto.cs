using HIMS.Models.Patient;
using HIMS.Models.Staff;
using System.Reflection.Metadata;

namespace HIMS.Services.Dtos
{
    public class CreateStaffDto
    {

        public string Name { get; set; }
        public string? Address { get; set; }
        public string? PhoneNo { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public GenderTypes Gender { get; set; }
        public ProfileTypes Profile { get; set; }
        public Guid DepartmentId { get; set; }
        public string? AccountNumber { get; set; }
        public decimal Salary { get; set; }
        public DateTime JoinedDate { get; set; }
    }
}