using Newtonsoft.Json;
using MyApp.Dynamics.Enums;
using MyApp.Dynamics.Models;
using MyApp.Dynamics.SeedWork;
using MyApp.Pages.Enums;
using System;
using System.Collections.Generic;

namespace MyApp.Pages.Employees.Metadata
{
	public class AddEmployeeMetadata : IPopulateMetadataService<AddEmployeePage>
	{
		public bool CanPopulate(string pageName)
			=> pageName.Equals(nameof(PageName.AddEmployee), StringComparison.InvariantCultureIgnoreCase);

		public IEnumerable<MetadataModel> GetMetadataByPageName(string pageName)
		{
            //public int DepartmentId { get; set; }
            //public string DepartmentDisplayName { get; set; }
            //public int JobTitleId { get; set; }
            //public string JobTitleDisplayName { get; set; }

            //TODO: Recuperar todo esto de la base de datos o de archivos json que puedan ser levantados rápidamente
            var metadatas = new List<MetadataModel>
            {
                new MetadataModel
                {
                    Id = nameof(AddEmployeePage.EmployeeNumber),
                    Label = "Employee Number",
                    Display = new DisplayMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.String,
                        IsRequired = true,
                        MaxLength = 11,
                        MinLength = 6
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(AddEmployeePage.FirstName),
                    Label = "First Name",
                    Display = new DisplayMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.String,
                        IsRequired = true,
                        MaxLength = 50,
                        MinLength = 1
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(AddEmployeePage.MiddleName),
                    Label = "Middle Name",
                    Display = new DisplayMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.String,
                        IsRequired = false,
                        MaxLength = 50,
                        MinLength = 0
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(AddEmployeePage.LastName),
                    Label = "Last Name",
                    Display = new DisplayMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.String,
                        IsRequired = true,
                        MaxLength = 50,
                        MinLength = 1
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(AddEmployeePage.TaxIdNumber),
                    Label = "Tax ID Number",
                    Display = new DisplayMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(AddEmployeePage.HireDate),
                    Label = "Hire Date",
                    Display = new DisplayMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Date,
                        IsRequired = true
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(AddEmployeePage.DepartmentDisplayName),
                    Label = "Department",
                    Display = new DisplayMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    IsEditable = false
                },
                new MetadataModel
                {
                    Id = nameof(AddEmployeePage.JobTitleDisplayName),
                    Label = "Job Title",
                    Display = new DisplayMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.String
                    },
                    IsEditable = false
                }
            };

            return metadatas;
        }

        public AddEmployeePage Populate(string jsonModel)
            => JsonConvert.DeserializeObject<AddEmployeePage>(jsonModel);

        IDynamicModel IPopulateMetadataService.Populate(string jsonModel)
			=> Populate(jsonModel);
	}
}
