using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Models;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class TableExampleController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
                
        public ActionResult Index()
        {
            //get list NhanVien
            ViewBag.NhanVien = entity.NHANVIENs.ToList();
            return View();
        }
    }
}