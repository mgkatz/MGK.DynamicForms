using MyApp.Dynamics.Enums;

namespace MyApp.Dynamics.Models
{
	public sealed class MetadataModel
	{
		/// <summary>
		/// Allows to identify the metadata record.
		/// </summary>
		public string Id { get; set; }

		/// <summary>
		/// Gets or sets the display features.
		/// </summary>
		public DisplayMetadataModel Display { get; set; }

		/// <summary>
		/// Gets or sets the editor features.
		/// </summary>
		public EditorMetadataModel Editor { get; set; }

		/// <summary>
		/// Gets or sets a boolean value if the field can be edited (true) or not (false). By default is false.
		/// </summary>
		public bool IsEditable { get; set; }

		/// <summary>
		/// Gets or sets the text of the label for the Editor control.
		/// </summary>
		public string Label { get; set; } = string.Empty;

		/// <summary>
		/// Validates a value against a regex pattern. This corresponds with HTML pattern attribute.
		/// </summary>
		public string Pattern { get; set; } = string.Empty;

		/// <summary>
		/// Allows to define a width for a control.
		/// </summary>
		public ComponentTemplateWidth Width { get; set; } = ComponentTemplateWidth.Normal;
	}
}
