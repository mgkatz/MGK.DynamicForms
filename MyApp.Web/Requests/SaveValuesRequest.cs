using MyApp.Web.SeedWork;

namespace MyApp.Web.Requests
{
	public sealed class SaveValuesRequest : IHasPageValues
	{
		public string Values { get; set; }
	}
}
