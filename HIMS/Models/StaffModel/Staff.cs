using HIMS.Models.Departments;
using HIMS.Models.Person;
using HIMS.Models.Staff;
using System.ComponentModel.DataAnnotations.Schema;

namespace HIMS.Models.StaffModel
{
    public class Staff:Person.Person
    {
        public  ProfileTypes Profile {get;set;}
       

        public Guid DepartmentId { get; set; }
       
        public Department? Department { get; set; }

       
        public string? AccountNumber { get; set; }
          [Column(TypeName = "decimal(18,2)")]
        public decimal Salary { get; set; }
        public DateTime JoinedDate { get; set; }
        public DateTime LeaveDate { get; set; }

    
    }
}
