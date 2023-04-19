using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Models;
//using VICTORY_HOTEL.Models.VictoryHotelModel;

namespace VICTORY_HOTEL.Controllers
{
    public class HomeController : Controller
    {
        //VictoryHotelDbContext db = new VictoryHotelDbContext();
        VictoryHotelEntities db = new VictoryHotelEntities();
        public ActionResult Index()
        {
            TempData["Select-Menu-Item"] = 0;
            ViewBag.LoaiPhong = db.LOAIPHONGs
                .Where(a => a.MOTA_PHONG.Count >= 4)
                .OrderBy(a => Guid.NewGuid()).ToList();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult DatPhong()
        {
            ViewBag.Message = "Đặt Phòng ";

            return View();
        }
        [HttpPost]
        public ActionResult Set_cerrunt_menu_item(string Id)
        {
            Session["Select-Menu-Item"] = Id;
            return View();
        }
    }
}