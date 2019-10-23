namespace PersonalAssistant.Migrations
{
    using PersonalAssistant.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<PersonalAssistant.Models.ApplicationDbContext>
    {
        public DbSet<Event> Events { get; set; }
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(PersonalAssistant.Models.ApplicationDbContext context)
        {
            context.Events.AddOrUpdate(x => x.Id,
              new Event()
              {
                  Id = 0,
                  Name = "9th Annual Milwaukee WingFest",
                  Description = "Prep your stomachs and your costumes for The 9th Annual Milwaukee WingFest - Halloween Edition! Milwaukee WingFest is back at the Expo Center at the Wisconsin State Fair on Sunday, October 27th.Event will include: Beer, Bourbon, Unlimited Wings, Live Music, Chicken Eating and Costume Contests and more!",
                  Location = "Wisconsin State Fair Park Exposition Center, 8200 West Greenfield Avenue West Allis, WI 53214",
                  Url = "https://www.eventbrite.com/e/9th-annual-milwaukee-wingfest-tickets-65961242853?aff=ebdssbdestsearch"
              },
              new Event()
              {
                  Id = 1,
                  Name = "Halloween Bar Crawl",
                  Description = "Description coming soon...",
                  Location = "Brothers Bar and Grill, 1213 N. Water Street #11, Milwaukee, WI 53221",
                  Url = "https://www.eventbrite.com/e/halloween-bar-crawl-milwaukee-tickets-69063208917?aff=ebdssbdestsearch"
              },
              new Event()
              {
                  Id = 2,
                  Name = "Trick-Or-Treat: Free Safe Indoor at Latino Family Expo & Festival",
                  Description = "Free Safe Indoor Trick or Treat for children under 12 years of age. Trick or treat from booth to booth in this safe indoor environment. Open to the public. Blue buckets welcomed.",
                  Location = "Augustine Preparatory Academy, 2607 South 5th Street, Milwaukee, WI 53207",
                  Url = "https://www.eventbrite.com/e/trick-or-treat-free-safe-indoor-at-latino-family-expo-festival-tickets-75601168129?aff=ebdssbdestsearch"
              },
              new Event()
              {
                  Id = 3,
                  Name = "Immortal Technique",
                  Description = "Immortal Technique at The Miramar Theatre",
                  Location = "The Miramar Theatre, 2844 N. Oakland Ave, Milwaukee, WI, 53211",
                  Url = "https://www.eventbrite.com/e/immortal-technique-tickets-70434955849?aff=ebdssbdestsearch"
              },
              new Event()
              {
                  Id = 4,
                  Name = "2nd Annual Vegan Sol Food & Drink Expo",
                  Description = "Description coming soon...",
                  Location = "Nicolet High SChool, 6701 North Jean Nicolet Road, Glendale, WI 53217",
                  Url = "https://www.eventbrite.com/e/2nd-annual-vegan-sol-food-drink-expo-tickets-61008889230?aff=ebdssbdestsearch"
              }
              );
        }
              
        
    }
}
