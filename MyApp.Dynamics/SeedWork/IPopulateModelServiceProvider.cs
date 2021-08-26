using MyApp.Dynamics.Models;
using System.Collections.Generic;

namespace MyApp.Dynamics.SeedWork
{
	public interface IPopulateModelServiceProvider
	{
		IDynamicModel Populate(string pageName, string jsonModel);
		IEnumerable<MetadataModel> GetMetadataByPageName(string pageName);
	}
}
