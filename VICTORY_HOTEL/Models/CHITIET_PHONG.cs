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
    
    public partial class CHITIET_PHONG
    {
        public string Ma_CTP { get; set; }
        public string Ten_CTP { get; set; }
        public Nullable<long> GiaChiTiet { get; set; }
        public string MaLP { get; set; }
    
        public virtual LOAIPHONG LOAIPHONG { get; set; }
    }
}