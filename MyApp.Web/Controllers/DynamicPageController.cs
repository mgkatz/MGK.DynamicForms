using Microsoft.AspNetCore.Mvc;
using MyApp.Dynamics.SeedWork;
using MyApp.Web.Requests;

namespace MyApp.Web.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class DynamicPageController : Controller
	{
		private readonly IPopulateModelServiceProvider _populateModelService;

		public DynamicPageController(IPopulateModelServiceProvider populateModelService)
		{
			_populateModelService = populateModelService;
		}

		[HttpGet]
		[Route("metadata/{pageName}")]
		public IActionResult GetMetadata(string pageName)
		{
			var metadata = _populateModelService.GetMetadataByPageName(pageName);

			return Ok(metadata);
		}

		[HttpPost]
		[Route("save/{pageName}")]
		public IActionResult Create(string pageName, [FromBody] SaveValuesRequest request)
		{
			var model = _populateModelService.Populate(pageName, request.Values);
			//TODO: do something with the values of the model.
			return Ok();
		}
	}
}
