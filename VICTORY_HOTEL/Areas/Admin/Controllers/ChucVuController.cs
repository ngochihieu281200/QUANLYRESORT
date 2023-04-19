using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.ChucVu;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class ChucVuController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/ChucVu
        [AuthorizeController]
        public ActionResult Index()
        {
            ViewBag.ChucVu = entity.CHUCVUs.ToList();
            var Ma_CV = MaTuTangQuery.Matutang("CHUCVU", "CV");
            ViewBag.Ma_CV = Ma_CV;
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(ChucVuViewModel model)
        {
            ViewBag.ChucVu = entity.CHUCVUs.ToList();
            var Ma_CV = MaTuTangQuery.Matutang("CHUCVU", "CV");
            ViewBag.Ma_CV = Ma_CV;

            if (ModelState.IsValid)
            {
                var ma_CV = entity.CHUCVUs.Where(m => m.MaCV == model.MaCV).FirstOrDefault();
                //insert
                if (ma_CV == null)
                {
                    try
                    {
                        var cv = new CHUCVU()
                        {
                            MaCV = model.MaCV,
                            TenCV = model.TenCV
                        };
                        entity.CHUCVUs.Add(cv);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.ChucVu = entity.CHUCVUs.ToList();
                        return View();
                    }
                    catch (Exception)
                    {
                        //ModelState.AddModelError("", "Thêm mới nhân viên lỗi, vui lòng kiểm tra lại thông tin !");
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới chức vụ lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var cv = entity.CHUCVUs.Find(model.MaCV);
                        if (cv != null)
                        {
                            cv.TenCV = model.TenCV;                            
                        }
                        entity.Entry(cv).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.ChucVu = entity.CHUCVUs.ToList();
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
            ViewBag.ChucVu = entity.CHUCVUs.ToList();
            var Ma_CV = MaTuTangQuery.Matutang("CHUCVU", "CV");
            ViewBag.Ma_KH = Ma_CV;
            try
            {
                var model = entity.CHUCVUs.Find(Id);
                entity.CHUCVUs.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa chức vụ này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "ChucVu");
        }
    }
}