using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.Controllers
{
    public class GioiThieuController : Controller
    {
        // GET: GioiThieu
        public ActionResult GioiThieu()
        {
            TempData["Select-Menu-Item"] = 1;
            return View();
        }
    }
}