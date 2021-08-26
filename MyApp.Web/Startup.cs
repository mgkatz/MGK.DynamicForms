using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using MyApp.Dynamics.Infrastructure.Providers;
using MyApp.Dynamics.SeedWork;
using MyApp.Pages.Employees;
using MyApp.Pages.Employees.Metadata;
using MyApp.Pages.Test;
using MyApp.Pages.Test.Metadata;
using MyApp.Web.Constants;
using MyApp.Web.Infrastructure.Formatters;

namespace MyApp.Web
{
	public class Startup
	{
		private readonly IConfiguration _configuration;

		public Startup(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddControllersWithViews();
			// In production, the Angular files will be served from this directory
			services.AddSpaStaticFiles(configuration => configuration.RootPath = ApplicationConstants.Paths.Root);

			services.AddControllers().AddNewtonsoftJson();

			// To implement the InputFormatter is important if you need to send string (e.g: a json structure) in the body of the request.
			services.AddMvc(o => o.InputFormatters.Insert(0, new RawRequestBodyFormatter()));

			services.AddScoped<IPopulateModelServiceProvider, PopulateModelServiceProvider>();
			services.AddScoped<IPopulateMetadataService, AddEmployeeMetadata>();
			services.AddScoped<IPopulateMetadataService<AddEmployeePage>, AddEmployeeMetadata>();
			services.AddScoped<IPopulateMetadataService, TestEditorsMetadata>();
			services.AddScoped<IPopulateMetadataService<TestEditors>, TestEditorsMetadata>();

			services.AddControllers().AddNewtonsoftJson(options =>
			{
				options.SerializerSettings.Converters.Add(new StringEnumConverter());
				options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
			});

			services.AddCors(options =>
			{
				options.AddPolicy(
					ApplicationConstants.CorsPolicy,
					builder => builder
						.AllowAnyMethod()
						.AllowAnyHeader()
						.AllowCredentials()
						.SetIsOriginAllowed(_ => true));
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Error");
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}

			app.UseCors(ApplicationConstants.CorsPolicy);
			app.UseHttpsRedirection();
			app.UseStaticFiles();

			if (!env.IsDevelopment())
			{
				app.UseSpaStaticFiles();
			}

			app.UseRouting();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllerRoute(
					name: "default",
					pattern: "{controller}/{action=Index}/{id?}");
			});

			app.UseSpa(spa =>
			{
				// To learn more about options for serving an Angular SPA from ASP.NET Core,
				// see https://go.microsoft.com/fwlink/?linkid=864501

				spa.Options.SourcePath = ApplicationConstants.Paths.Source;

				if (env.IsDevelopment())
				{
					spa.UseAngularCliServer(npmScript: "start");
				}
			});
		}
	}
}
