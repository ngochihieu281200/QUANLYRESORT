using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.ChiTiet_Phong;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class ChiTiet_PhongController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/ChiTiet_Phong
        [AuthorizeController]
        public ActionResult Index()
        {
            ViewBag.ChiTiet_Phong = entity.CHITIET_PHONG.ToList();
            var Ma = MaTuTangQuery.Matutang("CHITIET_PHONG", "CTP");
            ViewBag.MaTuTang = Ma;
            //ds loai phong
            var ds = entity.LOAIPHONGs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in ds)
            {
                list.Add(new SelectListItem() { Text = item.TenLoaiPhong, Value = item.MaLP });
            }
            ViewBag.DS_LoaiPhong = list;
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(ChiTiet_PhongViewModel model)
        {
            ViewBag.ChiTiet_Phong = entity.CHITIET_PHONG.ToList();
            var Ma = MaTuTangQuery.Matutang("CHITIET_PHONG", "CTP");
            ViewBag.MaTuTang = Ma;
            //ds loai phong
            var ds = entity.LOAIPHONGs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in ds)
            {
                list.Add(new SelectListItem() { Text = item.TenLoaiPhong, Value = item.MaLP });
            }
            ViewBag.DS_LoaiPhong = list;

            if (ModelState.IsValid)
            {
                var Ma_KH = entity.CHITIET_PHONG.Where(m => m.Ma_CTP == model.Ma_CTP).FirstOrDefault();
                //insert
                if (Ma_KH == null)
                {
                    try
                    {
                        var kh = new CHITIET_PHONG()
                        {
                            Ma_CTP = model.Ma_CTP,
                            Ten_CTP = model.Ten_CTP,
                            GiaChiTiet = model.GiaChiTiet,
                            MaLP = model.MaLP
                        };
                        entity.CHITIET_PHONG.Add(kh);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.ChiTiet_Phong = entity.CHITIET_PHONG.ToList();
                        return View();
                    }
                    catch (Exception e)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới chi tiết phòng lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var kh = entity.CHITIET_PHONG.Find(model.Ma_CTP);
                        if (kh != null)
                        {
                            kh.Ten_CTP = model.Ten_CTP;
                            kh.GiaChiTiet = model.GiaChiTiet;
                            kh.MaLP = model.MaLP;
                        }
                        entity.Entry(kh).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.ChiTiet_Phong = entity.CHITIET_PHONG.ToList();
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
            ViewBag.ChiTiet_Phong = entity.CHITIET_PHONG.ToList();
            var Ma = MaTuTangQuery.Matutang("CHITIET_PHONG", "CTP");
            ViewBag.MaTuTang = Ma;
            //ds loai phong
            var ds = entity.LOAIPHONGs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in ds)
            {
                list.Add(new SelectListItem() { Text = item.TenLoaiPhong, Value = item.MaLP });
            }
            ViewBag.DS_LoaiPhong = list;
            try
            {
                var model = entity.CHITIET_PHONG.Find(Id);
                entity.CHITIET_PHONG.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa chi tiết phòng này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "ChiTiet_Phong");
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Edit(string Id)
        {
            var model = entity.CHITIET_PHONG.Find(Id);
            string[] str = new string[100];
            str[0] = model.Ma_CTP;
            str[1] = model.Ten_CTP;
            str[2] = model.GiaChiTiet.ToString();
            str[3] = model.MaLP;
            
            return Json(str, JsonRequestBehavior.AllowGet);
        }
    }
}