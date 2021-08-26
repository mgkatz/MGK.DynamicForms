using MyApp.Dynamics.Models;
using System.Collections.Generic;

namespace MyApp.Dynamics.SeedWork
{
	public interface IPopulateMetadataService
	{
		bool CanPopulate(string pageName);
		IDynamicModel Populate(string jsonModel);
		IEnumerable<MetadataModel> GetMetadataByPageName(string pageName);
	}

	public interface IPopulateMetadataService<TModel> : IPopulateMetadataService
		where TModel : IDynamicModel
	{
		new TModel Populate(string jsonModel);
	}
}
