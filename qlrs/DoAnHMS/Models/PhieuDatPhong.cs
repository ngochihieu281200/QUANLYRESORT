//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DoAnHMS.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class PhieuDatPhong
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PhieuDatPhong()
        {
            this.CTPhieuDatPhongs = new HashSet<CTPhieuDatPhong>();
            this.PhieuThuePhongs = new HashSet<PhieuThuePhong>();
        }
    
        public string maPDP { get; set; }
        public string maKH { get; set; }
        public System.DateTime ngayDen { get; set; }
        public System.DateTime ngayDi { get; set; }
        public decimal tongTienCoc { get; set; }
        public int soNguoi { get; set; }
        public bool tinhTrang { get; set; }
        public string maNV { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CTPhieuDatPhong> CTPhieuDatPhongs { get; set; }
        public virtual KhachHang KhachHang { get; set; }
        public virtual NhanVien NhanVien { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PhieuThuePhong> PhieuThuePhongs { get; set; }
    }
}