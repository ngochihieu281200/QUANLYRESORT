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
    
    public partial class QL_NguoiDung
    {
        public QL_NguoiDung()
        {
            this.PHIEUCHIs = new HashSet<PHIEUCHI>();
            this.PHIEUKIEMKEs = new HashSet<PHIEUKIEMKE>();
            this.QL_NguoiDungNhomNguoiDung = new HashSet<QL_NguoiDungNhomNguoiDung>();
            this.PHIEU_DK = new HashSet<PHIEU_DK>();
            this.HOADONs = new HashSet<HOADON>();
        }
    
        public string IDNguoiDung { get; set; }
        public string MatKhau { get; set; }
        public string MaNV { get; set; }
        public Nullable<bool> HoatDong { get; set; }
    
        public virtual NHANVIEN NHANVIEN { get; set; }
        public virtual ICollection<PHIEUCHI> PHIEUCHIs { get; set; }
        public virtual ICollection<PHIEUKIEMKE> PHIEUKIEMKEs { get; set; }
        public virtual ICollection<QL_NguoiDungNhomNguoiDung> QL_NguoiDungNhomNguoiDung { get; set; }
        public virtual ICollection<PHIEU_DK> PHIEU_DK { get; set; }
        public virtual ICollection<HOADON> HOADONs { get; set; }
    }
}