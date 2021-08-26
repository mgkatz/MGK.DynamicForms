namespace MyApp.Web.Constants
{
	public struct ApplicationConstants
	{
		public const string CorsPolicy = "CorsPolicy";

		public struct ContentTypes
		{
			public const string Json = "application/json";
			public const string OctectStream = "application/octet-stream";
			public const string Text = "text/plain";
		}

		public struct Paths
		{
			public const string Root = Source + "/dist";
			public const string Source = "ClientApp";
		}
	}
}
