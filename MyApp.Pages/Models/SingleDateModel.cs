using Newtonsoft.Json;
using System;

namespace MyApp.Pages.Models
{
	[Serializable]
	public class SingleDateModel
	{
		[JsonProperty(PropertyName = "jsDate")]
		public DateTime Value { get; set; }
	}
}
