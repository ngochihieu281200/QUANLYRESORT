using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.ChucVu
{
    public class ChucVuViewModel
    {
        public ChucVuViewModel()
        {
            this.NHANVIENs = new List<SelectListItem>();
        }
        public virtual List<SelectListItem> NHANVIENs { get; set; }
        public string MaCV { get; set; }

        [Required(ErrorMessage ="Vui lòng nhập tên Chức Vụ")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Vui lòng nhập ít nhất 3 ký tự")]
        public string TenCV { get; set; }
    }
}