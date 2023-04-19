using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.DM_ManHinh
{
    public class DM_ManHinhViewModel
    {

        public DM_ManHinhViewModel()
        {
            this.QL_PhanQuyen = new List<SelectListItem>();
        }

        public string MaManHinh { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tên màn hình")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Vui lòng nhập ít nhất 3 ký tự")]
        public string TenManHinh { get; set; }

        public virtual List<SelectListItem> QL_PhanQuyen { get; set; }
    }
}