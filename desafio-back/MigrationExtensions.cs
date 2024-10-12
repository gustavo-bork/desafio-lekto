using Microsoft.EntityFrameworkCore;

namespace desafio_back;

public static class MigrationExtensions
{
    public static void ApplyMigrations(this IApplicationBuilder app)
    {
        using IServiceScope scope = app.ApplicationServices.CreateScope();

        using CadPlusContext context = scope.ServiceProvider.GetService<CadPlusContext>();

        context.Database.Migrate();
    }
}
