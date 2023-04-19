using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.QL_NhomNguoiDung;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class QL_NhomNguoiDungController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/QL_NhomNguoiDung
        [AuthorizeController]
        public ActionResult Index()
        {            
            ViewBag.QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
            var Ma = MaTuTangQuery.Matutang("QL_NhomNguoiDung", "NH");
            ViewBag.MaNhom = Ma;
            return View();
        }
        [HttpPost]
        public ActionResult Index(QL_NhomNguoiDungViewModel model)
        {
            ViewBag.QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
            var Ma = MaTuTangQuery.Matutang("QL_NhomNguoiDung", "NH");
            ViewBag.MaNhom = Ma;

            if (ModelState.IsValid)
            {
                var ma_Nhom = entity.QL_NhomNguoiDung.Where(m => m.MaNhom == model.MaNhom).FirstOrDefault();
                //insert
                if (ma_Nhom == null)
                {
                    try
                    {
                        var cv = new QL_NhomNguoiDung()
                        {
                            MaNhom = model.MaNhom,
                            TenNhom = model.TenNhom,
                            GhiChu = model.GhiChu
                        };
                        entity.QL_NhomNguoiDung.Add(cv);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
                        return View();
                    }
                    catch (Exception)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới nhóm người dùng lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var cv = entity.QL_NhomNguoiDung.Find(model.MaNhom);
                        if (cv != null)
                        {
                            cv.TenNhom = model.TenNhom;
                            cv.GhiChu = model.GhiChu;
                        }
                        entity.Entry(cv).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
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
            var model = entity.QL_NhomNguoiDung.Find(ID);
            string[] str = new string[100];
            str[0] = model.MaNhom;
            str[1] = model.TenNhom;
            str[2] = model.GhiChu;
            return Json(str, JsonRequestBehavior.AllowGet);
        }

        [AuthorizeController]
        public ActionResult Delete(string Id)
        {
            ViewBag.QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
            var Ma = MaTuTangQuery.Matutang("QL_NhomNguoiDung", "NH");
            ViewBag.MaNhom = Ma;
            try
            {
                var model = entity.QL_NhomNguoiDung.Find(Id);
                entity.QL_NhomNguoiDung.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa nhóm người dùng này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "QL_NhomNguoiDung");
        }
    }
}