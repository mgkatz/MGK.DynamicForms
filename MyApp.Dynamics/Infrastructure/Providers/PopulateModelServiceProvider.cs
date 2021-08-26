using DynamicResouces;
using MGK.Extensions;
using MyApp.Dynamics.Models;
using MyApp.Dynamics.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MyApp.Dynamics.Infrastructure.Providers
{
	public sealed class PopulateModelServiceProvider : IPopulateModelServiceProvider
    {
        private readonly IEnumerable<IPopulateMetadataService> _populateServices;

        public PopulateModelServiceProvider(IEnumerable<IPopulateMetadataService> populateServices)
        {
            _populateServices = populateServices;
        }

        public IDynamicModel Populate(string pageName, string jsonModel)
        {
            var specificPopulated = _populateServices.FirstOrDefault(ps => ps.CanPopulate(pageName));

            if (specificPopulated == null)
            {
                throw new Exception(MessagesResources.ErrorPopulateServiceNotImplemented.Format(pageName));
            }

            return specificPopulated.Populate(jsonModel);
        }

        public IEnumerable<MetadataModel> GetMetadataByPageName(string pageName)
        {
            var specificPopulated = _populateServices.FirstOrDefault(ps => ps.CanPopulate(pageName));

            if (specificPopulated == null)
            {
                throw new Exception(MessagesResources.ErrorPopulateServiceNotImplemented.Format(pageName));
            }

            return specificPopulated.GetMetadataByPageName(pageName);
        }
    }
}
