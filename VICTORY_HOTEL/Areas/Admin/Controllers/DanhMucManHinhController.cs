using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.DM_ManHinh;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class DanhMucManHinhController : Controller
    {
        
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/DanhMucManHinh
        [AuthorizeController]
        public ActionResult Index()
        {
            ViewBag.DM_ManHinh = entity.DM_ManHinh.ToList();
            var Ma = MaTuTangQuery.Matutang("DM_ManHinh", "SF");
            ViewBag.MaManHinh = Ma;
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(DM_ManHinhViewModel model)
        {
            ViewBag.DM_ManHinh = entity.DM_ManHinh.ToList();
            var Ma = MaTuTangQuery.Matutang("DM_ManHinh", "SF");
            ViewBag.MaManHinh = Ma;

            if (ModelState.IsValid)
            {
                var ma_MH = entity.DM_ManHinh.Where(m => m.MaManHinh == model.MaManHinh).FirstOrDefault();
                //insert
                if (ma_MH == null)
                {
                    try
                    {
                        var mh = new DM_ManHinh()
                        {
                            MaManHinh = model.MaManHinh,
                            TenManHinh = model.TenManHinh
                        };
                        entity.DM_ManHinh.Add(mh);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.DM_ManHinh = entity.DM_ManHinh.ToList();
                        return View();
                    }
                    catch (Exception)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới màn hình lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var cv = entity.DM_ManHinh.Find(model.MaManHinh);
                        if (cv != null)
                        {
                            cv.TenManHinh = model.TenManHinh;
                        }
                        entity.Entry(cv).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.DM_ManHinh = entity.DM_ManHinh.ToList();
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
            ViewBag.DM_ManHinh = entity.DM_ManHinh.ToList();
            var ma = MaTuTangQuery.Matutang("DM_ManHinh", "SF");
            ViewBag.MaManHinh = ma;
            try
            {
                var model = entity.DM_ManHinh.Find(Id);
                entity.DM_ManHinh.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa màn hình này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "DanhMucManHinh");
        }
    }
}