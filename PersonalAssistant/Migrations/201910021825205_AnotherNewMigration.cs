namespace PersonalAssistant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AnotherNewMigration : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Plans", "StartDate", c => c.String());
            DropColumn("dbo.Plans", "EndDate");
            DropColumn("dbo.Plans", "EndTime");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Plans", "EndTime", c => c.String());
            AddColumn("dbo.Plans", "EndDate", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Plans", "StartDate", c => c.DateTime(nullable: false));
        }
    }
}
