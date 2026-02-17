using HIMS.Models.PatientModels;
using HIMS.Services.Dtos.PatientDtos;

namespace HIMS.Services.PatientServices
    {
    public interface IPatientService
    {
        Task<IEnumerable<Models.PatientModels.Patient>> GetAllpatients();
        Task<Models.PatientModels.Patient> GetPatientById(Guid id);
        Task<Models.PatientModels.Patient> CreatePatient(PatientDto patients);
        Task<Models.PatientModels.Patient> DeletePatient(Guid id);
        Task<Models.PatientModels.Patient> UpdatePatient(Guid id, PatientDto patient);

    }

}
