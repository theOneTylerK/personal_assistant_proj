using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PersonalAssistant.Models;
using System.Net.Mail;
using MailKit.Net.Imap;
using MailKit;

namespace PersonalAssistant.Controllers
{
    public class ContactsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Contacts
        public ActionResult Index()
        {
            List<Contact> contactsList = new List<Contact>();
            contactsList = db.Contacts.ToList();
            return View(contactsList);
        }

        // GET: Contacts/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contact contact = db.Contacts.Find(id);
            if (contact == null)
            {
                return HttpNotFound();
            }
            return View(contact);
        }

        // GET: Contacts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Contacts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,FirstName,LastName,EmailAddress,PhoneNumber")] Contact contact)
        {
            if (ModelState.IsValid)
            {
                db.Contacts.Add(contact);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(contact);
        }

        // GET: Contacts/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contact contact = db.Contacts.Find(id);
            if (contact == null)
            {
                return HttpNotFound();
            }
            return View(contact);
        }

        // POST: Contacts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,FirstName,LastName,EmailAddress,PhoneNumber")] Contact contact)
        {
            if (ModelState.IsValid)
            {
                db.Entry(contact).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(contact);
        }

        // GET: Contacts/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contact contact = db.Contacts.Find(id);
            if (contact == null)
            {
                return HttpNotFound();
            }
            return View(contact);
        }

        // POST: Contacts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Contact contact = db.Contacts.Find(id);
            db.Contacts.Remove(contact);
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
        [HttpPost]
        public JsonResult sendEmail(Email email)
        {
            if (email.Message == null || email.Subject == null)
            {
                //var currentContact = db.Contacts.Where(c => c.FirstName == email.FirstName && c.LastName == email.LastName).FirstOrDefault();
                //var fromAddress = new MailAddress("test.sweepstakesannouncer@gmail.com", "Sweepstakes Announcer");
                //var toAddress = new MailAddress($"{currentContact.EmailAddress}", $"{currentContact.FirstName} {currentContact.LastName}");
                //string password = "TacoCat24$$";
                //string subject = email.Subject;
                //string body = " ";
                //var smtp = new SmtpClient
                //{
                //    Host = "smtp.gmail.com",
                //    Port = 587,
                //    EnableSsl = true,
                //    DeliveryMethod = SmtpDeliveryMethod.Network,
                //    UseDefaultCredentials = false,
                //    Credentials = new NetworkCredential("test.sweepstakesannouncer", password)
                //};

                //using (var message = new MailMessage(fromAddress, toAddress))
                //{
                //    string Subject = subject;
                //    string Body = body;
                //}
                //{
                //    smtp.Send(fromAddress.Address, toAddress.Address, subject, body);
                //}
                var errorMessage = "I was unable to do that. Please be sure to include both a subject and a message when sending an email.";
                return Json(errorMessage, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var currentContact = db.Contacts.Where(c => c.FirstName == email.FirstName && c.LastName == email.LastName).FirstOrDefault();
                if(currentContact == null)
                {
                    var errorMessage = "I was unable to find a contact with that name.";
                    return Json(errorMessage, JsonRequestBehavior.AllowGet);
                }
                else {
                    var fromAddress = new MailAddress("test.sweepstakesannouncer@gmail.com", "Sweepstakes Announcer");
                    var toAddress = new MailAddress($"{currentContact.EmailAddress}", $"{currentContact.FirstName} {currentContact.LastName}");
                    string password = "TacoCat24$$";
                    string subject = email.Subject;
                    string body = email.Message.Replace(",", " ");

                    var smtp = new SmtpClient
                    {
                        Host = "smtp.gmail.com",
                        Port = 587,
                        EnableSsl = true,
                        DeliveryMethod = SmtpDeliveryMethod.Network,
                        UseDefaultCredentials = false,
                        Credentials = new NetworkCredential("test.sweepstakesannouncer", password)
                    };

                    using (var message = new MailMessage(fromAddress, toAddress))
                    {
                        string Subject = subject;
                        string Body = body;
                    }
                    {
                        smtp.Send(fromAddress.Address, toAddress.Address, subject, body);
                    }
                    var successMessage = "Your email has been sent.";
                    return Json(successMessage, JsonRequestBehavior.AllowGet);
                }
            }
        }

        [HttpPost]
        public JsonResult GetContactInfo(Contact contact)
        {
            var contactToDisplay = db.Contacts.Where(c => c.FirstName == contact.FirstName && c.LastName == contact.LastName).FirstOrDefault();
            return Json(contactToDisplay, JsonRequestBehavior.AllowGet);
        }

    }
}
