using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.NhanVien;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class NhanVienController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/NhanVien
        [AuthorizeController]
        public ActionResult Index()
        {           
            //get ds chuc vu
            var Chuc_Vu = entity.CHUCVUs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in Chuc_Vu)
            {
                list.Add(new SelectListItem() { Text = item.TenCV, Value = item.MaCV });
            }
            ViewBag.DS_ChucVu = list;
            //get list NhanVien
            ViewBag.NhanVien = entity.NHANVIENs.ToList();
            var Ma_KH = MaTuTangQuery.Matutang("NHANVIEN", "NV");
            ViewBag.Ma_KH = Ma_KH;
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(NhanVienViewModel model)
        {
            var Chuc_Vu = entity.CHUCVUs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in Chuc_Vu)
            {
                list.Add(new SelectListItem() { Text = item.TenCV, Value = item.MaCV });
            }
            ViewBag.DS_ChucVu = list;
            ViewBag.NhanVien = entity.NHANVIENs.ToList();
            var Ma_KH = MaTuTangQuery.Matutang("NHANVIEN", "NV");
            ViewBag.Ma_KH = Ma_KH;

            if (ModelState.IsValid)
            {
                var Ma_NV = entity.NHANVIENs.Where(m => m.MaNV == model.MaNV).FirstOrDefault();
                //insert
                if (Ma_NV == null)
                {
                    try
                    {
                        var nv = new NHANVIEN()
                        {
                            MaNV = model.MaNV,
                            TenNV = model.TenNV,
                            MaCV = model.MaCV,
                            NgaySinh = model.NgaySinh,
                            GioiTinh = model.GioiTinh,
                            DienThoai = model.DienThoai,
                            DiaChi = model.DiaChi
                        };
                        entity.NHANVIENs.Add(nv);
                        entity.SaveChanges();
                        
                        //Session["AlertMessage"] = "Thêm mới thành công.";
                        TempData["msg"] = ShowAlert.ShowSuccess("","Thêm mới thành công.");
                        ViewBag.NhanVien = entity.NHANVIENs.ToList();
                        return View();
                    }
                    catch (Exception)
                    {
                        //ModelState.AddModelError("", "Thêm mới nhân viên lỗi, vui lòng kiểm tra lại thông tin !");
                        TempData["msg"] = ShowAlert.ShowError("","Thêm mới nhân viên lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var nv = entity.NHANVIENs.Find(model.MaNV);
                        if (nv != null)
                        {
                            nv.TenNV = model.TenNV;
                            nv.MaCV = model.MaCV;
                            nv.NgaySinh = model.NgaySinh;
                            nv.GioiTinh = model.GioiTinh;
                            nv.DienThoai = model.DienThoai;
                            nv.DiaChi = model.DiaChi;
                        }
                        entity.Entry(nv).State = EntityState.Modified;
                        entity.SaveChanges();
                        
                        TempData["msg"] = ShowAlert.ShowSuccess("","Cập nhật thành công.");
                        //TempData["msg"] = "Cập nhật thành công.";
                        ViewBag.NhanVien = entity.NHANVIENs.ToList();
                        return View();
                    }
                    catch(Exception e)
                    {
                        TempData["msg"] = ShowAlert.ShowError("","Cập nhật lỗi, vui lòng kiểm tra lại thông tin !");
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
            var Chuc_Vu = entity.CHUCVUs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in Chuc_Vu)
            {
                list.Add(new SelectListItem() { Text = item.TenCV, Value = item.MaCV });
            }
            ViewBag.DS_ChucVu = list;
            ViewBag.NhanVien = entity.NHANVIENs.ToList();
            var Ma_KH = MaTuTangQuery.Matutang("NHANVIEN", "NV");
            ViewBag.Ma_KH = Ma_KH;
            try
            {
                var model = entity.NHANVIENs.Find(Id);
                entity.NHANVIENs.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                //Session["AlertMessage"] = "Xóa thành công.";
                TempData["msg"] = ShowAlert.ShowSuccess("","Xóa thành công.");
            }
            catch(Exception e)
            {
                //Session["AlertMessage"] = "Không thể xóa nhân viên này!";
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa nhân viên này!");
                entity.Dispose();
            }

            return RedirectToAction("Index","NhanVien");
        }
    }
}