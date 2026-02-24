using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HIMS.Migrations
{
    /// <inheritdoc />
    public partial class dep_removefrom_admission : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admission_Department_DepartmentId1",
                table: "Admission");

            migrationBuilder.DropForeignKey(
                name: "FK_appointment_doctors_DoctorId",
                table: "appointment");

            migrationBuilder.DropIndex(
                name: "IX_Admission_DepartmentId1",
                table: "Admission");

            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "Admission");

            migrationBuilder.DropColumn(
                name: "DepartmentId1",
                table: "Admission");

            migrationBuilder.RenameColumn(
                name: "DoctorId",
                table: "appointment",
                newName: "StaffId");

            migrationBuilder.RenameIndex(
                name: "IX_appointment_DoctorId",
                table: "appointment",
                newName: "IX_appointment_StaffId");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "appointment",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<DateOnly>(
                name: "AppointmentDate",
                table: "appointment",
                type: "date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddForeignKey(
                name: "FK_appointment_staff_StaffId",
                table: "appointment",
                column: "StaffId",
                principalTable: "staff",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_appointment_staff_StaffId",
                table: "appointment");

            migrationBuilder.RenameColumn(
                name: "StaffId",
                table: "appointment",
                newName: "DoctorId");

            migrationBuilder.RenameIndex(
                name: "IX_appointment_StaffId",
                table: "appointment",
                newName: "IX_appointment_DoctorId");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "appointment",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "AppointmentDate",
                table: "appointment",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateOnly),
                oldType: "date");

            migrationBuilder.AddColumn<Guid>(
                name: "DepartmentId",
                table: "Admission",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<int>(
                name: "DepartmentId1",
                table: "Admission",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Admission_DepartmentId1",
                table: "Admission",
                column: "DepartmentId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Admission_Department_DepartmentId1",
                table: "Admission",
                column: "DepartmentId1",
                principalTable: "Department",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_appointment_doctors_DoctorId",
                table: "appointment",
                column: "DoctorId",
                principalTable: "doctors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
