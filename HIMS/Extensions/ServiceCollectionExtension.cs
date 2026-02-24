

using HIMS.Services.Appoinment;
using HIMS.Services.DepartmentServices;
using HIMS.Services.Patient;
using HIMS.Services.PatientServices;
using HIMS.Services.StaffServices;

namespace HIMS.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddHimsServices(this IServiceCollection services)
        {
            services.AddScoped<IPatientService,PatientService>();
            services.AddScoped<IstaffService, StaffService>();
            services.AddScoped<IDepartmentService, DepartmentService>();
            services.AddScoped<IAppointmentService, AppointmentServices>();
            return services;
        }
    }
}
