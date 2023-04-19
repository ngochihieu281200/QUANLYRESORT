using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.Queries.Common;
using VICTORY_HOTEL.ViewModels.KhachHang;

namespace VICTORY_HOTEL.Controllers
{
    public class DatPhongController : Controller
    {
        VictoryHotelEntities db = new VictoryHotelEntities();

        public ActionResult B1()
        {
            TempData["Select-Menu-Item"] = 3;
            ViewBag.LoaiPhong = db.LOAIPHONGs
               .Where(a => a.CHITIET_PHONG.Count() >= 1)
               .OrderBy(a => Guid.NewGuid()).ToList();
            return View();
        }
        public ActionResult Buoc_2(string ID)
        {
            ViewBag.LoaiPhong = db.LOAIPHONGs
               .Where(a => a.MaLP == ID)
               .OrderBy(a => Guid.NewGuid()).ToList();
            var model = db.LOAIPHONGs.Find(ID);
            return View("ChonNgayDK", model);
        }

        public ActionResult B2(string ID)
        {
            TempData["Select-Menu-Item"] = 3;
            if (ID == "" || ID == null)
                return RedirectToAction("B1","DatPhong");
            else
            {
                ViewBag.LoaiPhong = db.LOAIPHONGs
                               .Where(a => a.MaLP == ID)
                               .OrderBy(a => Guid.NewGuid()).ToList();
                Session["data-room"] = "";
                return View();
            }
        }

        [HttpPost]
        public ActionResult BB2(string data_my)
        {
            string[] words = data_my.Split('&');

            string ID = words[0];
            string[] d1 = words[1].Split('-');
            string[] d2 = words[2].Split('-');

            DateTime date1 = new DateTime(int.Parse(d1[2]), int.Parse(d1[1]), int.Parse(d1[0]));
            DateTime date2 = new DateTime(int.Parse(d2[2]), int.Parse(d2[1]), int.Parse(d2[0]));

            var result = VICTORY_HOTEL.Queries.PhieuDangKy.PhieuDangKyQuery.GetList_MaPhongTrong(ID, date1, date2);
            string[] str1 = new string[result.Count()];
            int i = 0;
            str1[0] = "";
            foreach (var item in result)
            {
                str1[i] = item.MaPhong.ToString();
                i++;
            }
            return Json(str1, JsonRequestBehavior.AllowGet);
        }
        public ActionResult B3()
        {
            TempData["Select-Menu-Item"] = 3;
            VictoryHotelEntities entity = new VictoryHotelEntities();
            string data = (string)Session["data-room"];
            if (data != null && data != "")
            {
                string[] words = data.Split('&');

                string ID = words[0];
                string[] d1 = words[1].Split('-');
                string[] d2 = words[2].Split('-');
                string[] d3 = words[3].Split('*');
                int So_Dem = int.Parse(words[4]);
                var giaPhong = int.Parse((from lp in entity.LOAIPHONGs
                                          join dg in entity.DONGIAs on lp.MaGia equals dg.MaGia
                                          where lp.MaLP == ID
                                          select dg.Gia).FirstOrDefault().ToString());
                string str = "";
                for (int i = 0; i < d3.Length; i++)
                {
                    if (d3[i] != "")
                    {
                        string[] dd3 = d3[i].Split('%');
                        str += WebUtility.HtmlDecode("<div class=\"gdlr-price-room-summary\">");
                        str += WebUtility.HtmlDecode("<div class=\"gdlr-price-room-summary-title\">Phòng 1 : " + dd3[0] + "<span class=\"gdlr-price-room-summary-price\">" + string.Format("{0:000,000.00}", giaPhong) + " VND</span></div>");
                        str += WebUtility.HtmlDecode("<div class=\"gdlr-price-room-summary-info gdlr-title-font\"><span>Người lớn : " + dd3[1] + "</span><span>Trẻ em : " + dd3[2] + "</span></div>");
                        str += WebUtility.HtmlDecode("</div>");
                        str += WebUtility.HtmlDecode("</br>");
                    }
                }
                ViewBag.ThongTin = str;
                var TongTien = giaPhong * (d3.Length - 1) * So_Dem;
                ViewBag.TongTien = string.Format("{0:000,000.00}", TongTien);
                ViewBag.HaiMuoiPhanTram = string.Format("{0:000,000.00}", TongTien*1/5);
                DateTime date1 = new DateTime(int.Parse(d1[2]), int.Parse(d1[1]), int.Parse(d1[0]));
                DateTime date2 = new DateTime(int.Parse(d2[2]), int.Parse(d2[1]), int.Parse(d2[0]));
                ViewBag.Date1 = String.Format("{0:dd/MM/yyyy}", date1);
                ViewBag.Date2 = String.Format("{0:dd/MM/yyyy}", date2);
                ViewBag.SoDem = So_Dem;
            }
            else return RedirectToAction("B2","DatPhong");
            return View("B3");
        }

