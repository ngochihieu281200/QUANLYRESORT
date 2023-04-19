(function ($) {
    "use strict";

    $.fn.gdlr_datepicker_range = function () {
        var gdlr_dfm = ($(this).attr('data-dfm')) ? $(this).attr('data-dfm') : "yy-mm-dd";
        $(this).datepicker({
            minDate: 0,
            dateFormat: gdlr_dfm,
            numberOfMonths: [1, 2],
            beforeShowDay: function (date) {
                var date1 = $.datepicker.parseDate('yy-mm-dd', $("#gdlr-check-in").siblings('.gdlr-datepicker-alt').val());
                var date2 = $.datepicker.parseDate('yy-mm-dd', $("#gdlr-check-out").siblings('.gdlr-datepicker-alt').val());
                return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
            },
            onSelect: function (dateText, inst) {
                var date1 = $.datepicker.parseDate('yy-mm-dd', $("#gdlr-check-in").siblings('.gdlr-datepicker-alt').val());
                var date2 = $.datepicker.parseDate('yy-mm-dd', $("#gdlr-check-out").siblings('.gdlr-datepicker-alt').val());
                if (!date1 || date2) {
                    $("#gdlr-check-in").datepicker('setDate', dateText);
                    $("#gdlr-check-out").val('');
                    $("#gdlr-check-out").siblings('.gdlr-datepicker-alt').val('');
                } else {
                    $("#gdlr-check-out").datepicker('setDate', dateText).trigger('change');
                }
            },
            closeText: objectL10n.closeText,
            currentText: objectL10n.currentText,
            monthNames: objectL10n.monthNames,
            monthNamesShort: objectL10n.monthNamesShort,
            dayNames: objectL10n.dayNames,
            dayNamesShort: objectL10n.dayNamesShort,
            dayNamesMin: objectL10n.dayNamesMin,
            firstDay: objectL10n.firstDay
        });
    }
    
    $.fn.gdlr_datepicker = function () {
        $(this).each(function () {
            $(this).datepicker({
                dateFormat: ($(this).attr('data-dfm')) ? $(this).attr('data-dfm') : "yy-mm-dd",
                minDate: 0,
                altField: $(this).siblings('.gdlr-datepicker-alt'),
                altFormat: "yy-mm-dd",
                changeMonth: true,
                changeYear: true,
                onSelect: function (dateText, inst) {
                    $(this).trigger('change');
                    $('#gdlr-datepicker-range').datepicker('refresh');
                },
                closeText: objectL10n.closeText,
                currentText: objectL10n.currentText,
                monthNames: objectL10n.monthNames,
                monthNamesShort: objectL10n.monthNamesShort,
                dayNames: objectL10n.dayNames,
                dayNamesShort: objectL10n.dayNamesShort,
                dayNamesMin: objectL10n.dayNamesMin,
                firstDay: objectL10n.firstDay
            });

            var current_date = new Date($(this).val() + 'T00:00:00');
            current_date = new Date(current_date.getTime() + (current_date.getTimezoneOffset() * 60000));
            //set date default
            //$(this).datepicker('setDate', current_date + (1));
            $("#gdlr-check-in").datepicker('setDate', current_date);
            $("#gdlr-check-out").datepicker('setDate', current_date + (1));
            //set ngày bắt đầu tiếp theo
            $("#gdlr-check-out").datepicker('option', 'minDate', current_date + (1));
        });
    }

    //---------------
    $.fn.gdlr_datepicker_range_dd = function () {       
        var gdlr_dfm = ($(this).attr('data-dfm')) ? $(this).attr('data-dfm') : "dd/mm/yy";
        $(this).datepicker({
            //minDate: 0,
            dateFormat: gdlr_dfm,
            numberOfMonths: [1, 2],
            //beforeShowDay: function (date) {
            //    var date1 = $.datepicker.parseDate('dd/mm/yy', $("#gdlr-birthday").siblings('.gdlr-datepicker-birthday').val());
            //    return [true,date1];
            //},
            onSelect: function (dateText, inst) {
                var date1 = $.datepicker.parseDate('dd/mm/yy', $("#gdlr-birthday").siblings('.gdlr-datepicker-birthday').val());
                var date_my = dateText.toString().split('/');
                alert(date_my);
                if (!date1) {
                    $("#gdlr-birthday").datepicker('setDate', dateText);
                    //$('#gdlr-birthday-main').val('setDate', date_my[2] + "/" + date_my[1] + "/" + date_my[0]);
                }
                else {
                    $("#gdlr-birthday").datepicker('setDate', dateText).trigger('change');
                    //$('#gdlr-birthday-main').val('setDate', date_my[2] + "/" + date_my[1] + "/" + date_my[0]);
                }
            }
        });
    }
    $.fn.gdlr_datepicker_dd = function () {
        $(this).each(function () {
            var dateToday = new Date();
            var yrRange = "1900:" + (dateToday.getFullYear()-18);
            $(this).datepicker({
                dateFormat: ($(this).attr('data-dfm')) ? $(this).attr('data-dfm') : "dd/mm/yy",
                //minDate: 0,
                altField: $(this).siblings('.gdlr-datepicker-birthday'),
                altFormat: "dd/mm/yy",
                changeMonth: true,
                changeYear: true,
                yearRange: yrRange,
                onSelect: function (dateText, inst) {
                    //$(this).trigger('change');
                    //$('#gdlr_datepicker_range_dd').datepicker('refresh');
                    //$("#gdlr-birthday").trigger('change');
                }                
            });
        });
    }
    //---------------
   
    $.fn.gdlr_single_booking = function () {

        var resv_bar = $(this);
        var room_select = "";
        var so_luong_phong = 0;
        var button_gdlr_load_room_select = 0;
        var so_dem = 1;
        $(this).find('.gdlr-datepicker').gdlr_datepicker();

        // check in date and night num change
        $(this).on('change', '#gdlr-night, #gdlr-check-in', function () {
            var check_in = resv_bar.find('#gdlr-check-in');
            var check_out = resv_bar.find('#gdlr-check-out');
            var night_num = resv_bar.find('#gdlr-night');

            if (check_in.val()) {

                var check_out_date = check_in.datepicker('getDate', '+1d');
                check_out_date.setDate(check_out_date.getDate() + parseInt(night_num.val()));

                var check_out_min = check_in.datepicker('getDate', '+1d');
                check_out_min.setDate(check_out_min.getDate() + 1);

                check_out.datepicker('option', 'minDate', check_out_min);

                check_out.datepicker('setDate', check_out_date);
                so_dem = parseInt(night_num.val());
            }
        });        

        // check out date change
        $(this).on('change', '#gdlr-check-out', function () {
            var check_in = resv_bar.find('#gdlr-check-in').datepicker('getDate');
            var check_out = $(this).datepicker('getDate');
            var date_diff = Math.ceil((check_out - check_in) / 86400000); // 1000/60/60/24

            if (check_in && date_diff > 0) {
                var night_num = resv_bar.find('#gdlr-night');
                if (night_num.children('option[value="' + date_diff + '"]').length == 0) {
                    night_num.append('<option value="' + date_diff + '" >' + date_diff + '</option>')
                }
                $('#gdlr-night').val(date_diff);
                so_dem = date_diff;
            }
        });

        // amount change
        $(this).on('change', '#gdlr-room-number', function () {
            var amount = parseInt($(this).val());
            var resv_room = resv_bar.find('#gdlr-reservation-people-amount-wrapper');
            var room_diff = amount - resv_room.children().length;
            if (room_diff > 0) {
                for (var i = 0; i < room_diff; i++) {
                    var new_room = resv_room.children(':first-child').clone().hide();
                    new_room.find('.gdlr-reservation-people-title span').html(resv_room.children().length + 1);
                    new_room.appendTo(resv_room).slideDown(200);
                }
            } else if (room_diff < 0) {
                resv_room.children().slice(room_diff).slideUp(200, function () {
                    $(this).remove();
                });
            }
        });

        //Load list room
        $(this).on('click', '#gdlr-load-room', function () {
            //disable 
            var d1 = resv_bar.find('#gdlr-night');
            for (var i = 0; i < d1.length; i++) {
                d1[i].disabled = true;
            }
            var d2 = resv_bar.find('#gdlr-check-in');
            for (var i = 0; i < d2.length; i++) {
                d2[i].disabled = true;
            }
            var d3 = resv_bar.find('#gdlr-check-out');
            for (var i = 0; i < d3.length; i++) {
                d3[i].disabled = true;
            }            
            //gan gia tri 
            button_gdlr_load_room_select = 1;

            var pid = resv_bar.attr("data-id");
            var date1 = resv_bar.find('#gdlr-check-in').val().toString();
            var date2 = resv_bar.find('#gdlr-check-out').val().toString();
            var room = resv_bar.find('#gdlr-room-number-bb');
            var data_1 = pid + "&" + date1 + "&" + date2;
            $.ajax({
                type: "POST",
                url: "/DatPhong/BB2",
                async: false,
                cache: false,
                dataType: "json",
                data: { data_my: data_1 },
                success: function (str1) {
                    if (str1 != null) {
                        room.children().remove();
                        for (var i in str1) {
                            room.append('<option value="' + str1[i].toString() + '" >' + str1[i].toString() + '</option>')
                            so_luong_phong++;
                        }
                    }
                }
            });
        });

        //add room
        $(this).on('click', '#gdlr-add-room', function () {
            var room_num = parseInt(resv_bar.find('#gdlr-room-number').val());
            var resv_room = resv_bar.find('#gdlr-reservation-people-amount-wrapper');

            if (room_num < 10) {
                var room = resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-1).find('#gdlr-room-number-bb');
                room_select = room.select().val();// room_select --public 
                if (room_select != '' && room_select != null) {
                    
                    if (room_num < so_luong_phong)//kiểm tra số lượng phòng
                    {
                        //disable room = true
                        var r1 = resv_bar.find('#gdlr-load-room');//disable load list room
                        for (var i = 0; i < r1.length; i++) {
                            r1[i].disabled = true;
                        }
                        var nodes = resv_room.children(':last-child').find('#gdlr-room-number-bb');
                        for (var i = 0; i < nodes.length; i++) {
                            nodes[i].disabled = true;
                        }
                        //tăng số phòng
                        $('#gdlr-room-number').val(room_num + 1);
                        //Thêm phòng
                        var add_room = resv_room.children(':last-child').clone().hide();//thêm phòng dựa theo last-child
                        add_room.find('.gdlr-reservation-people-title span').html(resv_room.children().length + 1);
                        add_room.appendTo(resv_room).slideDown(200);
                        //Xử lý loại mã phòng đã chọn
                        var new_room = resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-1).find('#gdlr-room-number-bb');
                        if (new_room.children('option[value="' + room_select + '"]').length == 1) {
                            //alert('Loại bỏ mã phòng: ' + room_select);
                            new_room.children('option[value="' + room_select + '"]').remove();
                            //disable room = false
                            var nodes = resv_room.children(':last-child').find('#gdlr-room-number-bb');
                            for (var i = 0; i < nodes.length; i++) {
                                nodes[i].disabled = false;
                            }
                        }
                    } else {
                        swal('Không còn phòng thỏa yêu cầu.');
                    }
                } else {
                    swal('Không có phòng! Vui lòng cập nhật lại danh sách phòng.');
                }
            }
        });
        //reset room-----------------------------------------------------------------
        $(this).on('click', '#gdlr-reset-room', function () {
            var room_num = parseInt(resv_bar.find('#gdlr-room-number').val());
            var resv_room = resv_bar.find('#gdlr-reservation-people-amount-wrapper');
            if (room_num > 1) {
                //giảm số phòng
                $('#gdlr-room-number').val(room_num - 1);
                resv_room.children().slice(-1).slideUp(200, function () {
                    $(this).remove();
                })                
            }
            //disable room = false //--note -- do chạy đồng bộ nên lùi lại 1 đơn vị slice(-2)
            var nodes = resv_room.children().slice(-2).find('#gdlr-room-number-bb');
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].disabled = false;
            }
        });

        // room select change--------------------------------------------------------
        $(this).on('change', '#gdlr-room-number-bb', function () {
            room_select = $(this).select().val();// room_select --public
        });
        //sumit----------------------------------------------------------------------
        $(this).submit(function () {
            //if ($(this).find('select[name=gdlr-hotel-branches]').val() == '') {
            //    $(this).find('#please-select-branches').slideDown();
            //    return false;
            //}

            //var pid = resv_bar.attr("data-id");
            //var date1 = resv_bar.find('#gdlr-check-in').val().toString();
            //var date2 = resv_bar.find('#gdlr-check-out').val().toString();
            //var data_1 = pid + "-" + date1 + "-" + date2;
            //var string = "";
            //var nodes = resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().find('.gdlr-reservation-people-amount');

            //var SoPhong = parseInt(resv_bar.find("#gdlr-room-number").val());
            //var resv_room = resv_bar.find('#gdlr-reservation-people-amount-wrapper');
            ////lay phong
            //for (var i = SoPhong; i > 0; i--) {
            //    string += resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-i).find('#gdlr-room-number-bb').select().val();
            //    string += "/" + resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-i).find('#gdlr-adult-number-bb').select().val();
            //    string += "/" + resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-i).find('#gdlr-children-number-bb').select().val();
            //    string += "*";
            //}
            //data_1 += "-" + string;
            //$.ajax({
            //    type: "GET",
            //    url: "/DatPhong/BB3",
            //    async: false,
            //    cache: false,
            //    dataType: "json",
            //    data: { data_my: data_1 },
            //    success: function (str) {
            //    }
            //});
        });
        //test ----------------------------------------------------------------
        $(this).on('click', '#gdlr-test-room', function () {
            var pid = resv_bar.attr("data-id");
            var date1 = resv_bar.find('#gdlr-check-in').val().toString();
            var date2 = resv_bar.find('#gdlr-check-out').val().toString();
            var data_1 = pid + "&" + date1 + "&" + date2;
            var string = "";
            var nodes = resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().find('.gdlr-reservation-people-amount');
            var SoPhong = parseInt(resv_bar.find("#gdlr-room-number").val());
            var resv_room = resv_bar.find('#gdlr-reservation-people-amount-wrapper');
            //lay phong
            for (var i = SoPhong; i > 0; i--) {
                string += resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-i).find('#gdlr-room-number-bb').select().val();
                string += "%" + resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-i).find('#gdlr-adult-number-bb').select().val();
                string += "%" + resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-i).find('#gdlr-children-number-bb').select().val();
                string += "*";
            }
            data_1 += "&" + string;
            
            $.ajax({
                type: "POST",
                url: "/DatPhong/BB3",
                async: false,
                cache: false,
                dataType: "json",
                data: { data_my: data_1 },
                success: function (data_my) {                    
                }
            });
            //alert('suscess');
            swal('Kiểm tra hoàn tất');
        });
        // next select --------------------------------------------------------
        $(this).on('click', '#gdlr-finish-room', function () {
            if (button_gdlr_load_room_select == 1)
            {
                var pid = resv_bar.attr("data-id");
                var date1 = resv_bar.find('#gdlr-check-in').val().toString();
                var date2 = resv_bar.find('#gdlr-check-out').val().toString();
                var data_1 = pid + "&" + date1 + "&" + date2;
                var string = "";
                var nodes = resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().find('.gdlr-reservation-people-amount');
                var SoPhong = parseInt(resv_bar.find("#gdlr-room-number").val());
                var resv_room = resv_bar.find('#gdlr-reservation-people-amount-wrapper');
                //lay phong
                for (var i = SoPhong; i > 0; i--) {
                    string += resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-i).find('#gdlr-room-number-bb').select().val();
                    string += "%" + resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-i).find('#gdlr-adult-number-bb').select().val();
                    string += "%" + resv_bar.find('#gdlr-reservation-people-amount-wrapper').children().slice(-i).find('#gdlr-children-number-bb').select().val();
                    string += "*";
                }
                data_1 += "&" + string;
                //số đêm                
                var night_num = resv_bar.find('#gdlr-night');
                so_dem = parseInt(night_num.val());
                data_1 += "&" + so_dem.toString();
                $.ajax({
                    type: "POST",
                    url: "/DatPhong/BB3",
                    async: false,
                    cache: false,
                    dataType: "json",
                    data: { data_my: data_1 },
                    success: function (data_my) {
                    }
                });
                //reset value
                button_gdlr_load_room_select = 0;
                so_dem = 1;
            }
            else {
                swal('Chưa chọn phòng!');
            }
        });
    }

    $.fn.gdlr_hotel_booking = function () {

        var area = {
            wrapper: $(this),
            resv_bar: $(this).find('#gdlr-reservation-bar'),
            room_form: $(this).find('#gdlr-reservation-bar-room-form'),
            date_form: $(this).find('#gdlr-reservation-bar-date-form'),
            summary_form: $(this).find('#gdlr-reservation-bar-summary-form'),
            service_form: $(this).find('#gdlr-reservation-bar-service-form'),

            proc_bar: $(this).find('#gdlr-booking-process-bar'),
            content_area: $(this).find('#gdlr-booking-content-inner'),

        };

        var resv_bar = {
            init: function () {
                //dd
                // check in date and night num change
                area.resv_bar.on('change', '#gdlr-night, #gdlr-check-in', function () {
                    var check_in = area.resv_bar.find('#gdlr-check-in');
                    var check_out = area.resv_bar.find('#gdlr-check-out');
                    var night_num = area.resv_bar.find('#gdlr-night');

                    if (check_in.val()) {
                        var check_out_date = check_in.datepicker('getDate', '+1d');
                        check_out_date.setDate(check_out_date.getDate() + parseInt(night_num.val()));

                        var check_out_min = check_in.datepicker('getDate', '+1d');
                        check_out_min.setDate(check_out_min.getDate() + 1);

                        check_out.datepicker('option', 'minDate', check_out_min);

                        check_out.datepicker('setDate', check_out_date);

                        $('#gdlr-datepicker-range').datepicker('refresh');
                    }
                });

                // check out date change
                area.resv_bar.on('change', '#gdlr-check-out', function () {
                    var check_in = area.resv_bar.find('#gdlr-check-in').datepicker('getDate');
                    var check_out = $(this).datepicker('getDate');
                    var date_diff = Math.ceil((check_out - check_in) / 86400000); // 1000/60/60/24

                    if (check_in && date_diff > 0) {
                        var night_num = area.resv_bar.find('#gdlr-night');
                        if (night_num.children('option[value="' + date_diff + '"]').length == 0) {
                            night_num.append('<option value="' + date_diff + '" >' + date_diff + '</option>')
                        }
                        $('#gdlr-night').val(date_diff);
                    }
                });

                // amount change
                area.resv_bar.on('change', '#gdlr-room-number', function () {
                    var amount = parseInt($(this).val());
                    var resv_room = area.resv_bar.find('#gdlr-reservation-people-amount-wrapper');
                    var room_diff = amount - resv_room.children().length;
                    if (room_diff > 0) {
                        for (var i = 0; i < room_diff; i++) {
                            var new_room = resv_room.children(':first-child').clone().hide();
                            new_room.find('.gdlr-reservation-people-title span').html(resv_room.children().length + 1);
                            new_room.appendTo(resv_room).slideDown(200);
                        }
                    } else if (room_diff < 0) {
                        resv_room.children().slice(room_diff).slideUp(200, function () {
                            $(this).remove();
                        });
                    }

                });

                // check availability button
                area.resv_bar.on('click', '#gdlr-reservation-bar-button', function () {
                    main.change_state({ state: 2 });
                    return false;
                });

                // query again when input change//thay doi
                //area.resv_bar.on('change', '#gdlr-check-in, #gdlr-night, #gdlr-check-out, #gdlr-room-number, #gdlr-hotel-branches, ' +
				//	'select[name="gdlr-adult-number[]"], select[name="gdlr-children-number[]"]', function () {

				//	    if (parseInt(area.proc_bar.attr('data-state')) > 1) {
				//	        area.room_form.slideUp(function () {
				//	            $(this).html('').removeClass('gdlr-active');
				//	            main.change_state({ state: 2 });
				//	        });

				//	    }
				//	});
            }
        }

        var proc_bar = {
            get_state: function () {
                return area.proc_bar.attr('data-state');
            },

            set_state: function (state) {
                area.proc_bar.attr('data-state', state);
                area.proc_bar.children('[data-process="' + state + '"]').addClass('gdlr-active').siblings().removeClass('gdlr-active');
            }
        }

        var main = {
            init: function () {

                // init date picker
                area.wrapper.find('.gdlr-datepicker').gdlr_datepicker();
                area.wrapper.find("#gdlr-datepicker-range").gdlr_datepicker_range();
                //date birthday
                area.wrapper.find('.gdlr-datepicker1').gdlr_datepicker_dd();
                area.wrapper.find("#gdlr-datepicker-range-dd").gdlr_datepicker_range_dd();

                // reservation bar event
                resv_bar.init();

                // room selection event
                this.room_select();

                // contact form event
                this.contact_submit();
            },

            room_select: function () {
                area.content_area.on('click', '.price-breakdown-close', function () {
                    $(this).closest('.price-breakdown-wrapper').fadeOut(200);
                    return false;
                });
                area.content_area.on('click', '.gdlr-price-break-down', function () {
                    $(this).children('.price-breakdown-wrapper').fadeIn(200);
                });

                //area.content_area.on('click', '.gdlr-room-selection',function(){
                //	$('body').animate({scrollTop: area.proc_bar.offset().top}, 300); 
                //	area.room_form.find('.gdlr-active input').val($(this).attr('data-roomid'));
                //	main.change_state({ state: 2, room_id: $(this).attr('data-roomid') });
                //	return false;
                //});

                area.content_area.on('click', '.gdlr-pagination a', function () {
                    main.change_state({ paged: $(this).attr('data-paged'), state: 2 });
                    return false;
                });

                area.room_form.on('click', '.gdlr-reservation-change-room', function () {
                    $(this).closest('.gdlr-reservation-room').find('input').val('');
                    main.change_state({ state: 2 });
                    return false;
                });

                // edit booking summary event
                area.summary_form.on('click', '#gdlr-edit-booking-button', function () {
                    area.room_form.find('.gdlr-reservation-room:first-child input').val('');
                    main.change_state({ state: 2 });
                    return false;
                });

                area.summary_form.on('change', 'input[name="pay_deposit"]', function () {
                    if ($(this).val() == 'true') {
                        area.summary_form.find('.gdlr-price-deposit-inner-wrapper').slideDown();
                        area.summary_form.find('.gdlr-price-summary-grand-total').removeClass('gdlr-active');
                        area.summary_form.find('input[name="pay_deposit"][value="true"]').closest('span').addClass('gdlr-active');
                        area.summary_form.find('input[name="pay_deposit"][value="false"]').closest('span').removeClass('gdlr-active');
                        
                        //gan gia tri
                        area.summary_form.find('.gdlr-price-deposit-inner-wrapper').attr('data-pay', '20');
                        //pay
                        var pay = area.summary_form.find('.gdlr-price-deposit-inner-wrapper').attr('data-pay');
                        $.ajax({
                            type: "POST",
                            url: "/DatPhong/ThanhToan",
                            async: false,
                            cache: false,
                            dataType: "json",
                            data: { data: pay },
                            success: function (data) {
                            }
                        });
                    } else {
                        area.summary_form.find('.gdlr-price-deposit-inner-wrapper').slideUp();
                        area.summary_form.find('.gdlr-price-summary-grand-total').addClass('gdlr-active');
                        area.summary_form.find('input[name="pay_deposit"][value="true"]').closest('span').removeClass('gdlr-active');
                        area.summary_form.find('input[name="pay_deposit"][value="false"]').closest('span').addClass('gdlr-active');
                        area.summary_form.find('.gdlr-price-deposit-inner-wrapper').attr('data-pay', '100');
                        var pay = area.summary_form.find('.gdlr-price-deposit-inner-wrapper').attr('data-pay');
                        $.ajax({
                            type: "POST",
                            url: "/DatPhong/ThanhToan",
                            async: false,
                            cache: false,
                            dataType: "json",
                            data: { data: pay },
                            success: function (data) {
                            }
                        });
                    }
                    return false;
                });

            },

            contact_submit: function () {

                // for submitting service
                area.content_area.on('change', '.gdlr-room-service-checkbox input', function () {
                    if ($(this).is(":checked")) {
                        $(this).parent('label').addClass('gdlr-active').siblings('input').prop('disabled', false);
                    } else {
                        $(this).parent('label').removeClass('gdlr-active').siblings('input').prop('disabled', true);
                    }
                });
                area.content_area.on('click', '.gdlr-room-selection-next', function () {
                    main.change_state({ state: 3, service: $(this).siblings('.gdlr-booking-service-wrapper').children('form') });
                    return false;
                });

                // for submitting contact form
                //area.content_area.on('click', '.gdlr-booking-contact-submit', function () {
                //    if (!$(this).hasClass('gdlr-clicked')) {
                //        $(this).addClass('gdlr-clicked');
                //        area.content_area.find('.gdlr-error-message').slideUp();
                //        main.change_state({ state: 3, contact: $(this).closest('form'), 'contact_type': 'contact' });
                //    }
                //    return false;
                //});

                area.content_area.on('click', '.gdlr-booking-payment-submit', function () {
                    if (!$(this).hasClass('gdlr-clicked')) {
                        $(this).addClass('gdlr-clicked');
                        area.content_area.find('.gdlr-error-message').slideUp();
                        main.change_state({ state: 3, contact: $(this).closest('form'), 'contact_type': 'instant_payment' });
                    }
                    return false;
                });

                // payment method selection
                area.content_area.on('click', '.gdlr-payment-method input[name="payment-method"]', function () {
                    $(this).parent('label').addClass('gdlr-active').siblings().removeClass('gdlr-active');
                });
            },

            change_state: function (options) {
                if (area.resv_bar.find('select[name=gdlr-hotel-branches]').val() == '') {
                    area.resv_bar.find('#please-select-branches').slideDown();
                    return false;
                } else {
                    area.resv_bar.find('#please-select-branches').slideUp();
                }

                area.resv_bar.find('#gdlr-reservation-bar-button').slideUp(200, function () { $(this).remove(); })

                area.content_area.animate({ 'opacity': 0.2 });
                area.content_area.parent().addClass('gdlr-loading');

                var data_submit = {
                    'action': area.resv_bar.attr('data-action'),
                    'data': area.resv_bar.serialize(),
                    'state': options.state
                };
                if (options.room_id) data_submit.room_id = options.room_id;
                if (options.service) {
                    data_submit.service = options.service.serialize();
                    if (!data_submit.service) {
                        data_submit.service = 'service=none';
                    }
                }
                if (options.contact) data_submit.contact = options.contact.serialize();
                if (options.contact_type) data_submit.contact_type = options.contact_type;
                if (options.paged) data_submit.paged = options.paged;

                $.ajax({
                    type: 'POST',
                    url: area.wrapper.attr('data-ajax'),
                    data: data_submit,
                    dataType: 'json',
                    error: function (a, b, c) { console.log(a, b, c); },
                    success: function (data) {
                        //console.log(data.data);

                        if (data.state) {
                            proc_bar.set_state(data.state);

                            if (data.content) {
                                var tmp_height = area.content_area.height();
                                area.content_area.html(data.content);

                                var new_height = area.content_area.height();

                                area.content_area.parent().removeClass('gdlr-loading');
                                area.content_area.height(tmp_height).animate({ 'opacity': 1, 'height': new_height }, function () {
                                    $(this).css('height', 'auto');
                                });
                            }
                            if (data.summary_form) {
                                if (!area.summary_form.hasClass('gdlr-active')) {
                                    area.summary_form.html(data.summary_form).slideDown().addClass('gdlr-active');
                                } else {
                                    var tmp_height = area.summary_form.height();
                                    area.summary_form.html(data.summary_form);

                                    var new_height = area.summary_form.height();
                                    area.summary_form.height(tmp_height).animate({ 'height': new_height }, function () {
                                        $(this).css('height', 'auto');
                                    });

                                    if (data.state == 4) {
                                        $('body').animate({ scrollTop: area.proc_bar.offset().top - (tmp_height - new_height) }, 300);
                                    }
                                }
                            }
                            if (data.service) {
                                area.service_form.html(data.service);
                            }

                            if (data.state == 2) {
                                area.summary_form.slideUp(function () { $(this).removeClass('gdlr-active'); });
                                area.date_form.slideDown();

                                if (data.room_form) {
                                    if (!area.room_form.hasClass('gdlr-active')) {
                                        area.room_form.html(data.room_form).slideDown().addClass('gdlr-active');
                                    } else {
                                        var tmp_height = area.room_form.height();
                                        area.room_form.html(data.room_form);

                                        var new_height = area.room_form.height();
                                        area.room_form.height(tmp_height).animate({ 'height': new_height }, function () {
                                            $(this).css('height', 'auto');
                                        });
                                    }
                                }
                            } else if (data.state == 3) {
                                area.room_form.slideUp(function () { $(this).removeClass('gdlr-active'); });
                                area.date_form.slideUp();

                                // error message on form submit
                                if (data.error_message) {
                                    area.content_area.find('.gdlr-button').removeClass('gdlr-clicked');
                                    area.content_area.find('.gdlr-error-message').html(data.error_message).slideDown();

                                    area.content_area.parent().removeClass('gdlr-loading');
                                    area.content_area.animate({ 'opacity': 1 });
                                }

                                // for payment option
                                if (data.payment && data.payment == 'paypal') {
                                    var form_submit = area.content_area.find('form.gdlr-booking-contact-form');
                                    form_submit.attr('method', 'post');
                                    form_submit.attr('action', data.payment_url);
                                    form_submit.append(data.addition_part);
                                    form_submit.submit();

                                }
                            }
                        } // data.state
                    }
                });
            }
        };

        main.init();

        return this;
    }

    $(document).ready(function () {

        // init the booking page
        $('#gdlr-single-booking-content').gdlr_hotel_booking();

        // init single room page
        $('body.single #gdlr-reservation-bar, #gdlr-hotel-availability').gdlr_single_booking();

        // room category hover
        $('.gdlr-room-category-item').on('mouseover', '.gdlr-room-category-thumbnail', function () {
            $(this).children('img').transition({ scale: 1.1, duration: 200, queue: false });
            $(this).children('.gdlr-room-category-thumbnail-overlay').animate({ opacity: 0.6 }, { duration: 150, queue: false });
            $(this).children('.gdlr-room-category-thumbnail-overlay-icon').animate({ opacity: 1 }, { duration: 150, queue: false });
        });
        $('.gdlr-room-category-item').on('mouseout', '.gdlr-room-category-thumbnail', function () {
            $(this).children('img').transition({ scale: 1, duration: 200, queue: false });
            $(this).children('.gdlr-room-category-thumbnail-overlay').animate({ opacity: 0 }, { duration: 150, queue: false });
            $(this).children('.gdlr-room-category-thumbnail-overlay-icon').animate({ opacity: 0 }, { duration: 150, queue: false });
        });
    });

})(jQuery);