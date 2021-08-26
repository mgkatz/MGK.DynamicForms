using MyApp.Dynamics.Enums;
using System;

namespace MyApp.Dynamics.Models
{
	public abstract class ControlMetadataModel
	{
		/// <summary>
		/// Gets or sets the default value. By default is null and it will be calculated from the type of the control.
		/// </summary>
		public object DefaultValue { get; set; }

		/// <summary>
		/// Gets or sets the type of the control to be used when editing a value. By default is string.
		/// </summary>
		public ComponentTemplate ComponentType { get; set; } = ComponentTemplate.String;

		/// <summary>
		/// Gets or sets custom properties of a control.
		/// </summary>
		public CustomPropertyModel[] CustomProperties { get; set; } = Array.Empty<CustomPropertyModel>();
	}
}
