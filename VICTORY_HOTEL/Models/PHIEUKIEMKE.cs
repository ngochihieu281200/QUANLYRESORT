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
    
    public partial class PHIEUKIEMKE
    {
        public string Ma_KK { get; set; }
        public string IDNguoiDung { get; set; }
        public Nullable<System.DateTime> ThoiGian { get; set; }
        public Nullable<long> TongThu { get; set; }
        public Nullable<long> TongChi { get; set; }
    
        public virtual QL_NguoiDung QL_NguoiDung { get; set; }
    }
}