

using HIMS.Services.Patient;
using HIMS.Services.PatientServices;

namespace HIMS.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddHimsServices(this IServiceCollection services)
        {
            services.AddScoped<IPatientService,PatientService>();
            return services;
        }
    }
}
