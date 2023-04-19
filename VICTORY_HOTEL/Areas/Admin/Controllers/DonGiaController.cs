using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.DonGia;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class DonGiaController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/DonGia
        [AuthorizeController]
        public ActionResult Index()
        {
            ViewBag.DonGia = entity.DONGIAs.ToList();
            var Ma = entity.DONGIAs.ToList().LastOrDefault();
            ViewBag.Matutang = (Ma.MaGia+1).ToString();
            return View();
        }
        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(DonGiaViewModel model)
        {
            ViewBag.DonGia = entity.DONGIAs.ToList();
            var Ma = entity.DONGIAs.ToList().LastOrDefault();
            ViewBag.Matutang = (Ma.MaGia + 1).ToString();

            if (ModelState.IsValid)
            {
                var ma_DG = entity.DONGIAs.Where(m => m.MaGia == model.MaGia).FirstOrDefault();
                //insert
                if (ma_DG == null)
                {
                    try
                    {
                        var cv = new DONGIA()
                        {
                            Gia = model.Gia
                        };
                        entity.DONGIAs.Add(cv);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.DonGia = entity.DONGIAs.ToList();
                        return View();
                    }
                    catch (Exception e)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới đơn giá lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var dg = entity.DONGIAs.Find(model.MaGia);
                        if (dg != null)
                        {
                            dg.Gia = model.Gia;
                        }
                        entity.Entry(dg).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.DonGia = entity.DONGIAs.ToList();
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

        [AuthorizeController]
        public ActionResult Delete(string Id)
        {
            ViewBag.DonGia = entity.DONGIAs.ToList();
            var Ma = entity.DONGIAs.ToList().LastOrDefault();
            ViewBag.Matutang = (Ma.MaGia + 1).ToString();
            try
            {
                var model = entity.DONGIAs.Find(long.Parse(Id));
                entity.DONGIAs.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa đơn giá này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "DonGia");
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Edit(string Id)
        {
            var model = entity.DONGIAs.Find(Int64.Parse(Id));
            string[] str = new string[100];
            str[0] = model.MaGia.ToString();
            str[1] = model.Gia.ToString();
            return Json(str, JsonRequestBehavior.AllowGet);
        }
    }
}