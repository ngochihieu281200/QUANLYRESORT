//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace VICTORY_HOTEL.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class LOAIPHONG
    {
        public LOAIPHONG()
        {
            this.CHITIET_PHONG = new HashSet<CHITIET_PHONG>();
            this.MOTA_PHONG = new HashSet<MOTA_PHONG>();
            this.PHONGs = new HashSet<PHONG>();
        }
    
        public string MaLP { get; set; }
        public string TenLoaiPhong { get; set; }
        public Nullable<long> MaGia { get; set; }
    
        public virtual ICollection<CHITIET_PHONG> CHITIET_PHONG { get; set; }
        public virtual DONGIA DONGIA { get; set; }
        public virtual ICollection<MOTA_PHONG> MOTA_PHONG { get; set; }
        public virtual ICollection<PHONG> PHONGs { get; set; }
    }
}