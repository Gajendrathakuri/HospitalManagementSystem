using HIMS.Models;
using Microsoft.EntityFrameworkCore;

namespace HIMS.dbconfig
{
    public class Appdbcontext:DbContext
    {
        public Appdbcontext(DbContextOptions options) : base(options) { }


        public DbSet<Patient> patients { get; set; }
        public DbSet<Doctor> doctors { get; set; }

    }
}
