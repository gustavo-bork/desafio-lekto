using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace desafio_back;

public class CadPlusContext(DbContextOptions<CadPlusContext> options)
  : IdentityDbContext<User, IdentityRole<int>, int>(options)
{
    public DbSet<Address> Addresses { get; set; }
}
