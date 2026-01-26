using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NGO_Connect_LoginAndRegister_API.Data;
using NGO_Connect_LoginAndRegister_API.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace NGO_Connect_LoginAndRegister_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly P01NgoConnectContext _context;
        private readonly IConfiguration _configuration; // Needed to read 'Jwt' settings

        public AuthController(P01NgoConnectContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        // ==========================================
        // LOGIN: Generate JWT Token
        // ==========================================
        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginDto request)
        {
            // 1. Find User by Email & Include their Role
            var user = await _context.Users
                .Include(u => u.Role)
                .FirstOrDefaultAsync(u => u.Email == request.Email);

            // 2. Validate Password
            if (user == null || user.Password != request.Password)
            {
                return BadRequest(new { message = "Invalid Email or Password" });
            }

            // 3. Determine Role Name
            string roleName = user.Role?.RoleName ?? "Beneficiary";

            // 4. GENERATE JWT TOKEN
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Role, roleName),
                    new Claim("UserId", user.UserId.ToString()) // Useful for frontend calls later
                }),
                Expires = DateTime.UtcNow.AddHours(2), // Token valid for 2 hours
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"],
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // 5. Return Token & Data
            return Ok(new
            {
                message = "Login Successful",
                token = tokenString, // <--- FRONTEND NEEDS THIS
                userId = user.UserId,
                username = user.Username,
                role = roleName
            });
        }

        // ==========================================
        // FETCH STATES
        // ==========================================
        [HttpGet("states")]
        public async Task<ActionResult<IEnumerable<StateDto>>> GetStates()
        {
            var states = await _context.States
                .Select(s => new StateDto { StateId = s.StateId, StateName = s.StateName })
                .ToListAsync();
            return Ok(states);
        }

        // ==========================================
        // FETCH CITIES
        // ==========================================
        [HttpGet("cities/{stateId}")]
        public async Task<ActionResult<IEnumerable<CityDto>>> GetCities(int stateId)
        {
            var cities = await _context.Cities
                .Where(c => c.StateId == stateId)
                .Select(c => new CityDto { CityId = c.CityId, CityName = c.CityName })
                .ToListAsync();
            return Ok(cities);
        }

        // ==========================================
        // REGISTER USER
        // ==========================================
        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto request)
        {
            var role = await _context.Roles.FirstOrDefaultAsync(r => r.RoleName == request.RoleName);
            if (role == null) return BadRequest(new { message = "Invalid Role selected." });

            if (await _context.Users.AnyAsync(u => u.Email == request.Email))
            {
                return BadRequest(new { message = "Email is already registered." });
            }

            var random = new Random();
            int randomRegNo = random.Next(100000000, 999999999);

            var newUser = new User
            {
                Username = request.Username,
                Email = request.Email,
                PhoneNo = request.PhoneNo,
                PanNo = request.PanNo,
                Password = request.Password,
                Address = request.Address,
                RoleId = role.RoleId,
                StateId = request.StateId,
                CityId = request.CityId,
                RegNo = randomRegNo,
                AccountStatus = "Active"
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Registration successful!" });
        }

        // ==========================================
        // FORGOT PASSWORD STEP 1: VERIFY EMAIL
        // ==========================================
        [HttpPost("verify-email")]
        public async Task<ActionResult> VerifyEmail(VerifyEmailDto request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null) return NotFound(new { message = "User doesn't exist." });
            return Ok(new { message = "User verified." });
        }

        // ==========================================
        // FORGOT PASSWORD STEP 2: RESET
        // ==========================================
        [HttpPost("reset-password")]
        public async Task<ActionResult> ResetPassword(ResetPasswordDto request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null) return NotFound(new { message = "User not found." });

            user.Password = request.NewPassword;
            _context.Users.Update(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Password updated successfully." });
        }
    }

    // --- DTOs ---
    public class LoginDto { public string Email { get; set; } public string Password { get; set; } }
    public class RegisterDto { public string Username { get; set; } public string Email { get; set; } public string PhoneNo { get; set; } public string PanNo { get; set; } public string Password { get; set; } public string Address { get; set; } public int StateId { get; set; } public int CityId { get; set; } public string RoleName { get; set; } }
    public class StateDto { public int StateId { get; set; } public string StateName { get; set; } }
    public class CityDto { public int CityId { get; set; } public string CityName { get; set; } }
    public class VerifyEmailDto { public string Email { get; set; } }
    public class ResetPasswordDto { public string Email { get; set; } public string NewPassword { get; set; } }
}