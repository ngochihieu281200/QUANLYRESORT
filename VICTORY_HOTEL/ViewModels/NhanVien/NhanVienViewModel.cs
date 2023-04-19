using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.NhanVien
{
    public class NhanVienViewModel
    {
        public NhanVienViewModel()
        {
            this.QL_NguoiDung = new List<SelectListItem>();
        }
        public string MaNV { get; set; }
        public string MaCV { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập Họ Tên")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Vui lòng nhập ít nhất 3 ký tự")]
        public string TenNV { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập ngày sinh")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime? NgaySinh { get; set; }
        public string GioiTinh { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập Địa chỉ")]
        [StringLength(100, MinimumLength = 3, ErrorMessage = "Vui lòng nhập ít nhất 3 ký tự")]
        public string DiaChi { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập số Điện Thoại")]
        [RegularExpression(@"^([0]{1})(\d{9,10})$", ErrorMessage = "Sai định dạng số điện thoại.")]
        public string DienThoai { get; set; }
            
        public virtual List<SelectListItem> QL_NguoiDung { get; set; }
    }
}