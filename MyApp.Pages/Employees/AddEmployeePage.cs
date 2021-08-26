using MyApp.Dynamics.SeedWork;
using MyApp.Pages.Models;

namespace MyApp.Pages.Employees
{
	public class AddEmployeePage : IDynamicModel
	{
		public string EmployeeNumber { get; set; }

		public string FirstName { get; set; }

		public string MiddleName { get; set; }

		public string LastName { get; set; }

		public string TaxIdNumber { get; set; }

		public DateModel HireDate { get; set; }

		public int DepartmentId { get; set; }

		public string DepartmentDisplayName { get; set; }

		public int JobTitleId { get; set; }

		public string JobTitleDisplayName { get; set; }
	}
}
