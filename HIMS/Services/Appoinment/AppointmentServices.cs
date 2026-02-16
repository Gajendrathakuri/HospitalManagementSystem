using HIMS.dbconfig;
using HIMS.Models.Appointment;
using HIMS.Services.Dtos.AppointmentDtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace HIMS.Services.Appoinment
{
    public class AppointmentServices : IAppointmentService
    {
        private readonly Appdbcontext _appdbcontext;
        public AppointmentServices(Appdbcontext appdbcontext)
        {
            _appdbcontext = appdbcontext;
        }
        public async Task<List<AppointResponseDtos>> ListAllAppointment()
        {
        
            var appointments = await _appdbcontext.appointment
                .Select(a => new AppointResponseDtos
                {
                    AppointmentDate = a.AppointmentDate,
                    AppointmentTime = a.AppointmentTime,
                    PatientName = a.Patient.Name,
                    PatientContact = a.Patient.PhoneNo,
                    PatientAddress = a.Patient.Address,
                    PatientEmail = a.Patient.Email,
                    PatientAge = a.Patient.Age
                })
                .ToListAsync();

            return appointments;
        }

       
        public async Task<bool> CancelAppointment(Guid appointId)
        {
            var appointment = await _appdbcontext.appointment.FirstOrDefaultAsync((a) => a.Id == appointId);
            if (appointment == null ||  appointment.AppointmentStatus==AppointmentStatus.Canceled)
            {
                return false;
            }
            appointment.AppointmentStatus = AppointmentStatus.Canceled;
            await _appdbcontext.SaveChangesAsync();
            return true;        
        }

        public async Task<Appointment> BookAppointment(CreateAppointmentDtos createAppointment)
        {
            var newAppointment = new Appointment
            {
                Title = createAppointment.Title,
                AppointmentDate = createAppointment.AppointmentDate,
                AppointmentTime = createAppointment.AppointmentTime,
                PatientId = createAppointment.PatientId,
                DoctorId = createAppointment.DoctorId,
            };
            _appdbcontext.appointment.Add(newAppointment);
            await  _appdbcontext.SaveChangesAsync();
            return newAppointment; 
        }
    }
}
