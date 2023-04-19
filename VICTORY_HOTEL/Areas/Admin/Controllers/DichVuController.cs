using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.DichVu;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class DichVuController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/DichVu
        [AuthorizeController]
        public ActionResult Index()
        {
            ViewBag.DichVu = entity.DICHVUs.ToList();
            var Ma_DV = MaTuTangQuery.Matutang("DICHVU", "DV");
            ViewBag.Ma_DV = Ma_DV;
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(DichVuViewModel model)
        {
            ViewBag.DichVu = entity.DICHVUs.ToList();
            var Ma_DV = MaTuTangQuery.Matutang("DICHVU", "DV");
            ViewBag.Ma_DV = Ma_DV;

            if (ModelState.IsValid)
            {
                var ma_DV= entity.DICHVUs.Where(m => m.MaDV == model.MaDV).FirstOrDefault();
                //insert
                if (ma_DV == null)
                {
                    try
                    {
                        var cv = new DICHVU()
                        {
                            MaDV = model.MaDV,
                            TenDV = model.TenDV
                        };
                        entity.DICHVUs.Add(cv);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.DichVu = entity.DICHVUs.ToList();
                        return View();
                    }
                    catch (Exception)
                    {
                        //ModelState.AddModelError("", "Thêm mới nhân viên lỗi, vui lòng kiểm tra lại thông tin !");
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới dịch vụ lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var cv = entity.DICHVUs.Find(model.MaDV);
                        if (cv != null)
                        {
                            cv.TenDV = model.TenDV;
                        }
                        entity.Entry(cv).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.DichVu = entity.DICHVUs.ToList();
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
            ViewBag.DichVu = entity.DICHVUs.ToList();
            var Ma_DV = MaTuTangQuery.Matutang("DICHVU", "DV");
            ViewBag.Ma_DV = Ma_DV;
            try
            {
                var model = entity.DICHVUs.Find(Id);
                entity.DICHVUs.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa dịch vụ này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "DichVu");
        }
    }
}