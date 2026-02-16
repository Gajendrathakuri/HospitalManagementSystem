using HIMS.dbconfig;
using HIMS.Models.PatientModels;
using HIMS.Services.Dtos.PatientDtos;
using HIMS.Services.PatientServices;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace HIMS.Services.Patient
{
    public class PatientService:IPatientService

    {
        private readonly Appdbcontext _dbcontext;
            public PatientService(Appdbcontext dbcontext)
        {
            _dbcontext = dbcontext;
        }
//list all patients
        public async Task<IEnumerable<Models.PatientModels.Patient>> GetAllpatients()
        {
            return await _dbcontext.patients.ToListAsync();
        }
//add patient
        public async Task<Models.PatientModels.Patient> CreatePatient(PatientDto patient)
        {
            var newpatient = new Models.PatientModels.Patient
            {
                Id = Guid.NewGuid(),  
                Name = patient.Name,
                Address = patient.Address,
                City = patient.City,
                Disease = patient.Disease,
                 CitizenshipNo=patient.CitizenshipNo,
                 PhoneNo=patient.PhoneNo,
                 Symptoms=patient.Symptoms.ToList(),
                 Age=patient.Age
            };
            await _dbcontext.patients.AddAsync(newpatient);
            await _dbcontext.SaveChangesAsync();
            return newpatient;
        }

//getpatientbyid

        public async Task<Models.PatientModels.Patient> GetPatientById(Guid id)
        {
            var patient = await _dbcontext.patients.FindAsync(id);
            return patient;
        }

// delete
        public async Task<Models.PatientModels.Patient> DeletePatient(Guid id)
        {
            var patient = await _dbcontext.patients.FindAsync(id);
            if(patient==null)
            {
                return null;
            }
            _dbcontext.patients.Remove(patient);
            await _dbcontext.SaveChangesAsync();
            return patient;

            
        }
    }
}
