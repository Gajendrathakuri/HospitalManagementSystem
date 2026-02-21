

namespace HIMS.Extensions
{
    public static class CorsExtensions
    {
        public static IServiceCollection defaultcors(this IServiceCollection service)
        {
           
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", builder =>
                {
                    builder
                        .AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            return services;

        }
    }
}
