using System.ComponentModel.DataAnnotations;

namespace catering_app.Models
{
    public class UserRegisterDto
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
        [Required,Compare("Password")]
        public string ConfirmPassword { get; set; } = string.Empty;
        [Required]
        public string Firstname { get; set; } = string.Empty;
    }
}
