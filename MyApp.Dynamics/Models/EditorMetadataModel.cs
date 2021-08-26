namespace MyApp.Dynamics.Models
{
	public sealed class EditorMetadataModel : ControlMetadataModel
	{
		/// <summary>
		/// Gets or sets a boolean value if the field should be validated as an email (true) or not (false). By default is false.
		/// </summary>
		public bool IsEmail { get; set; }

		/// <summary>
		/// Gets or sets a boolean value if the field is required (true) or not (false). By default is false.
		/// </summary>
		public bool IsRequired { get; set; }

		/// <summary>
		/// Gets or sets the maximum length of a field.
		/// </summary>
		public int MaxLength { get; set; }

		/// <summary>
		/// Gets or sets the minimum length of a field. By default is zero.
		/// </summary>
		public int MinLength { get; set; } = 0;

		/// <summary>
		/// Allows to set a placeholder to a control.
		/// </summary>
		public string Placeholder { get; set; } = string.Empty;

		//TODO: ¿cómo sería el ejemplo de un validator?
		public string Validator { get; set; } = string.Empty;
	}
}
