using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.PhieuDangKy
{
    public class PhieuDangKyViewModel
    {
        public PhieuDangKyViewModel()
        {
            this.CHITIET_HD = new List<SelectListItem>();
            this.CHITIET_PDK = new List<SelectListItem>();
        }
        public virtual List<SelectListItem> CHITIET_HD { get; set; }
        public virtual List<SelectListItem> CHITIET_PDK { get; set; }

        public string Ma_PDK { get; set; }
        public string IDNguoiDung { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập ngày sinh")]
        [Display(Name ="Ngày Đăng Ký")]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime? NgayDK { get; set; }
        public string MaKH { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập nhập tiền cọc")]
        [DisplayFormat(DataFormatString = "{0:n}", ApplyFormatInEditMode = true)]
        public Nullable<long> TienCoc { get; set; }
        public Nullable<long> TrangThai { get; set; }

    }
}