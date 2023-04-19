using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.Phong
{
    public class PhongViewModel
    {
        public PhongViewModel()
        {
            this.CHITIET_PDK = new List<SelectListItem>();
            this.DICHVU_SD = new List<SelectListItem>();
        }
        public virtual List<SelectListItem> CHITIET_PDK { get; set; }
        public virtual List<SelectListItem> DICHVU_SD { get; set; }

        public string MaPhong { get; set; }
        public string MaLP { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập hiện trạng phòng")]
        public string HienTrang { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập số điện thoại phòng")]
        [RegularExpression(@"^([0]{1})(\d{9,10})$", ErrorMessage = "Sai định dạng số điện thoại.")]
        public string So_DT_Phong { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập số người tối đa")]
        [Range(1,10, ErrorMessage = "Vui lòng nhập đúng định dạng số, ít nhất 1, nhiều nhất 10 người.")]
        public int? SoNguoi_Max { get; set; }
        public string GhiChu { get; set; }

        [Display(Name = "Tiền phát sinh")]
        [DisplayFormat(DataFormatString = "{0:n}", ApplyFormatInEditMode = true)]
        public long? TienPhatSinh { get; set; }
    }
}