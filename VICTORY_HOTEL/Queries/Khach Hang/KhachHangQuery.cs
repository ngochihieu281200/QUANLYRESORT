using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VICTORY_HOTEL.Models;
using VICTORY_HOTEL.ViewModels.KhachHang;

namespace VICTORY_HOTEL.Queries.Khach_Hang
{
    public class KhachHangQuery
    {
        public static int LuuKhachHang(KhachHangViewModel data)
        {
            VictoryHotelEntities entity = new VictoryHotelEntities();
            
            try
            {
                if(data != null)
                {
                    var kh = entity.KHACHHANGs.FirstOrDefault(m => m.MaKH == data.MaKH);
                    if(kh == null)
                    {
                        kh.MaKH = data.MaKH;
                        kh.TenKH = data.TenKH;
                        kh.NgaySinh = data.NgaySinh;
                        kh.GioiTinh = "Nam";//
                        kh.DienThoai = data.DienThoai;
                        kh.DiaChi = data.DiaChi;
                        kh.So_CMND = data.So_CMND;
                        entity.KHACHHANGs.Add(kh);
                    }
                }
                entity.SaveChanges();
                entity.Dispose();
            }
            catch (Exception ex)
            {
                entity.Dispose();
                throw;
            }
            return 1;
        }
        public static List<KHACHHANG> GetList_KH_ChuaThanhToan()
        {
            VictoryHotelEntities entity = new VictoryHotelEntities();
            try
            {
                var result = (from kh in entity.KHACHHANGs
                              where kh.TrangThai == false
                              select kh).ToList();
                entity.Dispose();
                return result;
            }
            catch (Exception e)
            {
                entity.Dispose();
                return null;
            }            
        }
    }
}