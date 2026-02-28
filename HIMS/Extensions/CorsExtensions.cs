

namespace HIMS.Extensions
{
    public static class CorsExtensions
    {
        public static IServiceCollection defaultcors(this IServiceCollection service)
        {
           
            service.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy=>
                {
                    policy
                        .WithOrigins("http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            return service;

        }
    }
}
