using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.QL_NhomNguoiDung
{
    public class QL_NhomNguoiDungViewModel
    {
        public QL_NhomNguoiDungViewModel()
        {
            this.QL_NguoiDungNhomNguoiDung = new List<SelectListItem>();
            this.QL_PhanQuyen = new List<SelectListItem>();
        }

        public string MaNhom { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tên nhóm")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Vui lòng nhập ít nhất 3 ký tự")]
        public string TenNhom { get; set; }
        public string GhiChu { get; set; }

        public virtual new List<SelectListItem> QL_NguoiDungNhomNguoiDung { get; set; }
        public virtual new List<SelectListItem> QL_PhanQuyen { get; set; }
    }
}