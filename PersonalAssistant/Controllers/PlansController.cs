﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Helpers;
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
                var todayString = today.ToString();
                if (todayString.Count() == 21)
                {
                    var noTimeToday = todayString.Substring(0, 9);
                    filterListOfPlans = db.Plans.Where(p => p.StartDate == noTimeToday).ToList();
                }
                else
                {
                    var noTimeToday = todayString.Substring(0, 10);
                    filterListOfPlans = db.Plans.Where(p => p.StartDate == noTimeToday).ToList();
                }
                return View(filterListOfPlans);
            }
            else
            {
                if (input.Contains("/"))
                {
                  
                    filterListOfPlans = db.Plans.Where(p => p.StartDate == input).ToList();
                    return View(filterListOfPlans);
                }
                else
                {
                    filterListOfPlans = db.Plans.Where(p => p.MonthOfPlan == input).ToList();
                    return View(filterListOfPlans);
                }

            }
        }
        [HttpGet]
        public JsonResult GetLocalEvents()
        {
            var localEvents = db.Events.ToList();
            return Json(localEvents, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetPlans()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }

       
        [HttpGet]
        public JsonResult GetPlansForJanuary()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "January").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetPlansForFebruary()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "February").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetPlansForMarch()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "March").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetPlansForApril()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "April").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetPlansForMay()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "May").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetPlansForJune()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "June").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetPlansForJuly()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "July").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetPlansForAugust()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "August").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetPlansForSeptember()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "September").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetPlansForOctober()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "October").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetPlansForNovember()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "November").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetPlansForDecember()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            ListOfPlans = db.Plans.Where(p => p.MonthOfPlan == "December").ToList();
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetPlansForToday()
        {
            List<Plan> ListOfPlans = new List<Plan>();
            var today = DateTime.Now.Date;
            var todayString = today.ToString();
            if(todayString.Count() == 21)
            {
                var noTimeToday = todayString.Substring(0, 9);
                ListOfPlans = db.Plans.Where(p => p.StartDate == noTimeToday).ToList();
            }
            else
            {
                var noTimeToday = todayString.Substring(0, 10);
                ListOfPlans = db.Plans.Where(p => p.StartDate == noTimeToday).ToList();
            }
          
            return Json(ListOfPlans, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public void CreateNewPlan(Plan plan)
        {
            db.Plans.Add(plan);
            db.SaveChanges();
        }
        [HttpPost]
        public void DeletePlan(Plan plan)
        {
            var PlanToDelete = db.Plans.Where(p => p.Name == plan.Name && p.DayOfPlan == plan.DayOfPlan).FirstOrDefault();
            db.Plans.Remove(PlanToDelete);
            db.SaveChanges();
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
        public ActionResult Create([Bind(Include = "Id,Name,DayOfPlan,MonthOfPlan,StartDate,StartTime,Description")] Plan plan)
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
        public ActionResult Edit([Bind(Include = "Id,Name,DayOfPlan,MonthOfPlan,StartDate,StartTime,Description")] Plan plan)
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
