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
    
    public partial class DM_ManHinh
    {
        public DM_ManHinh()
        {
            this.QL_PhanQuyen = new HashSet<QL_PhanQuyen>();
        }
    
        public string MaManHinh { get; set; }
        public string TenManHinh { get; set; }
    
        public virtual ICollection<QL_PhanQuyen> QL_PhanQuyen { get; set; }
    }
}
