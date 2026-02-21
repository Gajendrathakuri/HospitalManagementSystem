<<<<<<< HEAD
﻿using Microsoft.Extensions.DependencyInjection;
=======
﻿
>>>>>>> feature-backend/controller

namespace HIMS.Extensions
{
    public static class CorsExtensions
    {
<<<<<<< HEAD
        public static IServiceCollection AddCorsPolicy(this IServiceCollection services)
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
=======
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
>>>>>>> feature-backend/controller
        }
    }
}
