using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using OhioHealth_WebAPI.Models;
using OhioHealth_WebAPI.Middleware;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// ✅ Add Swagger service
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ✅ Add EF DbContext
builder.Services.AddDbContext<EmployeeDBContext>(options =>
    options.UseSqlServer(configuration.GetConnectionString("DevConnection")));

var app = builder.Build();

// ✅ Enable Swagger middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(); // optional: you can add custom settings here
}

app.UseCors("AllowLocalhost3000");
app.UseMiddleware<ApiKeyMiddleware>();
app.UseAuthorization();

app.MapControllers();

app.Run();
