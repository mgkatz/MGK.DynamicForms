using Newtonsoft.Json;
using System;

namespace MyApp.Pages.Models
{
	[Serializable]
	public class DateRangeModel
	{
		[JsonProperty(PropertyName = "beginJsDate")]
		public DateTime FromValue { get; set; }

		[JsonProperty(PropertyName = "endJsDate")]
		public DateTime ToValue { get; set; }
	}
}
