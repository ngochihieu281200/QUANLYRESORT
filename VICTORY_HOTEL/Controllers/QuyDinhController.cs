using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.Controllers
{
    public class QuyDinhController : Controller
    {
        // GET: QuyDinh
        public ActionResult Index()
        {
            TempData["Select-Menu-Item"] = 5;
            return View();
        }
    }
}