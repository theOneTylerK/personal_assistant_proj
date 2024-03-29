﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PersonalAssistant.Models
{
    public class Plan
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        [Display(Name = "Day of Plan")]
        public string DayOfPlan { get; set; }
        public string MonthOfPlan { get; set; }
        public string StartDate { get; set; }
        public string StartTime { get; set; }
        public string Description { get; set; }

    }
}