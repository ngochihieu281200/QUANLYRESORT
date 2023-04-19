using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.HoaDon
{
    public class HoaDonViewModel
    {
        public  HoaDonViewModel()
        {
            this.CHITIET_HD = new List<SelectListItem>();
        }

        public string MaHD { get; set; }
        public string IDNguoiDung { get; set; }
        public string MaKH { get; set; }
        public DateTime? NgayLap { get; set; }
        public Nullable<long> TongTien { get; set; }
        public string GhiChu { get; set; }

        public virtual List<SelectListItem> CHITIET_HD { get; set; }
    }
}