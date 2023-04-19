using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace VICTORY_HOTEL.ViewModels.ChiTiet_Phong
{
    public class ChiTiet_PhongViewModel
    {
        public string Ma_CTP { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tên chi tiết phòng.")]
        public string Ten_CTP { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập giá.")]
        [Display(Name ="Giá")]
        [Range(0, long.MaxValue, ErrorMessage = "Vui lòng nhập đúng định dạng số.")]
        public Nullable<long> GiaChiTiet { get; set; }
        public string MaLP { get; set; }
    }
}