using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.QL_NguoiDung
{
    public class QL_NguoiDungViewModel
    {
        public QL_NguoiDungViewModel()
        {
            this.PHIEUCHIs = new List<SelectListItem>();
            this.PHIEUKIEMKEs = new List<SelectListItem>();
            this.QL_NguoiDungNhomNguoiDung = new List<SelectListItem>();
            this.PHIEU_DK = new List<SelectListItem>();
            this.HOADONs = new List<SelectListItem>();
        }
        [Required(ErrorMessage = "Vui lòng nhập tên đăng nhập.")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Vui lòng nhập ít nhất 3 ký tự")]
        public string IDNguoiDung { get; set; }
        
        [Required(ErrorMessage = "Vui lòng nhập mật khẩu.")]        
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Vui lòng nhập ít nhất 3 ký tự")]
        public string MatKhau { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập lại mật khẩu")]
        [System.ComponentModel.DataAnnotations.Compare("MatKhau", ErrorMessage = "Nhập lại mật khẩu không đúng.")]
        public string ConfirmPassowrd { get; set; }

        public string MaNV { get; set; }
        public Nullable<bool> HoatDong { get; set; }
        public virtual List<SelectListItem> PHIEUCHIs { get; set; }
        public virtual List<SelectListItem> PHIEUKIEMKEs { get; set; }
        public virtual List<SelectListItem> QL_NguoiDungNhomNguoiDung { get; set; }
        public virtual List<SelectListItem> PHIEU_DK { get; set; }
        public virtual List<SelectListItem> HOADONs { get; set; }
    }
}