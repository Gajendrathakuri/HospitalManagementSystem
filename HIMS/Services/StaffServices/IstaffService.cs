using HIMS.Models.StaffModel;
using HIMS.Services.Dtos;

namespace HIMS.Services.StaffServices
{
    public interface IstaffService
    {
        Task<IEnumerable<Staff>> ListAllStaff();
        Task<Staff> CreateNewStaff(CreateStaffDto staffcreate);
        Task<List<Staff>> GetDoctors();

    }
}
