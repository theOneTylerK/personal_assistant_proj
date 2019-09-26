namespace PersonalAssistant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class NewMigration : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Plans", "ScheduleId", "dbo.Schedules");
            DropIndex("dbo.Plans", new[] { "ScheduleId" });
            DropColumn("dbo.Plans", "ScheduleId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Plans", "ScheduleId", c => c.Int(nullable: false));
            CreateIndex("dbo.Plans", "ScheduleId");
            AddForeignKey("dbo.Plans", "ScheduleId", "dbo.Schedules", "ScheduleId", cascadeDelete: true);
        }
    }
}
