using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using Twilio.TwiML;
using Twilio.TwiML.Messaging;

namespace csharp
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapPost("/auto-responder", async context =>
                {
                    var form = context.Request.Form;
                    var twiml = new MessagingResponse();
                    if (form["Body"].ToString().ToUpper().Equals("QUEST")) {
                        twiml.Message("Discover your power to change the world with code! https://twilio.com/quest");
                    } else {
                        twiml.Message("I don't know what you mean by " + form["Body"] + ". Did you mean QUEST?");
                    }
                    await context.Response.WriteAsync(twiml.ToString());
                });

            });
        }
    }
}
