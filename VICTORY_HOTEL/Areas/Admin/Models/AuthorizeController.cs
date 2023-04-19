using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VICTORY_HOTEL.Models;

namespace VICTORY_HOTEL.Areas.Admin.Models
{
    public class AuthorizeController : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            VictoryHotelEntities entity = new VictoryHotelEntities();

            if (HttpContext.Current.Session["UserIDAdmin"] != null)
            {
                string username = HttpContext.Current.Session["UserIDAdmin"].ToString();

                var group_user = (from nd in entity.QL_NguoiDung
                                  join ndnnd in entity.QL_NguoiDungNhomNguoiDung on nd.IDNguoiDung equals ndnnd.IDNguoiDung
                                  join nnd in entity.QL_NhomNguoiDung on ndnnd.MaNhomNguoiDung equals nnd.MaNhom
                                  where nd.IDNguoiDung == username
                                  select nnd.TenNhom).FirstOrDefault();

                var query = (from nd in entity.QL_NguoiDung
                             join ndnnd in entity.QL_NguoiDungNhomNguoiDung on nd.IDNguoiDung equals ndnnd.IDNguoiDung
                             join nnd in entity.QL_NhomNguoiDung on ndnnd.MaNhomNguoiDung equals nnd.MaNhom
                             join pq in entity.QL_PhanQuyen on nnd.MaNhom equals pq.MaNhomNguoiDung
                             join mh in entity.DM_ManHinh on pq.MaManHinh equals mh.MaManHinh
                             where nd.IDNguoiDung == username && pq.CoQuyen == true
                             select mh.TenManHinh).ToList();
                #region Test sql
                //select pq.MaManHinh, TenManHinh,MaNhom, TenNhom, CoQuyen
                //from DM_ManHinh as mh, QL_NhomNguoiDung as nnd, QL_PhanQuyen pq
                //where
                //    pq.MaManHinh = mh.MaManHinh and pq.MaNhomNguoiDung = nnd.MaNhom and
                //    pq.MaNhomNguoiDung = N'NH00001'
                //------------------------------------------------------------------ -
                //select TenManHinh
                //from
                //    [dbo].[QL_NguoiDung] as nd,
                //	[dbo].[QL_NguoiDungNhomNguoiDung] as ndnnd,
                //	[dbo].[QL_NhomNguoiDung] as nnd,
                //	[dbo].[QL_PhanQuyen] as pq,
                //	[dbo].[DM_ManHinh] as mh
                //where

                //    nd.IDNguoiDung=ndnnd.IDNguoiDung
                //    and ndnnd.MaNhomNguoiDung=nnd.MaNhom
                //    and pq.MaNhomNguoiDung=nnd.MaNhom
                //    and pq.MaManHinh=mh.MaManHinh
                //    and pq.CoQuyen=1
                //	and nd.IDNguoiDung='aaa'
                #endregion

                string[] str_list_permission = new string[1000];
                int i = 0;
                foreach (var item in query)
                {
                    str_list_permission[i] = item.ToString();
                    i++;
                }
                string actionName = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName + "/" + filterContext.ActionDescriptor.ActionName;
                //if (!str_list_permission.Contains(actionName))
                //{
                //    filterContext.Result = new RedirectResult("~/Admin/Account/NotificationAuthorize");
                //}
                #region Note
                //var query = (from p in db.Permission
                //             join a in db.Action on p.ActionId equals a.Id
                //             where p.RoleName == username
                //             select new
                //             {
                //                 Id = p.Id,
                //                 RoleName = p.RoleName,
                //                 ActionId = p.ActionId,
                //                 ActionName = a.Name
                //             }).ToList();
                //string[] abc = null;
                //int aaa = 0;
                //foreach (var i in query)
                //{
                //    abc[aaa] = i.ActionName.ToString();
                //    aaa++;
                //}
                //string actionName = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName + "/" + filterContext.ActionDescriptor.ActionName;
                //if (!abc.Contains(actionName))
                //{
                //    filterContext.Result = new RedirectResult("~/Admin/Home/NotificationAuthorize");
                //}

                //if (username == "admin")
                //{
                //    string[] listpermission = {
                //                                  "Category/Index",
                //                                  "Category/Insert",
                //                                  "Category/Update",
                //                                  "Category/Delete",
                //                                  "Category/Edit",

                //                                  "Product/Index",
                //                                  "Product/Insert",
                //                                  "Product/Update",
                //                                  "Product/Delete",
                //                                  "Product/Edit",

                //                                  "Supplier/Index",
                //                                  "Supplier/Insert",
                //                                  "Supplier/Update",
                //                                  "Supplier/Delete",
                //                                  "Supplier/Edit",

                //                                  "Inventory/ByCategory",
                //                                  "Inventory/ByCategory2",
                //                                  "Inventory/BySupplier",

                //                                  "Revenue/ByCategory",
                //                                  "Revenue/ByCustomer",
                //                                  "Revenue/BySupplier",
                //                                  "Revenue/ByProduct",
                //                                  "Revenue/ByYear",

                //                                  "Revenue/ByMonth",
                //                                  "Revenue/ByQuarter"
                //                              };
                //    string actionName = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName + "/" + filterContext.ActionDescriptor.ActionName;
                //    if (!listpermission.Contains(actionName))
                //    {
                //        filterContext.Result = new RedirectResult("~/Admin/Home/NotificationAuthorize");
                //    }
                //}
                //if (username == "quanlythongke")
                //{
                //    string[] listpermission1 = {
                //                                  "Inventory/ByCategory",
                //                                  "Inventory/ByCategory2",
                //                                  "Inventory/BySupplier",

                //                                  "Revenue/ByCategory",
                //                                  "Revenue/ByCustomer",
                //                                  "Revenue/BySupplier",
                //                                  "Revenue/ByProduct",
                //                                  "Revenue/ByYear",

                //                                  "Revenue/ByMonth",
                //                                  "Revenue/ByQuarter"
                //                              };
                //    string actionName = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName + "/" + filterContext.ActionDescriptor.ActionName;
                //    if (!listpermission1.Contains(actionName))
                //    {
                //        filterContext.Result = new RedirectResult("~/Admin/Home/NotificationAuthorize");
                //    }
                //}
                #endregion
            }
            else
            {
                //Truy xuất khi chưa đăng nhập
                filterContext.Result = new RedirectResult("~/Admin/NotificationAuthorize/Index");
            }

        }        
    }
}