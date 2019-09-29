using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PersonalAssistant.Models;

namespace PersonalAssistant.Controllers
{
    public class PlansController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Plans
        public ActionResult Index(string input)
        {
            List<Plan> filterListOfPlans = new List<Plan>();
            var today = DateTime.Now.Date;
            if (input == null)
            {
                return View(db.Plans.Where(p=>p.StartDate == today).ToList());
            }
            else
            {
                if (input.Contains("/"))
                {
                    var Date = DateTime.Parse(input).Date;
                    filterListOfPlans = db.Plans.Where(p => p.StartDate == Date).ToList();
                    return View(filterListOfPlans);
                }
                else
                {
                    filterListOfPlans = db.Plans.Where(p => p.DayOfPlan == input).ToList();
                    return View(filterListOfPlans);
                }
               
            }
        }

        // GET: Plans/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Plan plan = db.Plans.Find(id);
            if (plan == null)
            {
                return HttpNotFound();
            }
            return View(plan);
        }
        public ActionResult ListPlans(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var thisPlan = db.Plans.Where(p => p.Id == id).FirstOrDefault();
            Schedule schedule = db.Schedules.Where(s=>s.Name == thisPlan.MonthOfPlan).FirstOrDefault();
            if (schedule == null)
            {
                return HttpNotFound();
            }
            else
            {
                var startDate = DateTime.Parse(schedule.StartDate).Date;
                var endDate = DateTime.Parse(schedule.EndDate).Date;
                var plans = db.Plans.Where(p => p.StartDate >= startDate && p.EndDate <= endDate).ToList();
                plans.Sort();
                return View(plans);
            }

        }

        // GET: Plans/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Plans/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,DayOfPlan,StartDate,EndDate,StartTime,EndTime,Description,Schedule,ScheduleId")] Plan plan)
        {
            if (ModelState.IsValid)
            {
                db.Plans.Add(plan);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(plan);
        }

        // GET: Plans/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Plan plan = db.Plans.Find(id);
            if (plan == null)
            {
                return HttpNotFound();
            }
            return View(plan);
        }

        // POST: Plans/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,DayOfPlan,StartDate,EndDate,StartTime,EndTime,Description,Schedule,ScheduleId")] Plan plan)
        {
            if (ModelState.IsValid)
            {
                db.Entry(plan).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(plan);
        }

        // GET: Plans/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Plan plan = db.Plans.Find(id);
            if (plan == null)
            {
                return HttpNotFound();
            }
            return View(plan);
        }

        // POST: Plans/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Plan plan = db.Plans.Find(id);
            db.Plans.Remove(plan);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
