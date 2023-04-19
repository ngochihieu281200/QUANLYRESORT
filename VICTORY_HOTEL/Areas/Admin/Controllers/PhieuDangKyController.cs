using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.PhieuDangKy;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class PhieuDangKyController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/PhieuDangKy
        [AuthorizeController]
        public ActionResult Index()
        {
            var NguoiDung = (from nd in entity.QL_NguoiDung
                             join nv in entity.NHANVIENs on nd.MaNV equals nv.MaNV
                             select nd).ToList();
            List<SelectListItem> list_NguoiDung = new List<SelectListItem>();
            foreach (var item in NguoiDung)
            {
                list_NguoiDung.Add(new SelectListItem() { Text = item.NHANVIEN.TenNV, Value = item.IDNguoiDung });
            }
            ViewBag.IDNguoiDung = list_NguoiDung;
            var KhachHang = entity.KHACHHANGs.ToList();
            List<SelectListItem> list_KhachHang = new List<SelectListItem>();
            foreach (var item in KhachHang)
            {
                list_KhachHang.Add(new SelectListItem() { Text = item.TenKH, Value = item.MaKH });
            }
            ViewBag.KhachHang = list_KhachHang;
            ViewBag.PhieuDangKy = (from p in entity.PHIEU_DK
                                   join k in entity.KHACHHANGs on p.MaKH equals k.MaKH
                                   select p).ToList();
            var Ma = MaTuTangQuery.Matutang("PHIEU_DK", "PDK");
            ViewBag.MaTuTang = Ma;
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(PhieuDangKyViewModel model)
        {
            var NguoiDung = (from nd in entity.QL_NguoiDung
                             join nv in entity.NHANVIENs on nd.MaNV equals nv.MaNV
                             select nd).ToList();
            List<SelectListItem> list_NguoiDung = new List<SelectListItem>();
            foreach (var item in NguoiDung)
            {
                list_NguoiDung.Add(new SelectListItem() { Text = item.NHANVIEN.TenNV, Value = item.IDNguoiDung });
            }
            ViewBag.IDNguoiDung = list_NguoiDung;
            var KhachHang = entity.KHACHHANGs.ToList();
            List<SelectListItem> list_KhachHang = new List<SelectListItem>();
            foreach (var item in KhachHang)
            {
                list_KhachHang.Add(new SelectListItem() { Text = item.TenKH, Value = item.MaKH });
            }
            ViewBag.KhachHang = list_KhachHang;
            ViewBag.PhieuDangKy = (from p in entity.PHIEU_DK
                                   join k in entity.KHACHHANGs on p.MaKH equals k.MaKH
                                   select p).ToList();
            var Matutang = MaTuTangQuery.Matutang("PHIEU_DK", "PDK");
            ViewBag.MaTuTang = Matutang;
            if (ModelState.IsValid)
            {
                var Ma = entity.PHIEU_DK.Where(m => m.Ma_PDK == model.Ma_PDK).FirstOrDefault();
                //insert
                if (Ma == null)
                {
                    try
                    {
                        var pdk = new PHIEU_DK()
                        {
                            Ma_PDK = model.Ma_PDK,
                            IDNguoiDung = model.IDNguoiDung,
                            NgayDK = model.NgayDK,
                            MaKH = model.MaKH,
                            TienCoc = model.TienCoc,
                            TrangThai = model.TrangThai
                        };
                        entity.PHIEU_DK.Add(pdk);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.PhieuDangKy = (from p in entity.PHIEU_DK
                                               join k in entity.KHACHHANGs on p.MaKH equals k.MaKH
                                               select p).ToList();
                        return View();
                    }
                    catch (Exception e)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var pdk = entity.PHIEU_DK.Find(model.Ma_PDK);
                        if (pdk != null)
                        {
                            pdk.IDNguoiDung = model.IDNguoiDung;
                            pdk.NgayDK = model.NgayDK;
                            pdk.MaKH = model.MaKH;
                            pdk.TienCoc = model.TienCoc;
                            pdk.TrangThai = model.TrangThai;//0:chưa chuyển khoảng, 1: đã chuyển khoảng, 2: hủy
                        }
                        entity.Entry(pdk).State = EntityState.Modified;
                        entity.SaveChanges();

                        #region gửi email trạng thái đã chuyển khoảng
                        if (model.TrangThai == 1)
                        {
                            string str = "";
                            var kh = entity.KHACHHANGs.Where(m => m.MaKH == model.MaKH).FirstOrDefault();
                            var subject = "Hoàn tất đăng ký phòng Victory Hotel";
                            str += "</br><h2>Thông tin đặt phòng của khách hàng: " + kh.TenKH + " </h2>";
                            str += "</br><span>Đăng ký ngày: " + string.Format("{0:dd/mm/yyyy}", model.NgayDK)  + " </span>";
                            var p = (from aa in entity.CHITIET_PDK
                                     join bb in entity.PHIEU_DK on aa.Ma_PDK equals bb.Ma_PDK
                                     where aa.Ma_PDK==model.Ma_PDK
                                     select aa).ToList();
                            if(p!=null)
                            {
                                string str1 = "";
                                DateTime? d1 = DateTime.Now;
                                DateTime? d2 = DateTime.Now;
                                foreach ( var i in p)
                                {
                                    d1 = i.NgayDen;
                                    d2 = i.NgayDi;
                                    str1 += "</br><p><span> Phòng: " + i.MaPhong + ", " + i.SoNguoiLon + " người lớn, " +  i.SoTreEm + " trẻ em</span></p>";
                                }

                                str += "</br><span>Ngày đến: " + String.Format("{0:dd/MM/yyyy}", d1) + " </span>";
                                str += "</br><span>Ngày đi: " + String.Format("{0:dd/MM/yyyy}", d2) + " </span>";
                                str += str1;
                                str += "</br><p><span>Tiền cọc:  " + string.Format("{0:n}", model.TienCoc) + " VND</span></p>";
                            }
                            str += "</br><span>Cảm ơn bạn đã đặt phòng ở khách sạn Victory. </span>";
                            str += "</br><span>Lưu ý: Nhận phòng từ sau 14h. </span>";

                            var body = str;
                            XMail.Send(kh.Email, subject, body);
                        }
                        #endregion

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.PhieuDangKy = (from p in entity.PHIEU_DK
                                               join k in entity.KHACHHANGs on p.MaKH equals k.MaKH
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
            var NguoiDung = (from nd in entity.QL_NguoiDung
                             join nv in entity.NHANVIENs on nd.MaNV equals nv.MaNV
                             select nd).ToList();
            List<SelectListItem> list_NguoiDung = new List<SelectListItem>();
            foreach (var item in NguoiDung)
            {
                list_NguoiDung.Add(new SelectListItem() { Text = item.NHANVIEN.TenNV, Value = item.IDNguoiDung });
            }
            ViewBag.IDNguoiDung = list_NguoiDung;
            var KhachHang = entity.KHACHHANGs.ToList();
            List<SelectListItem> list_KhachHang = new List<SelectListItem>();
            foreach (var item in KhachHang)
            {
                list_KhachHang.Add(new SelectListItem() { Text = item.TenKH, Value = item.MaKH });
            }
            ViewBag.KhachHang = list_KhachHang;
            ViewBag.PhieuDangKy = (from p in entity.PHIEU_DK
                                   join k in entity.KHACHHANGs on p.MaKH equals k.MaKH
                                   select p).ToList();
            var Matutang = MaTuTangQuery.Matutang("PHIEU_DK", "PDK");
            ViewBag.MaTuTang = Matutang;
            try
            {
                var model = entity.PHIEU_DK.Find(Id);
                entity.PHIEU_DK.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa phiếu đăng ký này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "PhieuDangKy");
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Edit(string Id)
        {
            var model = entity.PHIEU_DK.Find(Id);
            string[] str = new string[100];
            str[0] = model.Ma_PDK;
            str[1] = model.IDNguoiDung;
            str[2] = model.NgayDK.ToString();
            str[3] = model.MaKH;
            str[4] = model.TienCoc.ToString();
            str[5] = model.TrangThai.ToString();
            return Json(str, JsonRequestBehavior.AllowGet);
        }
    }
}