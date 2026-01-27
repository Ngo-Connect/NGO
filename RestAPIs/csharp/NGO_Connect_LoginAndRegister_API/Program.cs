using Microsoft.AspNetCore.Authentication.JwtBearer; // NEW
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens; // NEW
using NGO_Connect_LoginAndRegister_API.Data;
using NGO_Connect_LoginAndRegister_API.Models;
using System.Text; // NEW

var builder = WebApplication.CreateBuilder(args);

// ==========================================
// 1. DATABASE CONNECTION (MySQL)
// ==========================================
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<P01NgoConnectContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// ==========================================
// 2. JWT AUTHENTICATION SETUP (NEW)
// ==========================================
// This tells the app how to validate the token sent by React
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});

// ==========================================
// 3. STANDARD SERVICES
// ==========================================
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 4. CORS (Allow React App)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:5173") // Your React URL
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

// ==========================================
// 4. PIPELINE CONFIGURATION
// ==========================================
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection(); // Optional: Good for security

app.UseCors("AllowReactApp");

// IMPORTANT: Order matters here!
app.UseAuthentication(); // <--- NEW: Checks "Who are you?" (Validates Token)
app.UseAuthorization();  // Checks "What can you do?" (Roles)

app.MapControllers();

app.Run();