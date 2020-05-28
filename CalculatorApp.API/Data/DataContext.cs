using CalculatorApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CalculatorApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext>  options) : base (options) {}

        public DbSet<Value> Values { get; set; }
        public DbSet<Calculate> Calculates { get; set; }
    }
}