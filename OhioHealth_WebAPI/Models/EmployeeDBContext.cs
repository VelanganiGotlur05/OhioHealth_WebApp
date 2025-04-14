using Microsoft.EntityFrameworkCore;

namespace OhioHealth_WebAPI.Models
{
    public class EmployeeDBContext:DbContext
    {
        public EmployeeDBContext(DbContextOptions<EmployeeDBContext> options):base(options)
        {
            
        }
        
        public DbSet<Employee> Employees { get; set; }


    }
}
