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
    
    public partial class QL_NhomNguoiDung
    {
        public QL_NhomNguoiDung()
        {
            this.QL_NguoiDungNhomNguoiDung = new HashSet<QL_NguoiDungNhomNguoiDung>();
            this.QL_PhanQuyen = new HashSet<QL_PhanQuyen>();
        }
    
        public string MaNhom { get; set; }
        public string TenNhom { get; set; }
        public string GhiChu { get; set; }
    
        public virtual ICollection<QL_NguoiDungNhomNguoiDung> QL_NguoiDungNhomNguoiDung { get; set; }
        public virtual ICollection<QL_PhanQuyen> QL_PhanQuyen { get; set; }
    }
}