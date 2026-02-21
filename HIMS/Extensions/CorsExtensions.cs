

namespace HIMS.Extensions
{
    public static class CorsExtensions
    {
        public static IServiceCollection defaultcors(this IServiceCollection service)
        {
            service.AddCors((option) =>
            {
                option.AddPolicy("AllowAll", policy =>
                {
                    policy.AllowAnyHeader()
                    .AllowAnyOrigin()
                    .AllowAnyMethod();
                });
            });
            return service;
        }
    }
}
