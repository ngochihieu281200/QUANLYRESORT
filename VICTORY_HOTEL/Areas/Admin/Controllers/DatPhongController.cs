using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class DatPhongController : Controller
    {
        // GET: Admin/DatPhong
        [AuthorizeController]
        public ActionResult Index()
        {
            return View();
        }
    }
}