        [HttpPost]
        public ActionResult B3(KhachHangViewModel model)
        {
            if(ModelState.IsValid)
            {
                try
                {
                    VictoryHotelEntities entity = new VictoryHotelEntities();
                    model.MaKH = MaTuTangQuery.Matutang("KHACHHANG", "KH");
                    string gt = "";
                    if (int.Parse(model.GioiTinh) == 0)
                        gt = "Nam";
                    else if (int.Parse(model.GioiTinh) == 1)
                        gt = "Nữ";
                    else if (int.Parse(model.GioiTinh) == 2)
                        gt = "Không xác định";
                    var kh = new KHACHHANG()
                    {
                        MaKH = model.MaKH,
                        TenKH = model.TenKH,
                        NgaySinh = model.NgaySinh,
                        GioiTinh = gt,
                        DienThoai = model.DienThoai,
                        DiaChi = model.DiaChi,
                        So_CMND = model.So_CMND,
                        Email = model.Email,
                        GhiChu = model.GhiChu,
                        TrangThai = false
                    };
                    entity.KHACHHANGs.Add(kh);
                    entity.SaveChanges();
                    #region session data-room
                    if (Session["data-room"] != null && Session["data-room"].ToString() != "")
                    {
                        string data = (string)Session["data-room"];
                        string[] words = data.Split('&');
                        string ID = words[0];
                        string[] d1 = words[1].Split('-');
                        string[] d2 = words[2].Split('-');
                        string[] d3 = words[3].Split('*');
                        int So_Dem = int.Parse(words[4]);
                        
                        var giaPhong = int.Parse((from lp in entity.LOAIPHONGs
                                                  join dg in entity.DONGIAs on lp.MaGia equals dg.MaGia
                                                  where lp.MaLP == ID
                                                  select dg.Gia).FirstOrDefault().ToString());
                        var TongTien = giaPhong * (d3.Length - 1)* So_Dem;
                        if(Session["data-pay"]!=null)
                        {
                            if (int.Parse(Session["data-pay"].ToString()) == 20)
                            {
                                TongTien = TongTien * 1 / 5;
                            }
                        }
                            
                        ViewBag.TongTien = string.Format("{0:000,000.00}", TongTien);
                        Session["data-pay"] = TongTien;
                        DateTime date1 = new DateTime(int.Parse(d1[2]), int.Parse(d1[1]), int.Parse(d1[0]));
                        DateTime date2 = new DateTime(int.Parse(d2[2]), int.Parse(d2[1]), int.Parse(d2[0]));

                        try
                        {
                            var PDK = new PHIEU_DK
                            {
                                Ma_PDK = MaTuTangQuery.Matutang("PHIEU_DK", "PDK"),
                                IDNguoiDung = "Default",
                                NgayDK = DateTime.Now,
                                MaKH = model.MaKH,
                                TienCoc = TongTien,
                                TrangThai = 0 // trạng thái: chờ 0, đã chuyển khoản 1, hủy 2
                            };
                            entity.PHIEU_DK.Add(PDK);
                            entity.SaveChanges();
                            try
                            {
                                for (int i = 0; i < d3.Length; i++)
                                {
                                    if (d3[i] != "")
                                    {
                                        string[] dd3 = d3[i].Split('%');
                                        var chitiet_PDK = new CHITIET_PDK
                                        {
                                            Ma_PDK = PDK.Ma_PDK,
                                            MaPhong = dd3[0],
                                            SoNguoiLon = int.Parse(dd3[1]),
                                            SoTreEm = int.Parse(dd3[2]),
                                            NgayDen = date1,
                                            NgayDi = date2,
                                            TrangThai_TT = false
                                        };
                                        entity.CHITIET_PDK.Add(chitiet_PDK);
                                        entity.SaveChanges();
                                        //update hien trang phong
                                        var p = entity.PHONGs.Find(dd3[0]);
                                        if(p!=null)
                                        {
                                            p.HienTrang = "1";//0: phòng trống, 1: đã đặt, 2: đang sửa
                                        }
                                        entity.Entry(p).State = EntityState.Modified;
                                        entity.SaveChanges();
                                    }
                                }
                                var subject = "Đăng ký phòng Victory Hotel";
                                string str = "<p><span>Số Tài Khoản Ngân Hàng OCB Victory Hotel: 007 100 0856969</span></p>";
                                str += "</br><p><span>Số Tài Khoản Ngân Hàng Vietcombank Victory Hotel: 007 100 1234567</span></p>";
                                str += "</br><p><span>Số Tài Khoản Ngân Hàng Techcombank Victory Hotel: 102 12345678 001</span></p>";
                                str += "</br><h2>Khách hàng: " + model.TenKH + " vui lòng chuyển khoản trước 24h cuối ngày.</h2>";
                                str += "</br><h4>Số tiền cần chuyển khoảng: " + string.Format("{0:n}",TongTien) + " VND</h4>";
                                str += "</br><span>Đặt phòng sẽ tự hủy khi hết hạn trên. </span>";
                                str += "</br><span>Cảm ơn bạn đã đặt phòng ở khách sạn Victory. </span>";
                                var body = str;
                                XMail.Send(model.Email, subject, body);
                                Session["sucess_b3"] = 1;
                                return RedirectToAction("B4");
                            }
                            catch (Exception ex)
                            {
                                ModelState.AddModelError("", "Thêm mới ChiTiet_PDK lỗi, vui lòng kiểm tra lại thông tin !");
                                entity.Dispose();
                                return View(model);
                            }
                        }
                        catch (Exception ex)
                        {
                            ModelState.AddModelError("", "Thêm mới PDK lỗi, vui lòng kiểm tra lại thông tin !");
                            entity.Dispose();
                            return View(model);
                        }
                    }
                    else return View(model);
                    #endregion
                }
                catch (Exception ex)
                {
                    ModelState.AddModelError("", "Thêm mới khách hàng lỗi, vui lòng kiểm tra lại thông tin !");
                    return View(model);
                }
            }
            return View(model);
        }

        [HttpPost]
        public ActionResult ThanhToan(string data)
        {
            Session["data-pay"] = data;
            return View();
        }
        [HttpPost]
        public ActionResult BB3(string data_my)
        {
            Session["data-room"] = data_my;
            return View("B3");
        }
        public ActionResult B4(string ID)
        {
            TempData["Select-Menu-Item"] = 3;
            if (int.Parse(Session["sucess_b3"].ToString()) == 1)
            {
                ViewBag.TongTien = Session["data-pay"].ToString();
                //reset session
                Session["data-room"] = null;
                Session["data-pay"] = null;
                Session["sucess_b3"] = 0;
                return View();
            }
            else
                return RedirectToAction("B1");
        }
    }
}