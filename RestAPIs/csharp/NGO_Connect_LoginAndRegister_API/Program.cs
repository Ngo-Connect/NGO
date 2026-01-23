using Microsoft.EntityFrameworkCore;
using NGO_Connect_LoginAndRegister_API.Data; // Imports your Context
using NGO_Connect_LoginAndRegister_API.Models;

var builder = WebApplication.CreateBuilder(args);

// 1. Add MySQL Database Connection
// This reads the connection string from appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<P01NgoConnectContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// 2. Add Controllers
builder.Services.AddControllers();

// 3. Add Swagger (For testing)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 4. Add CORS (Allow React App to talk to this API)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:5173") // Your React URL
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowReactApp"); // Apply CORS policy
app.UseAuthorization();
app.MapControllers();

app.Run();