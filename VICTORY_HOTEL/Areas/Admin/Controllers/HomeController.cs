using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class HomeController : Controller
    {
        // GET: Admin/Admin       
        public ActionResult Index()
        {
            if (Session["UserIDAdmin"] != null)
                return View();
            return RedirectToAction("Index", "NotificationAuthorize");
        }
    }
}