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
    
    public partial class PHIEUCHI
    {
        public PHIEUCHI()
        {
            this.CHITIETPHIEUCHIs = new HashSet<CHITIETPHIEUCHI>();
        }
    
        public string MaPC { get; set; }
        public string IDNguoiDung { get; set; }
        public Nullable<System.DateTime> NgayLap { get; set; }
        public string ThongTinChi { get; set; }
        public Nullable<long> TongTien { get; set; }
    
        public virtual ICollection<CHITIETPHIEUCHI> CHITIETPHIEUCHIs { get; set; }
        public virtual QL_NguoiDung QL_NguoiDung { get; set; }
    }
}
