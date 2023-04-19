using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class QL_NguoiDungNhomNguoiDungController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/QL_NguoiDungNhomNguoiDung

        [AuthorizeController]
        public ActionResult Index()
        {
            //người dùng
            var QL_NguoiDung = entity.QL_NguoiDung.ToList();
            List<SelectListItem> List_NguoiDung = new List<SelectListItem>();
            foreach (var item in QL_NguoiDung)
            {
                List_NguoiDung.Add(new SelectListItem() { Text = item.IDNguoiDung, Value = item.IDNguoiDung });
            }
            ViewBag.List_NguoiDung = List_NguoiDung;
            //nhóm người dùng
            var QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
            List<SelectListItem> List_NhomNguoiDung = new List<SelectListItem>();
            foreach (var item in QL_NhomNguoiDung)
            {
                List_NhomNguoiDung.Add(new SelectListItem() { Text = item.TenNhom, Value = item.MaNhom });
            }
            ViewBag.List_NhomNguoiDung = List_NhomNguoiDung;
            // ds QL_NguoiDungNhomNguoiDung
            ViewBag.QL_NguoiDungNhomNguoiDung = (from ndnnd in entity.QL_NguoiDungNhomNguoiDung
                                    join nd in entity.QL_NguoiDung on ndnnd.IDNguoiDung equals nd.IDNguoiDung
                                    join nnd in entity.QL_NhomNguoiDung on ndnnd.MaNhomNguoiDung equals nnd.MaNhom
                                    select ndnnd).ToList();
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(QL_NguoiDungNhomNguoiDung model)
        {
            //người dùng
            var QL_NguoiDung = entity.QL_NguoiDung.ToList();
            List<SelectListItem> List_NguoiDung = new List<SelectListItem>();
            foreach (var item in QL_NguoiDung)
            {
                List_NguoiDung.Add(new SelectListItem() { Text = item.IDNguoiDung, Value = item.IDNguoiDung });
            }
            ViewBag.List_NguoiDung = List_NguoiDung;
            //nhóm người dùng
            var QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
            List<SelectListItem> List_NhomNguoiDung = new List<SelectListItem>();
            foreach (var item in QL_NhomNguoiDung)
            {
                List_NhomNguoiDung.Add(new SelectListItem() { Text = item.TenNhom, Value = item.MaNhom });
            }
            ViewBag.List_NhomNguoiDung = List_NhomNguoiDung;
            // ds QL_NguoiDungNhomNguoiDung
            ViewBag.QL_NguoiDungNhomNguoiDung = (from ndnnd in entity.QL_NguoiDungNhomNguoiDung
                                                 join nd in entity.QL_NguoiDung on ndnnd.IDNguoiDung equals nd.IDNguoiDung
                                                 join nnd in entity.QL_NhomNguoiDung on ndnnd.MaNhomNguoiDung equals nnd.MaNhom
                                                 select ndnnd).ToList();

            if (ModelState.IsValid)
            {
                var pq = entity.QL_NguoiDungNhomNguoiDung.Where(m => m.IDNguoiDung == model.IDNguoiDung && m.MaNhomNguoiDung == model.MaNhomNguoiDung).FirstOrDefault();
                //insert
                if (pq == null)
                {
                    try
                    {
                        var cv = new QL_NguoiDungNhomNguoiDung()
                        {
                            IDNguoiDung = model.IDNguoiDung,
                            MaNhomNguoiDung = model.MaNhomNguoiDung,
                            GhiChu = model.GhiChu
                        };
                        entity.QL_NguoiDungNhomNguoiDung.Add(cv);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.QL_NguoiDungNhomNguoiDung = (from ndnnd in entity.QL_NguoiDungNhomNguoiDung
                                                             join nd in entity.QL_NguoiDung on ndnnd.IDNguoiDung equals nd.IDNguoiDung
                                                             join nnd in entity.QL_NhomNguoiDung on ndnnd.MaNhomNguoiDung equals nnd.MaNhom
                                                             select ndnnd).ToList();
                        return View();
                    }
                    catch (Exception)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới người dùng nhóm người dùng lỗi, vui lòng kiểm tra lại thông tin !");
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
                            pq.GhiChu = model.GhiChu;
                            entity.Entry(pq).State = EntityState.Modified;
                            entity.SaveChanges();

                            TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                            ViewBag.QL_NguoiDungNhomNguoiDung = (from ndnnd in entity.QL_NguoiDungNhomNguoiDung
                                                                 join nd in entity.QL_NguoiDung on ndnnd.IDNguoiDung equals nd.IDNguoiDung
                                                                 join nnd in entity.QL_NhomNguoiDung on ndnnd.MaNhomNguoiDung equals nnd.MaNhom
                                                                 select ndnnd).ToList();

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
            string IDNguoiDung = data[0].Trim();
            string MaNhomNguoiDung = data[1].Trim();
            var model = entity.QL_NguoiDungNhomNguoiDung.Where(m => m.IDNguoiDung == IDNguoiDung && m.MaNhomNguoiDung == MaNhomNguoiDung).FirstOrDefault();

            string[] str = new string[100];
            str[0] = model.IDNguoiDung;
            str[1] = model.MaNhomNguoiDung;
            str[2] = model.GhiChu;
            return Json(str, JsonRequestBehavior.AllowGet);
        }

        [AuthorizeController]
        public ActionResult Delete(string Id)
        {
            string[] data = Id.Split(',');
            string IDNguoiDung = data[0].Trim();
            string MaNhomNguoiDung = data[1].Trim();

            //người dùng
            var QL_NguoiDung = entity.QL_NguoiDung.ToList();
            List<SelectListItem> List_NguoiDung = new List<SelectListItem>();
            foreach (var item in QL_NguoiDung)
            {
                List_NguoiDung.Add(new SelectListItem() { Text = item.IDNguoiDung, Value = item.IDNguoiDung });
            }
            ViewBag.List_NguoiDung = List_NguoiDung;
            //nhóm người dùng
            var QL_NhomNguoiDung = entity.QL_NhomNguoiDung.ToList();
            List<SelectListItem> List_NhomNguoiDung = new List<SelectListItem>();
            foreach (var item in QL_NhomNguoiDung)
            {
                List_NhomNguoiDung.Add(new SelectListItem() { Text = item.TenNhom, Value = item.MaNhom });
            }
            ViewBag.List_NhomNguoiDung = List_NhomNguoiDung;
            // ds QL_NguoiDungNhomNguoiDung
            ViewBag.QL_NguoiDungNhomNguoiDung = (from ndnnd in entity.QL_NguoiDungNhomNguoiDung
                                                 join nd in entity.QL_NguoiDung on ndnnd.IDNguoiDung equals nd.IDNguoiDung
                                                 join nnd in entity.QL_NhomNguoiDung on ndnnd.MaNhomNguoiDung equals nnd.MaNhom
                                                 select ndnnd).ToList();
            try
            {
                var model = entity.QL_NguoiDungNhomNguoiDung.Where(m => m.IDNguoiDung == IDNguoiDung && m.MaNhomNguoiDung == MaNhomNguoiDung).FirstOrDefault();
                entity.QL_NguoiDungNhomNguoiDung.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể người dùng nhóm người dùng này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "QL_NguoiDungNhomNguoiDung");
        }
    }
}