using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VICTORY_HOTEL.ViewModels.ChiTiet_PDK
{
    public class ChiTiet_PDKViewModel
    {
        public long Ma_CTPDK { get; set; }
        public string Ma_PDK { get; set; }
        public string MaPhong { get; set; }
        public int? SoNguoiLon { get; set; }
        public int? SoTreEm { get; set; }
        public DateTime? NgayDen { get; set; }
        public DateTime? NgayDi { get; set; }
        public bool TrangThai_TT { get; set; }
    }
}