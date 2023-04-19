using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.KhachHang;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class KhachHangController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/KhachHang
        [AuthorizeController]
        public ActionResult Index()
        {
            ViewBag.KhachHang = entity.KHACHHANGs.ToList();
            var Ma = MaTuTangQuery.Matutang("KHACHHANG", "KH");
            ViewBag.MaTuTang = Ma;
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(KhachHangViewModel model)
        {
            ViewBag.KhachHang = entity.KHACHHANGs.ToList();
            var Ma = MaTuTangQuery.Matutang("KHACHHANG", "KH");
            ViewBag.MaTuTang = Ma;

            if (ModelState.IsValid)
            {
                var Ma_KH = entity.KHACHHANGs.Where(m => m.MaKH == model.MaKH).FirstOrDefault();
                //insert
                if (Ma_KH == null)
                {
                    try
                    {
                        var kh = new KHACHHANG()
                        {
                            MaKH = model.MaKH,
                            TenKH = model.TenKH,
                            NgaySinh = model.NgaySinh,
                            GioiTinh = model.GioiTinh,
                            DienThoai = model.DienThoai,
                            DiaChi = model.DiaChi,
                            So_CMND = model.So_CMND,
                            Email = model.Email,
                            GhiChu = model.GhiChu,
                            TrangThai = model.TrangThai
                        };
                        entity.KHACHHANGs.Add(kh);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.KhachHang = entity.KHACHHANGs.ToList();
                        return View();
                    }
                    catch (Exception e)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới khách hàng lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var kh = entity.KHACHHANGs.Find(model.MaKH);
                        if (kh != null)
                        {
                            kh.TenKH = model.TenKH;
                            kh.NgaySinh = model.NgaySinh;
                            kh.GioiTinh = model.GioiTinh;
                            kh.DienThoai = model.DienThoai;
                            kh.DiaChi = model.DiaChi;
                            kh.So_CMND = model.So_CMND;
                            kh.Email = model.Email;
                            kh.GhiChu = model.GhiChu;
                            kh.TrangThai = model.TrangThai;
                        }
                        entity.Entry(kh).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.KhachHang = entity.KHACHHANGs.ToList();
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
            ViewBag.KhachHang = entity.KHACHHANGs.ToList();
            var Ma = MaTuTangQuery.Matutang("KHACHHANG", "KH");
            ViewBag.MaTuTang = Ma;
            try
            {
                var model = entity.KHACHHANGs.Find(Id);
                entity.KHACHHANGs.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa nhân viên này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "KhachHang");
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Edit(string Id)
        {
            var model = entity.KHACHHANGs.Find(Id);
            string[] str = new string[100];
            str[0] = model.MaKH;
            str[1] = model.TenKH;
            str[2] = model.NgaySinh.ToString();
            str[3] = model.GioiTinh;
            str[4] = model.DiaChi;
            str[5] = model.DienThoai;
            str[6] = model.So_CMND;
            str[7] = model.Email;
            str[8] = model.GhiChu;
            str[9] = model.TrangThai.ToString();
            return Json(str, JsonRequestBehavior.AllowGet);
        }
    }
}