using HIMS.Models.Departments;
using Microsoft.EntityFrameworkCore;

namespace HIMS.Datas
{
    public  static class DepartmentDataseed
    {
        public static void Seed(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>().HasData(
                    new Department
                    {
                        Id = 1,
                        DepartmentName = "Pharmacy",
                        BuildingBlock = "Block A ",
                        Description = "Bills and Medicines"
                    },

                    new Department
                    {
                        Id = 2,
                        DepartmentName = "Lab",
                        BuildingBlock = "Block B",
                        Description = "Tests and Lab Reports"
                    },
                    new Department
                    {
                        Id = 3,
                        DepartmentName = "Opd",
                        BuildingBlock = "Block C",
                        Description = "Visit For Doctors and Patient Checkup"
                    },
                   new Department
                   {
                       Id = 4,
                       DepartmentName = "ICU",
                       BuildingBlock = "Block D",
                       Description = "Serious patient"
                   }
                );
        }
    }
}
