using HIMS.dbconfig;
using HIMS.Models.StaffModel;
using HIMS.Services.Dtos;
using Microsoft.EntityFrameworkCore;

namespace HIMS.Services.StaffServices
{
    public class StaffService:IstaffService
    {
        private readonly Appdbcontext _dbcontext;


        public StaffService(Appdbcontext dbcontext)
        {
            _dbcontext = dbcontext;
        }
       //listall staffs
        public async Task<IEnumerable<Staff>>  ListAllStaff()
        {
            return (await _dbcontext.staff.ToListAsync());
        }

        //create new staff
        public async Task<Staff> CreateNewStaff(CreateStaffDto staffdto)
        {
            var newStafff = new Staff
            {
                Name = staffdto.Name,
                Address = staffdto.Address,
                DateofBirth = staffdto.DateOfBirth,
                DepartmentId = staffdto.DepartmentId,
                JoinedDate = staffdto.JoinedDate,
                Profile = staffdto.Profile
            };

            await _dbcontext.staff.AddAsync(newStafff);
            await _dbcontext.SaveChangesAsync();
            return newStafff;
        }
    }
}
