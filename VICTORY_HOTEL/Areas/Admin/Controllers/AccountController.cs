using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Models;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class AccountController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/Login
        public ActionResult Login()
        {
            if (Session["UserIDAdmin"] != null)
            {
                return RedirectToAction("Index", "Home");
            }
            else
                return View();
        }

        [HttpPost]
        public ActionResult Login(String UserName, String Password)
        {
            var user = entity.QL_NguoiDung.Where(u => u.IDNguoiDung == UserName && u.MatKhau == Password).FirstOrDefault();
            if (user != null)
            {
                //Kiểm tra hoạt động
                user = entity.QL_NguoiDung.Where(u => u.IDNguoiDung == UserName && u.MatKhau == Password && u.HoatDong==true).FirstOrDefault();
                if (user != null)
                {
                    Session["UserIDAdmin"] = user.IDNguoiDung.ToString();
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    ModelState.AddModelError("", "Tài khoản đang khóa!");
                    return View();
                }
            }
            else
            {
                ModelState.AddModelError("", "Sai thông tin đăng nhập!");
            }
            return View();
        }

        public ActionResult Logoff()
        {
            //Kiểm tra đăng nhập
            if (Session["UserIDAdmin"] != null)
            {
                Session["UserIDAdmin"] = null;
                return RedirectToAction("Login");
            }            
            return RedirectToAction("Login");
        }
        public ActionResult AccountLogin()
        {
            if (Session["UserIDAdmin"] != null)
            {
                string UserName = Session["UserIDAdmin"].ToString();
                var user = (from nd in entity.QL_NguoiDung
                            join nv in entity.NHANVIENs on nd.MaNV equals nv.MaNV
                            where nd.IDNguoiDung == UserName
                            select nv.TenNV).FirstOrDefault();
                ViewBag.TenNhanVien = user.ToString();
                var group_user = (from nd in entity.QL_NguoiDung
                                  join ndnnd in entity.QL_NguoiDungNhomNguoiDung on nd.IDNguoiDung equals ndnnd.IDNguoiDung
                                  join nnd in entity.QL_NhomNguoiDung on ndnnd.MaNhomNguoiDung equals nnd.MaNhom
                                  where nd.IDNguoiDung == UserName
                                  select nnd.TenNhom).FirstOrDefault();
                if(group_user!=null)
                Session["UserGroup"] = group_user.ToString();
                else Session["UserGroup"] = "(Chưa có nhóm)";
                return View();
            }
            else
            {
                ViewBag.TenNhanVien = "Chưa đăng nhập";
                return View();
            }
        }
        public ActionResult NotificationAuthorize()
        {
            return View();
        }
    }
}