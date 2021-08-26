using MGK.Extensions;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Net.Http.Headers;
using MyApp.Web.Constants;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Web.Infrastructure.Formatters
{
	public class RawRequestBodyFormatter : InputFormatter
	{
		public RawRequestBodyFormatter()
		{
			SupportedMediaTypes.Add(new MediaTypeHeaderValue(ApplicationConstants.ContentTypes.Text));
			SupportedMediaTypes.Add(new MediaTypeHeaderValue(ApplicationConstants.ContentTypes.OctectStream));
		}

		/// <summary>
		/// Allow text/plain, application/octet-stream and no content type to be processed.
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		public override Boolean CanRead(InputFormatterContext context)
		{
			if (context == null) throw new ArgumentNullException(nameof(context));

			var contentType = context.HttpContext.Request.ContentType;

			return contentType.IsNullOrEmptyOrWhiteSpace()
				|| contentType == ApplicationConstants.ContentTypes.Text
				|| contentType == ApplicationConstants.ContentTypes.OctectStream;
		}

		/// <summary>
		/// Handle text/plain or no content type for string results
		/// Handle application/octet-stream for byte[] results
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		public override async Task<InputFormatterResult> ReadRequestBodyAsync(InputFormatterContext context)
		{
			var request = context.HttpContext.Request;
			var contentType = context.HttpContext.Request.ContentType;

			if (string.IsNullOrEmpty(contentType) || contentType == ApplicationConstants.ContentTypes.Text)
			{
				using var reader = new StreamReader(request.Body);
				var content = await reader.ReadToEndAsync();

				return await InputFormatterResult.SuccessAsync(content);
			}

			if (contentType == ApplicationConstants.ContentTypes.OctectStream)
			{
				using var ms = new MemoryStream(2048);
				await request.Body.CopyToAsync(ms);
				var content = ms.ToArray();

				return await InputFormatterResult.SuccessAsync(content);
			}

			return await InputFormatterResult.FailureAsync();
		}
	}
}
