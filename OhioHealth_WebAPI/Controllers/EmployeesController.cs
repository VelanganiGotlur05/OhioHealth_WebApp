using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OhioHealth_WebAPI.Models;

namespace OhioHealth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeDBContext _context;

        public EmployeesController(EmployeeDBContext context)
        {
            _context = context;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

        [HttpGet("retrieveEmployee")]
        public async Task<ActionResult<Employee>> GetLastEmployee()
        {
            var lastEmployee = await _context.Employees
                                              .OrderByDescending(e => e.Id)  // or use CreatedAt, etc.
                                              .FirstOrDefaultAsync();

            if (lastEmployee == null)
            {
                return NotFound();  // If no employees are found
            }

            return Ok(lastEmployee);
        }


        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
            return Created("", employee);

        }


        private bool EmployeeExists(int id)
        {
            return _context.Employees.Any(e => e.Id == id);
        }
    }
}
