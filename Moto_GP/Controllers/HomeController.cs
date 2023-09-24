using System;
using System.IO;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using Moto_GP.App_Code;
using System.Configuration;
using Microsoft.Ajax.Utilities;

namespace Moto_GP.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MapMenu()
        {
            return View();
        }

        public ActionResult BookSeats()
        {
            return View();
        }

        public ActionResult TicketRegistration()
        {
            return View();
        }

        [HttpPost]
        public ActionResult TicketRegistration(string otp)
        {
            int sentotp = (int)TempData["otpsent"];
            int userotp = Convert.ToInt32(otp);
            if (sentotp == userotp)
                return RedirectToAction("MapMenu", "Home");
            ViewBag.msg = "You have entered the wrong otp";
            return View();
        }

        [HttpPost]

        public ActionResult SendOTP(string email)
        {

            string res = "";
            try
            {
                SendEmail es = new SendEmail();
                int otp = es.GenerateOTP();
                bool b = es.SendMyEmail(email, "OTP to verify email", "Hello" +
                    ", This is your One time Password." + otp +
                    " Please don't share this OTP with anyone");
                if (b)
                    res = "SUCCESS";
                else
                {
                    res = "FAIL";
                }
                TempData["otpsent"] = otp;
            }
            catch (Exception ex)
            {
                res = "FAIL";
            }

            return Json(res, JsonRequestBehavior.AllowGet);
        }

    }
   }
