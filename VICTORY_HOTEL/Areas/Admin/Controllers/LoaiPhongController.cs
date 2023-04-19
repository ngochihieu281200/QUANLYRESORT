using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.LoaiPhong;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class LoaiPhongController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();

        [AuthorizeController]
        public ActionResult Index()
        {
            var DonGia = entity.DONGIAs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in DonGia)
            {
                list.Add(new SelectListItem() { Text = item.Gia.ToString(), Value = item.MaGia.ToString() });
            }
            ViewBag.DS_DonGia = list;
            ViewBag.LoaiPhong = (from lp in entity.LOAIPHONGs
                                 join dg in entity.DONGIAs on lp.MaGia equals dg.MaGia
                                 select lp).ToList();
            var MaLP = MaTuTangQuery.Matutang("LOAIPHONGs", "LP");
            ViewBag.MaLP = MaLP;

            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(LoaiPhongViewModel model)
        {
            var DonGia = entity.DONGIAs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in DonGia)
            {
                list.Add(new SelectListItem() { Text = item.Gia.ToString(), Value = item.MaGia.ToString() });
            }
            ViewBag.DS_DonGia = list;
            ViewBag.LoaiPhong = entity.LOAIPHONGs.ToList();
            var MaLP = MaTuTangQuery.Matutang("LOAIPHONGs", "LP");
            ViewBag.MaLP = MaLP;

            if (ModelState.IsValid)
            {
                var ma_LP = entity.LOAIPHONGs.Where(m => m.MaLP == model.MaLP).FirstOrDefault();
                //insert
                if (ma_LP == null)
                {
                    try
                    {
                        var cv = new LOAIPHONG()
                        {
                            MaLP = model.MaLP,
                            TenLoaiPhong = model.TenLoaiPhong,
                            MaGia=model.MaGia
                        };
                        entity.LOAIPHONGs.Add(cv);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.LoaiPhong = (from lp in entity.LOAIPHONGs
                                             join dg in entity.DONGIAs on lp.MaGia equals dg.MaGia
                                             select lp).ToList();
                        return View();
                    }
                    catch (Exception)
                    {
                         TempData["msg"] = ShowAlert.ShowError("", "Thêm mới loại phòng lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var cv = entity.LOAIPHONGs.Find(model.MaLP);
                        if (cv != null)
                        {
                            cv.TenLoaiPhong = model.TenLoaiPhong;
                            cv.MaGia = model.MaGia;
                        }
                        entity.Entry(cv).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.LoaiPhong = (from lp in entity.LOAIPHONGs
                                             join dg in entity.DONGIAs on lp.MaGia equals dg.MaGia
                                             select lp).ToList();
                        return View();
                    }
                    catch (Exception e)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Cập nhật lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
            }
            return View(model);
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Edit(string ID)
        {
            var model = entity.LOAIPHONGs.Find(ID);
            string[] str = new string[100];
            str[0] = model.MaLP;
            str[1] = model.TenLoaiPhong;
            str[2] = model.MaGia.ToString();
            return Json(str, JsonRequestBehavior.AllowGet);
        }

        [AuthorizeController]
        public ActionResult Delete(string Id)
        {
            var DonGia = entity.DONGIAs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in DonGia)
            {
                list.Add(new SelectListItem() { Text = item.Gia.ToString(), Value = item.MaGia.ToString() });
            }
            ViewBag.DS_DonGia = list;
            ViewBag.LoaiPhong = (from lp in entity.LOAIPHONGs
                                 join dg in entity.DONGIAs on lp.MaGia equals dg.MaGia
                                 select lp).ToList();
            var MaLP = MaTuTangQuery.Matutang("LOAIPHONGs", "LP");
            ViewBag.MaLP = MaLP;
            try
            {
                var model = entity.LOAIPHONGs.Find(Id);
                entity.LOAIPHONGs.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa loại phòng này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "LoaiPhong");
        }        
        
    }
}