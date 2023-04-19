using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VICTORY_HOTEL.ViewModels.DonGia
{
    public class DonGiaViewModel
    {
        public DonGiaViewModel()
        {
            this.LOAIPHONGs = new List<SelectListItem>();
        }

        public long MaGia { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập giá.")]
        [Display(Name = "Giá")]
        [Range(0, long.MaxValue, ErrorMessage = "Vui lòng nhập đúng định dạng số.")]
        public Nullable<long> Gia { get; set; }

        public virtual List<SelectListItem> LOAIPHONGs { get; set; }
    }
}