using System.ComponentModel;

namespace MyApp.Dynamics.Enums
{
	public enum ComponentTemplate
	{
		[Description("string")]
		String = 0,

		[Description("bool")]
		Bool = 1,

		[Description("checkbox")]
		Checkbox = 2,

		[Description("date")]
		Date = 3,

		[Description("email")]
		Email = 4,

		[Description("password")]
		Password = 5,

		[Description("label")]
		Label = 6,

		[Description("radio")]
		Radio = 7
	}
}
