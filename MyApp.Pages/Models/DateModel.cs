using System;

namespace MyApp.Pages.Models
{
	[Serializable]
	public class DateModel
	{
		public bool IsRange { get; set; }
		public SingleDateModel SingleDate { get; set; }
		public DateRangeModel DateRange { get; set; }
	}
}
