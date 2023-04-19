using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.Phong;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class PhongController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/Phong
        [AuthorizeController]
        public ActionResult Index()
        {            
            var Ma = MaTuTangQuery.Matutang("PHONG", "PH");
            ViewBag.MaTuTang = Ma;
            //get ds loai phong
            var list_lp = entity.LOAIPHONGs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in list_lp)
            {
                list.Add(new SelectListItem() { Text = item.TenLoaiPhong, Value = item.MaLP });
            }
            ViewBag.DS_LoaiPhong = list;
            ViewBag.Phong = (from p in entity.PHONGs
                                 join lp in entity.LOAIPHONGs on p.MaLP equals lp.MaLP
                                 select p).ToList();
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(PhongViewModel model)
        {
            var Ma = MaTuTangQuery.Matutang("PHONG", "PH");
            ViewBag.MaTuTang = Ma;
            //get ds loai phong
            var list_lp = entity.LOAIPHONGs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in list_lp)
            {
                list.Add(new SelectListItem() { Text = item.TenLoaiPhong, Value = item.MaLP });
            }
            ViewBag.DS_LoaiPhong = list;
            ViewBag.Phong = (from p in entity.PHONGs
                             join lp in entity.LOAIPHONGs on p.MaLP equals lp.MaLP
                             select p).ToList();

            if (ModelState.IsValid)
            {
                var Ma_P = entity.PHONGs.Where(m => m.MaPhong == model.MaPhong).FirstOrDefault();
                //insert
                if (Ma_P == null)
                {
                    try
                    {
                        var kh = new PHONG()
                        {
                            MaPhong = model.MaPhong,
                            MaLP = model.MaLP,
                            HienTrang = model.HienTrang,
                            So_DT_Phong = model.So_DT_Phong,
                            SoNguoi_Max = model.SoNguoi_Max,
                            GhiChu = model.GhiChu,
                            TienPhatSinh = model.TienPhatSinh
                        };
                        entity.PHONGs.Add(kh);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới phòng thành công.");
                        ViewBag.Phong = (from p in entity.PHONGs
                                         join lp in entity.LOAIPHONGs on p.MaLP equals lp.MaLP
                                         select p).ToList();
                        return View();
                    }
                    catch (Exception e)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới phòng lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var kh = entity.PHONGs.Find(model.MaPhong);
                        if (kh != null)
                        {
                            kh.MaLP = model.MaLP;
                            kh.HienTrang = model.HienTrang;
                            kh.So_DT_Phong = model.So_DT_Phong;
                            kh.SoNguoi_Max = model.SoNguoi_Max;
                            kh.GhiChu = model.GhiChu;
                            kh.TienPhatSinh = model.TienPhatSinh;
                        }
                        entity.Entry(kh).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.Phong = (from p in entity.PHONGs
                                         join lp in entity.LOAIPHONGs on p.MaLP equals lp.MaLP
                                         select p).ToList();
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
            var Ma = MaTuTangQuery.Matutang("PHONG", "PH");
            ViewBag.MaTuTang = Ma;
            //get ds loai phong
            var list_lp = entity.LOAIPHONGs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in list_lp)
            {
                list.Add(new SelectListItem() { Text = item.TenLoaiPhong, Value = item.MaLP });
            }
            ViewBag.DS_LoaiPhong = list;
            ViewBag.Phong = (from p in entity.PHONGs
                             join lp in entity.LOAIPHONGs on p.MaLP equals lp.MaLP
                             select p).ToList();
            try
            {
                var model = entity.PHONGs.Find(Id);
                entity.PHONGs.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa phòng này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "Phong");
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Edit(string Id)
        {
            var model = entity.PHONGs.Find(Id);
            string[] str = new string[100];
            str[0] = model.MaPhong;
            str[1] = model.MaLP;
            str[2] = model.HienTrang;
            str[3] = model.So_DT_Phong;
            str[4] = model.SoNguoi_Max.ToString();
            str[5] = model.GhiChu;
            str[6] = model.TienPhatSinh.ToString();
            return Json(str, JsonRequestBehavior.AllowGet);
        }
    }
}