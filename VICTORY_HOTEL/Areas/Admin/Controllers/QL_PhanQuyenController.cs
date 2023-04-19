using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.QL_PhanQuyen;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class QL_PhanQuyenController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        [AuthorizeController]
        public ActionResult Index()
        {
            //màn hình
            var DM_ManHinh = entity.DM_ManHinh.ToList();
            List<SelectListItem> List_ManHinh = new List<SelectListItem>();
            foreach (var item in DM_ManHinh)
            {
                List_ManHinh.Add(new SelectListItem() { Text = item.TenManHinh, Value = item.MaManHinh });
            }
            ViewBag.List_ManHinh = List_ManHinh;
            //nhóm người dùng
            var QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
            List<SelectListItem> List_NhomNguoiDung = new List<SelectListItem>();
            foreach (var item in QL_NhomNguoiDung)
            {
                List_NhomNguoiDung.Add(new SelectListItem() { Text = item.TenNhom, Value = item.MaNhom });
            }
            ViewBag.List_NhomNguoiDung = List_NhomNguoiDung;
            // ds QL_PhanQuyen
            ViewBag.QL_PhanQuyen = (from qlpq in entity.QL_PhanQuyen
                                    join mh in entity.DM_ManHinh on qlpq.MaManHinh equals mh.MaManHinh
                                    join nnd in entity.QL_NhomNguoiDung on qlpq.MaNhomNguoiDung equals nnd.MaNhom
                                    select qlpq).ToList();
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(QL_PhanQuyenViewModel model)
        {
            //màn hình
            var DM_ManHinh = entity.DM_ManHinh.ToList();
            List<SelectListItem> List_ManHinh = new List<SelectListItem>();
            foreach (var item in DM_ManHinh)
            {
                List_ManHinh.Add(new SelectListItem() { Text = item.TenManHinh, Value = item.MaManHinh });
            }
            ViewBag.List_ManHinh = List_ManHinh;
            //nhóm người dùng
            var QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
            List<SelectListItem> List_NhomNguoiDung = new List<SelectListItem>();
            foreach (var item in QL_NhomNguoiDung)
            {
                List_NhomNguoiDung.Add(new SelectListItem() { Text = item.TenNhom, Value = item.MaNhom });
            }
            ViewBag.List_NhomNguoiDung = List_NhomNguoiDung;
            // ds QL_PhanQuyen
            ViewBag.QL_PhanQuyen = (from qlpq in entity.QL_PhanQuyen
                                    join mh in entity.DM_ManHinh on qlpq.MaManHinh equals mh.MaManHinh
                                    join nnd in entity.QL_NhomNguoiDung on qlpq.MaNhomNguoiDung equals nnd.MaNhom
                                    select qlpq).ToList();

            if (ModelState.IsValid)
            {
                var pq =  entity.QL_PhanQuyen.Where(m => m.MaManHinh == model.MaManHinh && m.MaNhomNguoiDung == model.MaNhomNguoiDung).FirstOrDefault();
                //insert
                if (pq == null)
                {
                    try
                    {
                        var cv = new QL_PhanQuyen()
                        {
                            MaManHinh = model.MaManHinh,
                            MaNhomNguoiDung = model.MaNhomNguoiDung,
                            CoQuyen = model.CoQuyen
                        };
                        entity.QL_PhanQuyen.Add(cv);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.QL_PhanQuyen = (from qlpq in entity.QL_PhanQuyen
                                                join mh in entity.DM_ManHinh on qlpq.MaManHinh equals mh.MaManHinh
                                                join nnd in entity.QL_NhomNguoiDung on qlpq.MaNhomNguoiDung equals nnd.MaNhom
                                                select qlpq).ToList();
                        return View();
                    }
                    catch (Exception)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới phân quyền lỗi, vui lòng kiểm tra lại thông tin !");
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
                            pq.CoQuyen = model.CoQuyen;
                            entity.Entry(pq).State = EntityState.Modified;
                            entity.SaveChanges();

                            TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                            ViewBag.QL_PhanQuyen = (from qlpq in entity.QL_PhanQuyen
                                                    join mh in entity.DM_ManHinh on qlpq.MaManHinh equals mh.MaManHinh
                                                    join nnd in entity.QL_NhomNguoiDung on qlpq.MaNhomNguoiDung equals nnd.MaNhom
                                                    select qlpq).ToList();

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
            string maNhomNguoiDung = data[0].Trim();
            string maManHinh = data[1].Trim();
            var model = entity.QL_PhanQuyen.Where(m => m.MaManHinh == maManHinh && m.MaNhomNguoiDung == maNhomNguoiDung).FirstOrDefault();
            
            string[] str = new string[100];
            str[0] = model.MaNhomNguoiDung;
            str[1] = model.MaManHinh;
            str[2] = model.CoQuyen.ToString();
            return Json(str, JsonRequestBehavior.AllowGet);
        }

        [AuthorizeController]
        public ActionResult Delete(string Id)
        {
            string[] data = Id.Split(',');
            string maNhomNguoiDung = data[0].Trim();
            string maManHinh = data[1].Trim();

            //màn hình
            var DM_ManHinh = entity.DM_ManHinh.ToList();
            List<SelectListItem> List_ManHinh = new List<SelectListItem>();
            foreach (var item in DM_ManHinh)
            {
                List_ManHinh.Add(new SelectListItem() { Text = item.TenManHinh, Value = item.MaManHinh });
            }
            ViewBag.List_ManHinh = List_ManHinh;
            //nhóm người dùng
            var QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
            List<SelectListItem> List_NhomNguoiDung = new List<SelectListItem>();
            foreach (var item in QL_NhomNguoiDung)
            {
                List_NhomNguoiDung.Add(new SelectListItem() { Text = item.TenNhom, Value = item.MaNhom });
            }
            ViewBag.List_NhomNguoiDung = List_NhomNguoiDung;
            // ds QL_PhanQuyen
            ViewBag.QL_PhanQuyen = (from qlpq in entity.QL_PhanQuyen
                                    join mh in entity.DM_ManHinh on qlpq.MaManHinh equals mh.MaManHinh
                                    join nnd in entity.QL_NhomNguoiDung on qlpq.MaNhomNguoiDung equals nnd.MaNhom
                                    select qlpq).ToList();
            try
            {
                var model = entity.QL_PhanQuyen.Where(m => m.MaManHinh == maManHinh && m.MaNhomNguoiDung == maNhomNguoiDung).FirstOrDefault();
                entity.QL_PhanQuyen.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa phân quyền này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "QL_PhanQuyen");
        }
    }
}