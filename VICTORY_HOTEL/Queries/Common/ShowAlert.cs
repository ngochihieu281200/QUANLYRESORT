using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;

namespace VICTORY_HOTEL.Queries.Common
{
    public class ShowAlert
    {
        public static string Show(string message)
        {
            string str = "<script>$(document).ready(function () {swal('" + message + "');});</script>";
            return str;
        }
        public static string ShowSuccess(string title, string message)
        {
            //swal("Good job!", "You clicked the button!", "success")
            string str = "<script>$(document).ready(function () {swal('" + title + "','" + message + "','success');});</script>";
            return str;
        }
        public static string ShowError(string title, string message)
        {
            //swal("Oops...", "Something went wrong!", "error");
            string str = "<script>$(document).ready(function () {swal('" + title + "','" + message + "','error');});</script>";
            return str;
        }
        public static string ShowDelete(string title, string message)
        {
            string str = "<script>$(document).ready(function () {swal('" + message + "');});</script>";
            return str;
        }
    }
}