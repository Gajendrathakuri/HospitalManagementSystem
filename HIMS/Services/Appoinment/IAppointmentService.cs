using HIMS.Models.Appointment;
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

        Task<IEnumerable<Appointment>> ListAllAppointment();
        Task<Appointment> CancelAppointment();
        Task<Appointment> BookAppointment();
    }
}
