using HIMS.dbconfig;
using HIMS.Extensions;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
//services
builder.Services.AddHimsServices();
//cors
builder.Services.defaultcors();
//swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("dbconnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

// Register the ApplicationDbContext service
builder.Services.AddDbContext<Appdbcontext>(options =>
    options.UseSqlServer(connectionString));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{//swagger setup
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();

app.Run();
