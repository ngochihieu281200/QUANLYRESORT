using OfficeOpenXml;
using OfficeOpenXml.Style;
using OfficeOpenXml.Table;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;

namespace VICTORY_HOTEL.Areas.Admin.Models
{
    public class CreateExcel
    {      
        public static void createHeaders(ExcelWorksheet worksheet,int row, int col, string htext, bool fontBold, Color color)
        {
            worksheet.Cells[row, col].Value = htext;
            worksheet.Cells[row, col].Style.Border.BorderAround(ExcelBorderStyle.Thin, System.Drawing.Color.Black);
            worksheet.Cells[row, col].Style.Font.Bold = fontBold;
            worksheet.Cells[row, col].Style.Font.Color.SetColor(color);
            worksheet.Cells[row, col].Style.HorizontalAlignment = ExcelHorizontalAlignment.CenterContinuous;
        }
        public static void addData(ExcelWorksheet worksheet,int row, int col, string data, string format)
        {
            worksheet.Cells[row, col].Value = data;
            worksheet.Cells[row, col].Style.Border.BorderAround(ExcelBorderStyle.Thin, System.Drawing.Color.Black);
            worksheet.Cells[row, col].Style.Numberformat.Format = format;            
        }
        public static void addData_Date(ExcelWorksheet worksheet, int row, int col, DateTime? data)
        {
            worksheet.Cells[row, col].Value = data;
            worksheet.Cells[row, col].Style.Border.BorderAround(ExcelBorderStyle.Thin, System.Drawing.Color.Black);
            worksheet.Cells[row, col].Style.Numberformat.Format = "dd/mm/yyyy";
        }
    }
}