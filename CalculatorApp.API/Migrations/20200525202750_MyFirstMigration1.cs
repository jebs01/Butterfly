using Microsoft.EntityFrameworkCore.Migrations;

namespace CalculatorApp.API.Migrations
{
    public partial class MyFirstMigration1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Calculates",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Number1 = table.Column<int>(nullable: false),
                    Number2 = table.Column<int>(nullable: false),
                    Operator = table.Column<string>(nullable: true),
                    Result = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calculates", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Calculates");
        }
    }
}
