using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.DichVu
{
    public class DichVuViewModel
    {
        public DichVuViewModel()
        {
            this.DICHVU_SD = new List<SelectListItem>();
        }

        public string MaDV { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tên dịch vụ")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Vui lòng nhập ít nhất 3 ký tự")]
        public string TenDV { get; set; }
        public Nullable<long> GiaDV { get; set; }

        public virtual List<SelectListItem> DICHVU_SD { get; set; }
    }
}