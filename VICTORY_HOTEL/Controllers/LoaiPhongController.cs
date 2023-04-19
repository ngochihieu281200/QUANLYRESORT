using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
//using VICTORY_HOTEL.Models.VictoryHotelModel;

namespace VICTORY_HOTEL.Controllers
{
    public class LoaiPhongController : Controller
    {
        //VictoryHotelDbContext db = new VictoryHotelDbContext();
        VictoryHotelEntities db = new VictoryHotelEntities();
        // GET: LoaiPhong
        public ActionResult Index()
        {
            TempData["Select-Menu-Item"] = 2;
            ViewBag.LoaiPhong = db.LOAIPHONGs
               .Where(a => a.CHITIET_PHONG.Count() >= 4)
               .OrderBy(a => Guid.NewGuid()).ToList();
            return View();
        }

        public ActionResult ChiTiet(string Id)
        {
            TempData["Select-Menu-Item"] = 2;
            ViewBag.LoaiPhong = db.LOAIPHONGs
               .Where(a => a.MaLP == Id)
               .OrderBy(a => Guid.NewGuid()).ToList();
            var model = db.MOTA_PHONG.Find(Id);
            return View("ChiTietPhong", model);
        }

        public ActionResult DatPhong_Buoc3()
        {
            return View();
        }

        public ActionResult Search(String Keywords)
        {            
            ViewBag.Keywords = Keywords;
            var model = (from lp in db.LOAIPHONGs
                         join dg in db.DONGIAs on lp.MaGia equals dg.MaGia
                         select lp).ToList();
            try
            {
                long? gia = long.Parse(Keywords);
                model = (from lp in db.LOAIPHONGs
                         join dg in db.DONGIAs on lp.MaGia equals dg.MaGia
                         where dg.Gia <= gia
                         select lp).ToList();
            }
            catch (Exception e)
            {
                model = (from lp in db.LOAIPHONGs
                         join dg in db.DONGIAs on lp.MaGia equals dg.MaGia
                         //join ctp in db.CHITIET_PHONG on lp.MaLP equals ctp.MaLP
                         where lp.TenLoaiPhong.Contains(Keywords)
                         //|| ctp.Ten_CTP.Contains(Keywords)
                         select lp).ToList();
            }
            return View("SearchLoaiPhong", model);
        }
    }
}