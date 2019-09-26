using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PersonalAssistant.Models
{
    public class Schedule
    {
        [Key]
        public int ScheduleId { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }

    }
}