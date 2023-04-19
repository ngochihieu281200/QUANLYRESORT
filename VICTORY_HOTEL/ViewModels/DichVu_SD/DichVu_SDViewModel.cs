using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace VICTORY_HOTEL.ViewModels.DichVu_SD
{
    public class DichVu_SDViewModel
    {
        public string MaDV { get; set; }
        public string MaPhong { get; set; }

        [Required(ErrorMessage = "Vui lòng chọn số lượng")]
        public Nullable<int> SoLuong { get; set; }
        public Nullable<bool> TrangThai { get; set; }
    }
}