using OfficeOpenXml;
using OfficeOpenXml.Style;
using OfficeOpenXml.Table;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Areas.Admin.Models;
using VICTORY_HOTEL.Models;

namespace VICTORY_HOTEL.Areas.Admin.Controllers
{
    public class ExportExcelExampleController : Controller
    {
        VictoryHotelEntities entity = new VictoryHotelEntities();
        // GET: Admin/ExportExcelExample
        public ActionResult Index()
        {
            return View();
        }

        private List<NHANVIEN> CreateTestItems()
        {
            var resultsList = new List<NHANVIEN>();
            var list_nv = (from nv in entity.NHANVIENs
                           join cv in entity.CHUCVUs on nv.MaCV equals cv.MaCV
                           where nv.MaNV == "NV00001"
                           select nv).ToList();
            foreach (var item in list_nv)
            {
                resultsList.Add(item);
            }            
            return resultsList;
        }

        private Stream CreateExcelFile(Stream stream = null)
        {
            var list = CreateTestItems();
            using (var excelPackage = new ExcelPackage(stream ?? new MemoryStream()))
            {
                //// Tạo author cho file Excel
                //excelPackage.Workbook.Properties.Author = "Tác giả";
                //// Tạo title cho file Excel
                //excelPackage.Workbook.Properties.Title = "EPP test background";
                //// thêm tí comments vào làm màu 
                //excelPackage.Workbook.Properties.Comments = "Comments";
                // Add Sheet vào file Excel
                excelPackage.Workbook.Worksheets.Add("First Sheet");
                // Lấy Sheet bạn vừa mới tạo ra để thao tác 
                var workSheet = excelPackage.Workbook.Worksheets[1];
                // Đỗ data vào Excel file
                workSheet.Cells[1, 1].LoadFromCollection(list, true, TableStyles.Dark9);
                BindingFormatForExcel(workSheet, list);
                excelPackage.Save();
                return excelPackage.Stream;
            }
        }
        public ExcelPackage CreateExcelFile2(List<NHANVIEN> nv,string _file)
        {
            FileInfo file = new FileInfo(_file);
            ExcelPackage excel = new ExcelPackage(file, true);
            ExcelWorksheet ws = excel.Workbook.Worksheets["Sheet1"];

            // Set default width cho tất cả column
            //ws.DefaultColWidth = 10;
            ws.Column(1).Width = 5;
            ws.Column(2).Width = 10;
            ws.Column(3).Width = 10;
            ws.Column(4).Width = 20;
            ws.Column(5).Width = 12;
            ws.Column(6).Width = 12;
            ws.Column(7).Width = 12;
            ws.Column(8).Width = 12;
            // Tự động xuống hàng khi text quá dài
            ws.Cells.Style.WrapText = true;
            int startRow = 6;
            int startCol = 0;
            //Tiêu đề
            CreateExcel.createHeaders(ws, startRow, startCol + 1, "DANH SÁCH NHÂN VIÊN", true, Color.Black);
            startRow += 1;
            // Tạo header
            CreateExcel.createHeaders(ws, startRow, startCol + 1, "STT", true, Color.Black);
            CreateExcel.createHeaders(ws, startRow, startCol + 2, "Mã NV", true, Color.Black);
            CreateExcel.createHeaders(ws, startRow, startCol + 3, "Chức Vụ", true, Color.Black);
            CreateExcel.createHeaders(ws, startRow, startCol + 4, "Họ Tên", true, Color.Black);
            CreateExcel.createHeaders(ws, startRow, startCol + 5, "Ngày Sinh", true, Color.Black);
            CreateExcel.createHeaders(ws, startRow, startCol + 6, "Giới Tính", true, Color.Black);
            CreateExcel.createHeaders(ws, startRow, startCol + 7, "Địa Chỉ", true, Color.Black);
            CreateExcel.createHeaders(ws, startRow, startCol + 8, "Điện Thoại", true, Color.Black);

            //Cộng 1 dòng header
            startRow += 1;
            // Đổ dữ liệu từ list vào 
            for (int i = 0; i < nv.Count; i++)
            {
                var item = nv[i];
                CreateExcel.addData(ws, i + startRow, startCol + 1, (i + 1) + "", "");
                CreateExcel.addData(ws, i + startRow, startCol + 2, item.MaNV, "");
                CreateExcel.addData(ws, i + startRow, startCol + 3, item.CHUCVU.TenCV, "");
                CreateExcel.addData(ws, i + startRow, startCol + 4, item.TenNV, "");
                CreateExcel.addData_Date(ws, i + startRow, startCol + 5, item.NgaySinh);
                CreateExcel.addData(ws, i + startRow, startCol + 6, item.GioiTinh, "");
                CreateExcel.addData(ws, i + startRow, startCol + 7, item.DiaChi, "");
                CreateExcel.addData(ws, i + startRow, startCol + 8, item.DienThoai, "");
            }
            // select the range that will be included in the table
            //var range = ws.Cells[startRow - 1, startCol + 1, nv.Count + 1, 8];
            // add the excel table entity
            //var table = ws.Tables.Add(range, "table1");
            //table.TableStyle = TableStyles.Dark9;            
            return excel;
        }
        private void BindingFormatForExcel(ExcelWorksheet worksheet, List<NHANVIEN> listItems)
        {
            // Set default width cho tất cả column
            worksheet.DefaultColWidth = 12;
            worksheet.Column(3).Width = 20;
            worksheet.Column(4).Width = 12;
            worksheet.Column(5).Width = 12;
            worksheet.Column(6).Width = 12;
            worksheet.Column(7).Width = 12;
            // Tự động xuống hàng khi text quá dài
            worksheet.Cells.Style.WrapText = true;
            // Tạo header
            CreateExcel.createHeaders(worksheet, 1, 1, "Ma NV", true, Color.Black);
            CreateExcel.createHeaders(worksheet, 1, 2, "Chuc vu", true, Color.Black);
            CreateExcel.createHeaders(worksheet, 1, 3, "Ho ten", true, Color.Black);
            CreateExcel.createHeaders(worksheet, 1, 4, "Ngay Sinh", true, Color.Black);
            CreateExcel.createHeaders(worksheet, 1, 5, "Gioi tinh", true, Color.Black);
            CreateExcel.createHeaders(worksheet, 1, 6, "Dia chi", true, Color.Black);
            CreateExcel.createHeaders(worksheet, 1, 7, "Dien Thoai", true, Color.Black);

            // Đổ dữ liệu từ list vào 
            for (int i = 0; i < listItems.Count; i++)
            {
                var item = listItems[i];
                CreateExcel.addData(worksheet, i + 2, 1, item.MaNV, "");
                CreateExcel.addData(worksheet, i + 2, 2, item.CHUCVU.TenCV, "");
                CreateExcel.addData(worksheet, i + 2, 3, item.TenNV, "");
                CreateExcel.addData_Date(worksheet, i + 2, 4, item.NgaySinh);
                CreateExcel.addData(worksheet, i + 2, 5, item.GioiTinh, "");
                CreateExcel.addData(worksheet, i + 2, 6, item.DiaChi, "");
                CreateExcel.addData(worksheet, i + 2, 7, item.DienThoai, "");
            }            
        }
        [HttpGet]
        public ActionResult Export()
        {
            //Cách 1
            //// Gọi lại hàm để tạo file excel
            //var stream = CreateExcelFile();
            //// Tạo buffer memory strean để hứng file excel
            //var buffer = stream as MemoryStream;
            //// Đây là content Type dành cho file excel, còn rất nhiều content-type khác nhưng cái này mình thấy okay nhất
            //Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            //// Dòng này rất quan trọng, vì chạy trên firefox hay IE thì dòng này sẽ hiện Save As dialog cho người dùng chọn thư mục để lưu
            //// File name của Excel này là ExcelDemo
            //Response.AddHeader("Content-Disposition", "attachment; filename=ExcelDemo.xlsx");
            //// Lưu file excel của chúng ta như 1 mảng byte để trả về response
            //Response.BinaryWrite(buffer.ToArray());
            //// Send tất cả ouput bytes về phía clients
            //Response.Flush();
            //Response.End();
            //// Redirect về luôn trang index 

            //Cách 2
            string fileBM = Server.MapPath(@"~\Templates\BaoCao.xlsx");
            ExcelPackage package = CreateExcelFile2(CreateTestItems(), fileBM);
            Response.BinaryWrite(package.GetAsByteArray());
            Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            Response.AddHeader("content-disposition", "attachment;  filename=BaoCao.xlsx");
            Response.Flush();
            Response.End();
            return RedirectToAction("Index");
        }
    }
}