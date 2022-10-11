using catering_app.Models;
using Microsoft.EntityFrameworkCore;

namespace catering_app.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        public DbSet<User> Users => Set<User>();
        public DbSet<FoodSet> FoodSets => Set<FoodSet>();
    }
}
