using catering_app.Models;
using catering_app.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;

namespace catering_app.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    private readonly IConfiguration _configuration;
    private readonly DataContext _context;

    public AuthController(DataContext context, IConfiguration configuration)
    {
      _context = context;
      _configuration = configuration;
    }

    [HttpPost("register")]
    public async Task<ActionResult<string>> Register(UserRegisterDto request)
    {
      if (_context.Users.Any(user => user.Email == request.Email))
      {
        return BadRequest("User already exists");
      }

      if (!IsPasswordValid(request.Password))
      {
        return BadRequest("Wrong password");
      }

      CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

      var user = new User
      {
        Firstname = request.Firstname,
        Email = request.Email,
        PasswordHash = passwordHash,
        PasswordSalt = passwordSalt,
      };
      var token = CreateToken(user);
      user.VerificationToken = token;

      _context.Users.Add(user);
      await _context.SaveChangesAsync();

      return Ok();
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserAccessibleDataDto>> Login(UserLoginDto request)
    {
      var user = await _context.Users.FirstOrDefaultAsync(user => user.Email == request.Email);
      if (user == null)
      {
        return BadRequest("Provided data is incorrect");
      }
      if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
      {
        return BadRequest("Provided data is incorrect");
      }

      var data = new UserAccessibleDataDto
      {
        Firstname = user.Firstname,
        Email = user.Email,
        VerificationToken = user.VerificationToken
      };

      return Ok(data);
    }

    [HttpPatch("modify")]
    public async Task<ActionResult<string>> ModifyUserCredentials(UserRegisterDto request)
    {
      var user = await _context.Users.FirstOrDefaultAsync(user => user.Email == request.Email);
      if (user == null)
      {
        return BadRequest();
      }
      if (request.Firstname != null)
      {
        user.Firstname = request.Firstname;
      }
      if (request.Password != null)
      {
        if (!IsPasswordValid(request.Password))
        {
          return BadRequest("Wrong password");
        }
        CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);
        user.PasswordSalt = passwordSalt;
        user.PasswordHash = passwordHash;
      }
      await _context.SaveChangesAsync();
      return Ok();
    }

    private string CreateToken(User user)
    {
      List<Claim> claims = new()
        {
            new Claim(ClaimTypes.Email, user.Email)
        };
      var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
          _configuration.GetSection("AppSettings:Token").Value));

      var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

      var token = new JwtSecurityToken(
          claims: claims,
          expires: DateTime.Now.AddHours(1),
          signingCredentials: credentials
          );

      var jwt = new JwtSecurityTokenHandler().WriteToken(token);

      return jwt;
    }

    private static bool IsPasswordValid(string password)
    {
      var regex = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";

      if (!System.Text.RegularExpressions.Regex.Match(password, regex).Success) return false;
      return true;
    }

    private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
      using var hmac = new HMACSHA512();
      passwordSalt = hmac.Key;
      passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
    }

    private static bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
    {
      using var hmac = new HMACSHA512(passwordSalt);
      var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
      return computedHash.SequenceEqual(passwordHash);
    }
  }
}
