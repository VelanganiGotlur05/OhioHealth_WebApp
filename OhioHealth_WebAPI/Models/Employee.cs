using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OhioHealth_WebAPI.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(60)")]
        public string CityName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public int? YearOfJoining { get; set; }
    }
}
