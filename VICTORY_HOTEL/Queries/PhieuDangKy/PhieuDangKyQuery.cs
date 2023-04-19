using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VICTORY_HOTEL.Models;

namespace VICTORY_HOTEL.Queries.PhieuDangKy
{
    public class PhieuDangKyQuery
    {

        public static List<PHONG> GetList_MaPhongTrong(string Ma_LP,DateTime Ngay_Den, DateTime Ngay_Di)
        {
            VictoryHotelEntities entity = new VictoryHotelEntities();
            var result = new List<PHONG>();

            try
            {
                var model = (from p in entity.PHONGs
                             join lp in entity.LOAIPHONGs on p.MaLP equals lp.MaLP
                             where p.MaLP== Ma_LP
                             && (p.HienTrang == "0" || p.HienTrang == "1")
                             && !(from c in entity.CHITIET_PDK
                                  join pdk in entity.PHIEU_DK on c.Ma_PDK equals pdk.Ma_PDK
                                  where c.TrangThai_TT == false
                                  && ((c.NgayDen >= Ngay_Den && c.NgayDen < Ngay_Di) || (c.NgayDi > Ngay_Den && c.NgayDi <= Ngay_Di))
                                  select c.MaPhong).Contains(p.MaPhong)
                             select p).OrderBy(m => m.MaPhong).ToList();
                result = model;
                entity.Dispose();
                return result;
            }
            catch (Exception ex)
            {
                entity.Dispose();
                return null;
            }
        }
    }
}