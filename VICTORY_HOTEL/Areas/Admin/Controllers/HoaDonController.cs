using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.Queries.Khach_Hang;
using VICTORY_HOTEL.ViewModels.HoaDon;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class HoaDonController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/HoaDon
        [AuthorizeController]
        public ActionResult Index()
        {
            //
            var kh = KhachHangQuery.GetList_KH_ChuaThanhToan();
            if (kh != null)
            {
                ViewBag.KhachHang = kh;
            }

            //
            string ID_NguoiDung = Session["UserIDAdmin"].ToString();
            var Nguoi_Dung = (from nd in entity.QL_NguoiDung
                              join nv in entity.NHANVIENs on nd.MaNV equals nv.MaNV
                              where nd.IDNguoiDung == ID_NguoiDung
                              select nv.TenNV).FirstOrDefault();

            ViewBag.Ten_NguoiDung = Nguoi_Dung;
            ViewBag.HoaDon = entity.HOADONs.ToList();
            var Ma_HD = MaTuTangQuery.Matutang("HOADON", "HD");
            ViewBag.Ma = Ma_HD;
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult Index(HoaDonViewModel model)
        {
            ViewBag.HoaDon = entity.HOADONs.ToList();
            var Ma_HD = MaTuTangQuery.Matutang("HOADON", "HD");
            ViewBag.Ma = Ma_HD;

            if (ModelState.IsValid)
            {
                var Ma_NV = entity.HOADONs.Where(m => m.MaHD == model.MaHD).FirstOrDefault();
                //insert
                if (Ma_NV == null)
                {
                    try
                    {
                        var nv = new HOADON()
                        {
                            MaHD = model.MaHD,
                            IDNguoiDung = model.IDNguoiDung,
                            MaKH = model.MaKH,
                            NgayLap = model.NgayLap,
                            TongTien = model.TongTien,
                            GhiChu = model.GhiChu
                        };
                        entity.HOADONs.Add(nv);
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới thành công.");
                        ViewBag.HoaDon = entity.HOADONs.ToList();
                        return View();
                    }
                    catch (Exception e)
                    {
                        TempData["msg"] = ShowAlert.ShowError("", "Thêm mới hóa đơn lỗi, vui lòng kiểm tra lại thông tin !");
                        entity.Dispose();
                        return View(model);
                    }
                }
                else//update
                {
                    try
                    {
                        var nv = entity.HOADONs.Find(model.MaHD);
                        if (nv != null)
                        {
                            nv.IDNguoiDung = model.IDNguoiDung;
                            nv.MaKH = model.MaKH;
                            nv.NgayLap = model.NgayLap;
                            nv.TongTien = model.TongTien;
                            nv.GhiChu = model.GhiChu;
                        }
                        entity.Entry(nv).State = EntityState.Modified;
                        entity.SaveChanges();

                        TempData["msg"] = ShowAlert.ShowSuccess("", "Cập nhật thành công.");
                        ViewBag.HoaDon = entity.HOADONs.ToList();
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
            ViewBag.HoaDon = entity.HOADONs.ToList();
            var Ma_HD = MaTuTangQuery.Matutang("HOADON", "HD");
            ViewBag.Ma = Ma_HD;
            try
            {
                var model = entity.HOADONs.Find(Id);
                entity.HOADONs.Remove(model);
                entity.SaveChanges();

                ModelState.Clear();
                TempData["msg"] = ShowAlert.ShowSuccess("", "Xóa thành công.");
            }
            catch (Exception e)
            {
                TempData["msg"] = ShowAlert.ShowError("", "Không thể xóa nhân viên này!");
                entity.Dispose();
            }

            return RedirectToAction("Index", "HoaDon");
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult LoadPDK(string Id)
        {
            var model_data = (from pdk in entity.PHIEU_DK
                              where pdk.MaKH == Id && pdk.TrangThai != 2
                              select pdk).ToList();
            string[] str = new string[model_data.Count()];
            int i = 0;
            str[0] = "";
            if (model_data.Count() > 0)
            {
                foreach (var item in model_data)
                {
                    str[i] = item.Ma_PDK.ToString();
                    i++;
                }
            }
            return Json(str, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult LoadDSPhong(string Id)
        {
            var model_data = (from ctpdk in entity.CHITIET_PDK
                              where ctpdk.Ma_PDK == Id && ctpdk.TrangThai_TT == false
                              select ctpdk).ToList();
            string[] str = new string[model_data.Count()];
            int i = 0;
            str[0] = "";
            if (model_data != null)
            {
                foreach (var item in model_data)
                {
                    str[i] = item.MaPhong.ToString();
                    i++;
                }
            }
            return Json(str, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult LuuThongTin(string data)
        {
            Session["data-thanh-toan"] = data;
            //return RedirectToAction("ThanhToan", "HoaDon");
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        [AuthorizeController]
        public ActionResult ThanhToan()
        {
            string data = (string)Session["data-thanh-toan"];
            try
            {
                if (data != null || data != "")
                {
                    string[] data_split = data.Split('-');
                    string Ma_PDK = data_split[0];
                    string[] data_ma_phong = data_split[1].Split(',');
                    var result = (from ctpdk in entity.CHITIET_PDK
                                  join pdk in entity.PHIEU_DK on ctpdk.Ma_PDK equals pdk.Ma_PDK
                                  join p in entity.PHONGs on ctpdk.MaPhong equals p.MaPhong
                                  join lp in entity.LOAIPHONGs on p.MaLP equals lp.MaLP
                                  join dg in entity.DONGIAs on lp.MaGia equals dg.MaGia
                                  where ctpdk.Ma_PDK == Ma_PDK && ctpdk.TrangThai_TT == false
                                  select ctpdk).ToList();
                    //tinh so ngay
                    TimeSpan? ts;
                    var t = entity.CHITIET_PDK.Where(m => m.Ma_PDK == Ma_PDK).FirstOrDefault();
                    //ts = t.NgayDi - t.NgayDen;
                    DateTime date_now = DateTime.Now;
                    ts = date_now - t.NgayDen;
                    ViewBag.SoNgay = ts.Value.Days.ToString();

                    //Kiểm tra nếu thanh toán hết thì trừ cọc
                    var sl = entity.CHITIET_PDK.Where(m => m.Ma_PDK == Ma_PDK && m.TrangThai_TT==false).ToList();
                    var tc = entity.PHIEU_DK.Where(m => m.Ma_PDK == Ma_PDK).FirstOrDefault();
                    if (sl.Count() == data_ma_phong.Count() - 1)
                    {
                        ViewBag.TienCoc = tc.TienCoc;
                    }
                    else { ViewBag.TienCoc = 0; }//chưa thanh toán hết thì không trừ cọc

                    //tao session Ma_KH
                    Session["Ma_KH"] = tc.MaKH;

                    var tps = (from p in entity.PHONGs
                               join ctpdk in entity.CHITIET_PDK on p.MaPhong equals ctpdk.MaPhong
                               where ctpdk.Ma_PDK == Ma_PDK && ctpdk.TrangThai_TT == false
                               select p.TienPhatSinh).ToList();
                    ViewBag.TienPhatSinh = tps;

                    ViewBag.Chitiet_PDK = result;
                    var dich_vu_SD = (from dvsd in entity.DICHVU_SD
                                      join p in entity.PHONGs on dvsd.MaPhong equals p.MaPhong
                                      join dv in entity.DICHVUs on dvsd.MaDV equals dv.MaDV
                                      join lp in entity.LOAIPHONGs on p.MaLP equals lp.MaLP
                                      join dg in entity.DONGIAs on lp.MaGia equals dg.MaGia
                                      where dvsd.TrangThai == false
                                      select dvsd).ToList();
                    ViewBag.DichVu_SD = dich_vu_SD;
                    ViewBag.DS_MaPhong = data_ma_phong;
                }
            }
            catch (Exception e)
            {
                return View();
            }
            return View();
        }

        [HttpPost]
        [AuthorizeController]
        public ActionResult LuuHoaDon(string data_my)
        {
            if (data_my != null || data_my != "")
            {
                string[] data_money = data_my.Split(',');
                long tien_phong = long.Parse(data_money[0]);
                long tien_DV = long.Parse(data_money[1]);
                long tien_Coc = long.Parse(data_money[2]);
                long tien_phatsinh = long.Parse(data_money[3]);
                long tong_tien = long.Parse(data_money[4]);


                string data = (string)Session["data-thanh-toan"];
                string[] data_split = data.Split('-');
                string Ma_PDK = data_split[0];
                string[] data_ma_phong = data_split[1].Split(',');
                var ma_KH = (from pdk in entity.PHIEU_DK
                             where pdk.Ma_PDK == Ma_PDK
                             select pdk.MaKH).FirstOrDefault();
                var Ma_HD = MaTuTangQuery.Matutang("HOADON", "HD");
                var MaHD = entity.HOADONs.Where(m => m.MaHD == Ma_HD).FirstOrDefault();
                string id_NguoiDung = (string)Session["UserIDAdmin"];
                if (id_NguoiDung != null || id_NguoiDung != "")
                {
                    //insert
                    if (MaHD == null)
                    {
                        try
                        {
                            var hd = new HOADON()
                            {
                                MaHD = Ma_HD,
                                IDNguoiDung = id_NguoiDung,
                                MaKH = ma_KH,
                                NgayLap = DateTime.Now,
                                TongTien = tong_tien
                            };
                            entity.HOADONs.Add(hd);
                            entity.SaveChanges();

                            TempData["msg"] = ShowAlert.ShowSuccess("", "Thêm mới hóa đơn thành công.");

                            try
                            {
                                //them chi tiet hoa don
                                var CT_HD = new CHITIET_HD
                                {
                                    MaHD = Ma_HD,
                                    Ma_PDK = Ma_PDK,
                                    TienPhong = tien_phong,
                                    TienDV = tien_DV,
                                    TienCoc = tien_Coc,
                                    TienPhatSinh = tien_phatsinh,
                                    ThanhTien = tong_tien
                                };
                                entity.CHITIET_HD.Add(CT_HD);
                                entity.SaveChanges();
                                foreach (var item in data_ma_phong)
                                {
                                    if (item != "")
                                    {

                                        #region update CHITIET_PDK
                                        //update CHITIET_PDK
                                        var ma_ctpdk = (from ct in entity.CHITIET_PDK
                                                        where ct.Ma_PDK == Ma_PDK && ct.MaPhong == item && ct.TrangThai_TT == false
                                                        select ct.Ma_CTPDK).FirstOrDefault().ToString();
                                        if (ma_ctpdk != null)
                                        {
                                            var ctpdk = entity.CHITIET_PDK.Find(long.Parse(ma_ctpdk));
                                            if (ctpdk != null)
                                            {
                                                ctpdk.TrangThai_TT = true;
                                            }
                                            entity.Entry(ctpdk).State = EntityState.Modified;
                                            entity.SaveChanges();
                                        }
                                        #endregion

                                        #region update trạng thái Phiếu đăng ký
                                        //update trạng thái Phiếu đăng ký
                                        var ds_ctpdk = (from ct in entity.CHITIET_PDK
                                                        join pdk in entity.PHIEU_DK on ct.Ma_PDK equals pdk.Ma_PDK
                                                        where ct.Ma_PDK == Ma_PDK && ct.TrangThai_TT == false
                                                        select ct);
                                        if (ds_ctpdk.Count() == 0)
                                        {
                                            var pdk = entity.PHIEU_DK.Find(Ma_PDK);
                                            if (pdk != null)
                                            {
                                                pdk.TrangThai = 2;//0:chưa chuyển khoảng, 1: đã chuyển khoảng, 2: hủy
                                            }
                                            entity.Entry(pdk).State = EntityState.Modified;
                                            entity.SaveChanges();
                                        }
                                        #endregion

                                        #region update trạng thái khách hàng khi thanh toán hết tất cả phiếu đăng ký
                                        //update trạng thái khách hàng khi thanh toán hết tất cả phiếu đăng ký
                                        var pdk_kh = (from pp in entity.PHIEU_DK
                                                      where pp.MaKH == ma_KH && (pp.TrangThai == 0 || pp.TrangThai == 1)
                                                      select pp).ToList();
                                        if (pdk_kh.Count() == 0)
                                        {
                                            var kh = entity.KHACHHANGs.Find(ma_KH);
                                            if (kh != null)
                                            {
                                                kh.TrangThai = true;
                                            }
                                            entity.Entry(kh).State = EntityState.Modified;
                                            entity.SaveChanges();
                                        }
                                        #endregion

                                        #region update PHONG
                                        // update PHONG
                                        var p = entity.PHONGs.Find(item);
                                        if (p != null)
                                        {
                                            p.HienTrang = "0";//0: phòng trống, 1: đã đặt, 2: đang sửa
                                        }
                                        entity.Entry(p).State = EntityState.Modified;
                                        entity.SaveChanges();
                                        #endregion

                                        #region update trạng thái dịch vụ sử dụng
                                        //update trạng thái dịch vụ sử dụng
                                        var dvsd = (from dv in entity.DICHVU_SD
                                                    where dv.TrangThai == false && dv.MaPhong == item
                                                    select dv).ToList();
                                        if (dvsd.Count() > 0)
                                        {
                                            foreach (var i in dvsd)
                                            {
                                                var dd = entity.DICHVU_SD.Where(m => m.MaDV == i.MaDV && m.MaPhong == i.MaPhong).FirstOrDefault();
                                                if (dd != null)
                                                {
                                                    dd.SoLuong = i.SoLuong;
                                                    dd.TrangThai = true;
                                                }
                                                entity.Entry(dd).State = EntityState.Modified;
                                                entity.SaveChanges();
                                            }
                                        }
                                        Session["data-thanh-toan"] = null;
                                        #endregion
                                    }
                                }
                            }
                            catch (Exception e)
                            {

                            }
                            ViewBag.HoaDon = entity.HOADONs.ToList();
                            return RedirectToAction("HoaDon", "Index");
                        }
                        catch (Exception e)
                        {
                            TempData["msg"] = ShowAlert.ShowError("", "Thêm mới hóa đơn lỗi, vui lòng kiểm tra lại thông tin !");
                            entity.Dispose();
                            return RedirectToAction("HoaDon", "Index");
                        }
                    }
                }
            }
            return View();
        }
    }
}