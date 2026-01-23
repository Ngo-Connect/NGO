using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NGO_Connect_LoginAndRegister_API.Data;
using NGO_Connect_LoginAndRegister_API.Models;

namespace NGO_Connect_LoginAndRegister_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly P01NgoConnectContext _context;

        public AuthController(P01NgoConnectContext context)
        {
            _context = context;
        }

        // POST: api/Auth/login
        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginDto request)
        {
            // 1. Find User by Email & Include their Role
            var user = await _context.Users
                .Include(u => u.Role) // Joins the Role table so we can see if they are Admin/NGO/etc.
                .FirstOrDefaultAsync(u => u.Email == request.Email);

            // 2. Check Credentials (Plain Text Check)
            if (user == null || user.Password != request.Password)
            {
                return BadRequest(new { message = "Invalid Email or Password" });
            }

            // 3. Get Role Name safely
            string roleName = user.Role?.RoleName ?? "Beneficiary";

            // 4. Return the data needed for React to redirect
            return Ok(new
            {
                message = "Login Successful",
                userId = user.UserId,
                username = user.Username,
                role = roleName // React will switch(role) based on this
            });
        }

        // ==========================================
        // 1. FETCH STATES (For Dropdown)
        // ==========================================
        [HttpGet("states")]
        public async Task<ActionResult<IEnumerable<StateDto>>> GetStates()
        {
            var states = await _context.States
                .Select(s => new StateDto
                {
                    StateId = s.StateId,
                    StateName = s.StateName
                })
                .ToListAsync();

            return Ok(states);
        }

        // ==========================================
        // 2. FETCH CITIES BY STATE (For Dropdown)
        // ==========================================
        [HttpGet("cities/{stateId}")]
        public async Task<ActionResult<IEnumerable<CityDto>>> GetCities(int stateId)
        {
            var cities = await _context.Cities
                .Where(c => c.StateId == stateId) // Filter by FK
                .Select(c => new CityDto
                {
                    CityId = c.CityId,
                    CityName = c.CityName
                })
                .ToListAsync();

            return Ok(cities);
        }

        // ==========================================
        // 3. REGISTER USER (Main Logic)
        // ==========================================
        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto request)
        {
            // A. Validate Role Exists
            var role = await _context.Roles
                .FirstOrDefaultAsync(r => r.RoleName == request.RoleName);

            if (role == null)
            {
                return BadRequest(new { message = "Invalid Role selected." });
            }

            // B. Check if Email already exists
            if (await _context.Users.AnyAsync(u => u.Email == request.Email))
            {
                return BadRequest(new { message = "Email is already registered." });
            }

            // C. Generate Random 9-Digit RegNo (Matches your INT column)
            // Note: INT max value is ~2 billion. 9 digits is safe.
            var random = new Random();
            int randomRegNo = random.Next(100000000, 999999999);

            // D. Create User Object
            var newUser = new User
            {
                Username = request.Username,
                Email = request.Email,
                PhoneNo = request.PhoneNo,
                PanNo = request.PanNo,
                Password = request.Password, // Ideally hash this!
                Address = request.Address,

                // Foreign Keys
                RoleId = role.RoleId,
                StateId = request.StateId,
                CityId = request.CityId,

                // Generated Fields
                RegNo = randomRegNo,
                AccountStatus = "Active" // Default status
            };

            // E. Save to Database
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Registration successful!" });
        }
    }

    // Input Model
    public class LoginDto
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    // 1. For receiving the Registration Form Data
    public class RegisterDto
    {
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNo { get; set; } = string.Empty;
        public string PanNo { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;

        // Dropdown selections
        public int StateId { get; set; }
        public int CityId { get; set; }

        // The role selected from the tabs (e.g., "NGO", "Donor")
        public string RoleName { get; set; } = string.Empty;
    }

    // 2. For sending States list to Frontend
    public class StateDto
    {
        public int StateId { get; set; }
        public string StateName { get; set; } = string.Empty;
    }

    // 3. For sending Cities list to Frontend
    public class CityDto
    {
        public int CityId { get; set; }
        public string CityName { get; set; } = string.Empty;
    }
}