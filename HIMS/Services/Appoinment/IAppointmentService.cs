using HIMS.Models.Appointment;
using HIMS.Services.Dtos.AppointmentDtos;
using System.Collections.Generic;
using System.Runtime.Intrinsics.X86;
using System.Threading.Channels;

namespace HIMS.Services.Appoinment
{
    public interface IAppointmentService
    {
        //2 Appointment API*

        //* Book appointment
        //* Cancel appointment
        //* List appointments
        //  👉 Use* methods, loops, validations*

        Task<List<AppointResponseDtos>> ListAllAppointment();
        Task<bool> CancelAppointment(Guid appointid);
        Task<Appointment>  BookAppointment(CreateAppointmentDtos createAppointmentDtos);
    }
}
