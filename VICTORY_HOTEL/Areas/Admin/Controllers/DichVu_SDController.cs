using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.DichVu_SD;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class DichVu_SDController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/DichVu_SD
        [AuthorizeController]
        public ActionResult Index()
        {
            //dịch vụ
            var dv = entity.DICHVUs.ToList();
            List<SelectListItem> List_DV = new List<SelectListItem>();
            foreach (var item in dv)
            {
                List_DV.Add(new SelectListItem() { Text = item.TenDV, Value = item.MaDV });
            }
            ViewBag.List_DV = List_DV;
            //phòng
            var p = entity.PHONGs.ToList();
            List<SelectListItem> List_Phong = new List<SelectListItem>();
            foreach (var item in p)
            {
                List_Phong.Add(new SelectListItem() { Text = item.MaPhong, Value = item.MaPhong });
            }
            ViewBag.List_Phong = List_Phong;
            // ds DichVu_SD
            ViewBag.DICHVU_SD = (from dvsd in entity.DICHVU_SD
                                    join dvv in entity.DICHVUs on dvsd.MaDV equals dvv.MaDV
                                    join pp in entity.PHONGs on dvsd.MaPhong equals pp.MaPhong
                                    select dvsd).ToList();
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(DichVu_SDViewModel model)
        {
            //dịch vụ
            var dv = entity.DICHVUs.ToList();
            List<SelectListItem> List_DV = new List<SelectListItem>();
            foreach (var item in dv)
            {
                List_DV.Add(new SelectListItem() { Text = item.TenDV, Value = item.MaDV });
            }
            ViewBag.List_DV = List_DV;
            //phòng
            var p = entity.PHONGs.ToList();
            List<SelectListItem> List_Phong = new List<SelectListItem>();
            foreach (var item in p)
            {
                List_Phong.Add(new SelectListItem() { Text = item.MaPhong, Value = item.MaPhong });
            }
            ViewBag.List_Phong = List_Phong;
            // ds DichVu_SD
            ViewBag.DICHVU_SD = (from dvsd in entity.DICHVU_SD
                                 join dvv in entity.DICHVUs on dvsd.MaDV equals dvv.MaDV
                                 join pp in entity.PHONGs on dvsd.MaPhong equals pp.MaPhong
                                 select dvsd).ToList();

            if (ModelState.IsValid)
            {
                var pq = entity.DICHVU_SD.Where(m => m.MaDV == model.MaDV && m.MaPhong == model.MaPhong).FirstOrDefault();
                //insert
                if (pq == null)
                {
                    try
                    {
                        var cv = new DICHVU_SD()
                        {
                            MaDV = model.MaDV,
                            MaPhong = model.MaPhong,
                            SoLuong = model.SoLuong,
                            TrangThai = model.TrangThai
                        };
                        entity.DICHVU_SD.Add(cv);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.DICHVU_SD = (from dvsd in entity.DICHVU_SD
                                             join dvv in entity.DICHVUs on dvsd.MaDV equals dvv.MaDV
                                             join pp in entity.PHONGs on dvsd.MaPhong equals pp.MaPhong
                                             select dvsd).ToList();
                        return View();
                    }
                    catch (Exception)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới dịch vụ sử dụng lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        if (pq != null)
                        {
                            pq.SoLuong = model.SoLuong;
                            pq.TrangThai = model.TrangThai;
                            entity.Entry(pq).State = EntityState.Modified;
                            entity.SaveChanges();

                            TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                            ViewBag.DICHVU_SD = (from dvsd in entity.DICHVU_SD
                                                 join dvv in entity.DICHVUs on dvsd.MaDV equals dvv.MaDV
                                                 join pp in entity.PHONGs on dvsd.MaPhong equals pp.MaPhong
                                                 select dvsd).ToList();

                        }
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
            string[] data = ID.Split(',');
            string maDV = data[0].Trim();
            string maPhong = data[1].Trim();
            var model = entity.DICHVU_SD.Where(m => m.MaDV == maDV && m.MaPhong == maPhong).FirstOrDefault();

            string[] str = new string[100];
            str[0] = model.MaDV;
            str[1] = model.MaPhong;
            str[2] = model.SoLuong.ToString();
            str[3] = model.TrangThai.ToString();
            return Json(str, JsonRequestBehavior.AllowGet);
        }

        [AuthorizeController]
        public ActionResult Delete(string Id)
        {
            string[] data = Id.Split(',');
            string maDV = data[0].Trim();
            string maPhong = data[1].Trim();

            //dịch vụ
            var dv = entity.DICHVUs.ToList();
            List<SelectListItem> List_DV = new List<SelectListItem>();
            foreach (var item in dv)
            {
                List_DV.Add(new SelectListItem() { Text = item.TenDV, Value = item.MaDV });
            }
            ViewBag.List_DV = List_DV;
            //phòng
            var p = entity.PHONGs.ToList();
            List<SelectListItem> List_Phong = new List<SelectListItem>();
            foreach (var item in p)
            {
                List_Phong.Add(new SelectListItem() { Text = item.MaPhong, Value = item.MaPhong });
            }
            ViewBag.List_Phong = List_Phong;
            // ds DichVu_SD
            ViewBag.DICHVU_SD = (from dvsd in entity.DICHVU_SD
                                 join dvv in entity.DICHVUs on dvsd.MaDV equals dvv.MaDV
                                 join pp in entity.PHONGs on dvsd.MaPhong equals pp.MaPhong
                                 select dvsd).ToList();
            try
            {
                var model = entity.DICHVU_SD.Where(m => m.MaDV == maDV && m.MaPhong == maPhong).FirstOrDefault();
                entity.DICHVU_SD.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa dịch vụ sử dụng này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "DichVu_SD");
        }
    }
}