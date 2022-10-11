namespace catering_app.Models
{
  public class FoodSet
  {
    public Guid Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public string Img { get; set; } = String.Empty;
    public double Price { get; set; }
  }
}
