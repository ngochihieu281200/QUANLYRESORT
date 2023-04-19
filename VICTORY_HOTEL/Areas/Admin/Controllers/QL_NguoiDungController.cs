using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.QL_NguoiDung;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class QL_NguoiDungController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/QL_NguoiDung
        [AuthorizeController]
        public ActionResult Index()
        {
            //get ds nhan vien
            var nv = entity.NHANVIENs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in nv)
            {
                list.Add(new SelectListItem() { Text = item.TenNV, Value = item.MaNV });
            }
            ViewBag.DS_NhanVien = list;
            //get list nguoi dung
            ViewBag.QL_NguoiDung = entity.QL_NguoiDung.ToList();
            Session["Edit"] = 0;
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(QL_NguoiDungViewModel model)
        {
            //get ds nhan vien
            var nv = entity.NHANVIENs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in nv)
            {
                list.Add(new SelectListItem() { Text = item.TenNV, Value = item.MaNV });
            }
            ViewBag.DS_NhanVien = list;
            //get list nguoi dung
            ViewBag.QL_NguoiDung = entity.QL_NguoiDung.ToList();

            if (ModelState.IsValid)
            {
                if (int.Parse(Session["Edit"].ToString()) == 0)
                {
                    var id_NguoiDung = entity.QL_NguoiDung.Where(m => m.IDNguoiDung == model.IDNguoiDung).FirstOrDefault();
                    //insert
                    if (id_NguoiDung == null)
                    {
                        try
                        {
                            var nd = new QL_NguoiDung()
                            {
                                IDNguoiDung = model.IDNguoiDung,
                                MatKhau = model.MatKhau,
                                MaNV = model.MaNV,
                                HoatDong = model.HoatDong
                            };
                            entity.QL_NguoiDung.Add(nd);
                            entity.SaveChanges();

                            TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                            ViewBag.QL_NguoiDung = entity.QL_NguoiDung.ToList();
                            return View();
                        }
                        catch (Exception)
                        {
                            TempData["msg"] = ShowAlert.ShowError("", "Thêm mới người dùng lỗi, vui lòng kiểm tra lại thông tin !");
                            entity.Dispose();
                            return View(model);
                        }
                    }
                    else
                    {
                        //trung 
                        TempData["msg"] = ShowAlert.Show("Trùng tên đăng nhập.");
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var nd = entity.QL_NguoiDung.Find(model.IDNguoiDung);
                        if (nd != null)
                        {
                            nd.MatKhau = model.MatKhau;
                            nd.MaNV = model.MaNV;
                            nd.HoatDong = model.HoatDong;
                        }
                        entity.Entry(nd).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.QL_NguoiDung = entity.QL_NguoiDung.ToList();
                        Session["Edit"] = 0;
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
            //get ds nhan vien
            var nv = entity.NHANVIENs.ToList();
            List<SelectListItem> list = new List<SelectListItem>();
            foreach (var item in nv)
            {
                list.Add(new SelectListItem() { Text = item.TenNV, Value = item.MaNV });
            }
            ViewBag.DS_NhanVien = list;
            //get list nguoi dung
            ViewBag.QL_NguoiDung = entity.QL_NguoiDung.ToList();
            try
            {
                var model = entity.QL_NguoiDung.Find(Id);
                entity.QL_NguoiDung.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa nhân viên này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "QL_NguoiDung");
        }
        [HttpPost]
        [AuthorizeController]
        public ActionResult Edit(string Id)
        {
            var model = entity.QL_NguoiDung.Find(Id);
            string[] str = new string[100];
            str[0] = model.IDNguoiDung;
            str[1] = model.MatKhau;
            str[2] = model.MaNV;
            str[3] = model.HoatDong.ToString();
            Session["Edit"] = 1;
            return Json(str, JsonRequestBehavior.AllowGet);
        }
    }
}