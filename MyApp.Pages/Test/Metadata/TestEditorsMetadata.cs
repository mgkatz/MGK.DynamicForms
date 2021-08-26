using Newtonsoft.Json;
using MyApp.Dynamics.Enums;
using MyApp.Dynamics.Models;
using MyApp.Dynamics.SeedWork;
using MyApp.Pages.Enums;
using System;
using System.Collections.Generic;

namespace MyApp.Pages.Test.Metadata
{
	public class TestEditorsMetadata : IPopulateMetadataService<TestEditors>
	{
		public bool CanPopulate(string pageName)
			=> pageName.Equals(nameof(PageName.TestEditors), StringComparison.InvariantCultureIgnoreCase);

		public IEnumerable<MetadataModel> GetMetadataByPageName(string pageName)
		{
            var metadatas = new List<MetadataModel>
            {
                new MetadataModel
                {
                    Id = nameof(TestEditors.DateValueWithLabel),
                    Label = "Date for Testing",
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Date,
                        DefaultValue = DateTime.Today
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.EmailValueWithLabel),
                    Label = "Email for Testing",
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Email,
                        IsEmail = true
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.PasswordValueWithLabel),
                    Label = "Password for testing",
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Password,
                        MaxLength = 20,
                        MinLength = 8
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.StringValueWithLabel),
                    Label = "String for testing",
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel(),
                    IsEditable = true,
                    Width = ComponentTemplateWidth.Half
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.DateValueWithoutLabel),
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Date,
                        DefaultValue = DateTime.Today,
                        Placeholder = "Date without a label"
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.EmailValueWithoutLabel),
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Email,
                        IsEmail = true,
                        Placeholder = "Email without a label"
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.PasswordValueWithoutLabel),
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Password,
                        MaxLength = 20,
                        MinLength = 8,
                        Placeholder = "Password without a label"
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.StringValueWithoutLabel),
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.String,
                        Placeholder = "String without a label"
                    },
                    IsEditable = true,
                    Width = ComponentTemplateWidth.Half
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.BooleanValueWithLabel),
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Bool,
                        DefaultValue = false
					},
                    IsEditable = true,
                    Label = "Bool for testing"
				},
                new MetadataModel
                {
                    Id = nameof(TestEditors.BooleanValueWithLabelAndCustomProperty),
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Bool,
                        DefaultValue = false,
                        CustomProperties = new CustomPropertyModel[]
                        {
                            new CustomPropertyModel { Name = nameof(BooleanOptions), Value = BooleanOptions.YesNo }
                        }
                    },
                    IsEditable = true,
                    Label = "Custom Bool for testing"
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.CheckboxValueWithTextBefore),
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Checkbox,
                        DefaultValue = true,
                        CustomProperties = new CustomPropertyModel[]
                        {
                            new CustomPropertyModel { Name = "ShowTextBefore", Value = true }
                        },
                        Placeholder = "Checkbox with text before"
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.CheckboxValueWithTextAfter),
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Checkbox,
                        DefaultValue = false,
                        CustomProperties = new CustomPropertyModel[]
                        {
                            new CustomPropertyModel { Name = "ShowTextBefore", Value = false }
                        },
                        Placeholder = "Checkbox with text after"
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.RadioValueWithTextBefore),
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Radio,
                        DefaultValue = true,
                        CustomProperties = new CustomPropertyModel[]
                        {
                            new CustomPropertyModel { Name = "ShowTextBefore", Value = true }
                        },
                        Placeholder = "Radio with text before"
                    },
                    IsEditable = true
                },
                new MetadataModel
                {
                    Id = nameof(TestEditors.RadioValueWithTextAfter),
                    Display = new DisplayMetadataModel(),
                    Editor = new EditorMetadataModel
                    {
                        ComponentType = ComponentTemplate.Radio,
                        DefaultValue = false,
                        CustomProperties = new CustomPropertyModel[]
                        {
                            new CustomPropertyModel { Name = "ShowTextBefore", Value = false }
                        },
                        Placeholder = "Radio with text after"
                    },
                    IsEditable = true
                }
            };

            return metadatas;
        }

        public TestEditors Populate(string jsonModel)
			=> JsonConvert.DeserializeObject<TestEditors>(jsonModel);

		IDynamicModel IPopulateMetadataService.Populate(string jsonModel)
			=> Populate(jsonModel);
	}
}
