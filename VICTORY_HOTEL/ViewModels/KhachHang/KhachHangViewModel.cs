using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.KhachHang
{
    public class KhachHangViewModel
    {
        public KhachHangViewModel()
        {
            this.HOADONs = new List<SelectListItem>();
            this.PHIEU_DK = new List<SelectListItem>();            
        }
        public virtual List<SelectListItem> HOADONs { get; set; }
        public virtual List<SelectListItem> PHIEU_DK { get; set; }
        public string GioiTinh { get; set; }

        public string MaKH { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập Họ Tên")]
        [StringLength(50,MinimumLength =3, ErrorMessage = "Vui lòng nhập ít nhất 3 ký tự")]
        public string TenKH { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập ngày sinh")]
        //[DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime? NgaySinh { get; set; }
        
        [Required(ErrorMessage = "Vui lòng nhập số Điện Thoại")]
        [RegularExpression(@"^([0]{1})(\d{9,10})$", ErrorMessage = "Sai định dạng số điện thoại.")]
        public string DienThoai { get; set; }

        public string DiaChi { get; set; }
        
        [Required(ErrorMessage = "Vui lòng nhập số CMND")]
        [RegularExpression(@"^((\d{9})|(\d{12}))$", ErrorMessage = "Sai định dạng số số CMND")]
        public string So_CMND { get; set; }

        [Display(Name = "Email")]
        [Required(ErrorMessage = "Vui lòng nhập Email.")]
        [RegularExpression(@"^([\w-\.]+)@((\[[0-9]{1,3]\.)|(([\w-]+\.)+))([a-zA-Z{2,4}|[0-9]{1,3})(\]?)$", ErrorMessage = "Sai định dạng email.")]
        [StringLength(50)]
        public string Email { get; set; }

        public string GhiChu { get; set; }

        public Nullable<bool> TrangThai { get; set; }
                
    }
}