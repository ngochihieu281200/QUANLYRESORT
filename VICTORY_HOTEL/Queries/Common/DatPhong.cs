using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VICTORY_HOTEL.Models;

namespace VICTORY_HOTEL.Queries.Common
{
    public class DatPhong
    {
        public List<PHONG> Items = new List<PHONG>();
        public void Add(string Id)
        {
            try
            {
                var Item = Items.Single(p => p.MaPhong == Id);
            }
            catch
            {
                using (var entity = new VictoryHotelEntities())
                {
                    var Item = entity.PHONGs.Find(Id);
                    Items.Add(Item);
                }
            }
        }

        public void Remove(string Id)
        {
            var Item = Items.Single(p => p.MaPhong == Id);
            Items.Remove(Item);
        }

        public void Update(string Id)
        {
            var Item = Items.Single(p => p.MaPhong == Id);
        }

        public void Clear()
        {
            Items.Clear();
        }
        public static DatPhong Dat_Phong
        {
            get
            {
                var dp = HttpContext.Current.Session["Dat_Phong"] as DatPhong;
                if (dp == null)
                {
                    dp = new DatPhong();
                    HttpContext.Current.Session["Cart"] = dp;
                }
                return dp;
            }
        }
    }
}