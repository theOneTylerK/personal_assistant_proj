using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PersonalAssistant.Startup))]
namespace PersonalAssistant
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
