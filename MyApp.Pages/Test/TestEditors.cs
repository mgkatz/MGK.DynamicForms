using MyApp.Dynamics.SeedWork;
using System;

namespace MyApp.Pages.Test
{
	public class TestEditors : IDynamicModel
	{
		public DateTime DateValueWithLabel { get; set; }
		public DateTime DateValueWithoutLabel { get; set; }
		public string EmailValueWithLabel { get; set; }
		public string EmailValueWithoutLabel { get; set; }
		public string PasswordValueWithLabel { get; set; }
		public string PasswordValueWithoutLabel { get; set; }
		public string StringValueWithLabel { get; set; }
		public string StringValueWithoutLabel { get; set; }
		public bool BooleanValueWithLabel { get; set; }
		public bool BooleanValueWithLabelAndCustomProperty { get; set; }
		public bool CheckboxValueWithTextBefore { get; set; }
		public bool CheckboxValueWithTextAfter { get; set; }
		public bool RadioValueWithTextBefore { get; set; }
		public bool RadioValueWithTextAfter { get; set; }
	}
}
