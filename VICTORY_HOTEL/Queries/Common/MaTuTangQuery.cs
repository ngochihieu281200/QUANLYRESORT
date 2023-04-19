using System;
using System.Collections.Generic;
using System.Data.Metadata.Edm;
using System.Linq;
using System.Web;
using VICTORY_HOTEL.Models;

namespace VICTORY_HOTEL.Queries.Common
{
    public class MaTuTangQuery
    {
        public static string Matutang(string Bang, string TiepDauNgu)
        {
            VictoryHotelEntities entity = new VictoryHotelEntities();

            try
            {                
                string Ma = "";
                int SoKyTu = TiepDauNgu.Length;
                //set default
                var model = (from kh in entity.KHACHHANGs select kh.MaKH).ToList();

                #region Bảng cần tạo mã
                switch (Bang)
                {
                    case "KHACHHANG":
                        model = (from kh in entity.KHACHHANGs select kh.MaKH).ToList();
                        break;
                    case "PHIEU_DK":
                        model = (from kh in entity.PHIEU_DK select kh.Ma_PDK).ToList();
                        break;
                    case "NHANVIEN":
                        model = (from kh in entity.NHANVIENs select kh.MaNV).ToList();
                        break;
                    case "CHUCVU":
                        model = (from kh in entity.CHUCVUs select kh.MaCV).ToList();
                        break;
                    case "HOADON":
                        model = (from kh in entity.HOADONs select kh.MaHD).ToList();
                        break;
                    case "LOAIPHONGs":
                        model = (from kh in entity.LOAIPHONGs select kh.MaLP).ToList();
                        break;
                    case "DICHVU":
                        model = (from kh in entity.DICHVUs select kh.MaDV).ToList();
                        break;
                    case "DM_ManHinh":
                        model = (from kh in entity.DM_ManHinh select kh.MaManHinh).ToList();
                        break;
                    case "QL_NhomNguoiDung":
                        model = (from kh in entity.QL_NhomNguoiDung select kh.MaNhom).ToList();
                        break;
                    case "CHITIET_PHONG":
                        model = (from kh in entity.CHITIET_PHONG select kh.Ma_CTP).ToList();
                        break;
                    case "MOTA_PHONG":
                        model = (from kh in entity.MOTA_PHONG select kh.Ma_MoTa).ToList();
                        break;
                    case "PHONG":
                        model = (from kh in entity.PHONGs select kh.MaPhong).ToList();
                        break;

                }
                //if (Bang == "KHACHHANG")
                //    model = (from kh in entity.KHACHHANGs select kh.MaKH).ToList();
                #endregion

                if (model.Count <= 0)
                {
                    Ma = TiepDauNgu + "00001";
                }
                else
                {
                    int So;
                    So = Convert.ToInt32(model.Last().ToString().Substring(SoKyTu, 5));
                    So = So + 1;
                    if (So < 10) Ma = TiepDauNgu + "0000";
                    else if (So >= 10 && So < 100)
                        Ma = TiepDauNgu + "000";
                    else if (So >= 100 && So < 1000)
                        Ma = TiepDauNgu + "00";
                    else if (So >= 1000 && So < 10000)
                        Ma = TiepDauNgu + "0";
                    Ma = Ma + So.ToString();
                }               
                return Ma;
            }
            catch (Exception ex)
            {
                entity.Dispose();
                return null;
            }
        }        
    }
}