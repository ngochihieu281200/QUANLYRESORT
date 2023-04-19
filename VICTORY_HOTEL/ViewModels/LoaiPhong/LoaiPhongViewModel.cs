using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.LoaiPhong
{
    public class LoaiPhongViewModel
    {

        public LoaiPhongViewModel()
        {
            this.CHITIET_PHONG = new List<SelectListItem>();
            this.MOTA_PHONG = new List<SelectListItem>();
            this.PHONGs = new List<SelectListItem>();
        }

        public string MaLP { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tên loại phòng")]
        public string TenLoaiPhong { get; set; }
        public Nullable<long> MaGia { get; set; }

        public virtual List<SelectListItem> CHITIET_PHONG { get; set; }

        public virtual List<SelectListItem> MOTA_PHONG { get; set; }
        public virtual List<SelectListItem> PHONGs { get; set; }
    }
}