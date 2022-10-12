using System.ComponentModel.DataAnnotations;

namespace catering_app.Models
{
  public class UserAccessibleDataDto
  {
    public string Email { get; set; } = string.Empty;
    public string Firstname { get; set; } = string.Empty;
    public string VerificationToken { get; set; } = string.Empty;
  }
}
