using HIMS.Datas;
using HIMS.Models.Admission_patient;
using HIMS.Models.Appointment;
using HIMS.Models.Billing;
using HIMS.Models.Departments;
using HIMS.Models.DoctorModel;
using HIMS.Models.Pharmacy;
using HIMS.Models.RegistrationFrontDesk;
using HIMS.Models.StaffModel;
using Microsoft.EntityFrameworkCore;

namespace HIMS.dbconfig
{
    public class Appdbcontext:DbContext
    {
        public Appdbcontext(DbContextOptions options) : base(options) { }


        public DbSet<Models.PatientModels.Patient> patients { get; set; }
        public DbSet<Doctor> doctors { get; set; }
        public DbSet<Registration> Registration { get; set; }
        public DbSet<Admission>  Admission { get; set; }
        public DbSet<Billing> Billing { get; set; }
        public DbSet<Department> Department { get; set; }
        public DbSet<Medicines> Medicines { get; set; }
        public DbSet<Appointment> appointment { get; set; }
        public DbSet<Staff> staff { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            DepartmentDataseed.Seed(modelBuilder);
        }

    };

    
}
