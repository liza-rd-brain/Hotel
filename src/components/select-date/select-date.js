import "./select-date.scss";
import "jquery-datetimepicker/build/jquery.datetimepicker.min.css";
import "jquery-datetimepicker/build/jquery.datetimepicker.full.min.js";
import Arrow from "../arrow/arrow.pug";

jQuery("#date_timepicker_start").datetimepicker();
jQuery.datetimepicker.setLocale("ru");
jQuery("#date_timepicker_start").datetimepicker({
  timepicker: false,
  format: "d.m.Y",
  dayOfWeekStart: 2,
  todayButton: false,
  scrollMonth: false,
  closeOnWithoutClick: false,
  closeOnDateSelect: 0,
  range: "period"
});

const controlButtons = $(".buttons-wrap");
const wrap = jQuery("<div/>", {
  class: "all-wrap"
}).appendTo(".date-wrap");
$(".xdsoft_datetimepicker .xdsoft_next").addClass("arrow");
$(".xdsoft_datetimepicker .xdsoft_prev").addClass("arrow");

$("#date_timepicker_start").addClass("date-input");
$("#date_timepicker_end").addClass("date-input");

const calendarClass =
  ".xdsoft_datetimepicker.xdsoft_noselect.xdsoft_.my_datetimepicker";

const createCalendar = $().ready(() => {
  deleteUnnecessary();
  createCalendarWrap();
  bindButtonsWithCalendar();
  bindEndPickerWithCalendar();
});

const deleteUnnecessary = () => {
  //убрали кнопку сегодня
  $(".xdsoft_today_button").remove();
  //убрали часть календаря с выбором времени
  $(".xdsoft_timepicker").remove();
  //убрали выбор месяца и года
  $(".xdsoft_scroller_box").remove();
};

const createCalendarWrap = () => {
  debugger;
  //делаем оболочку для календаря, чтобы зафигачить кнопки
  $('[class^="xdsoft"]').addClass("my_datetimepicker");

  $(calendarClass).appendTo(wrap);

  $(wrap).append(controlButtons);
};

const bindEndPickerWithCalendar = () => {
  // $("#date_timepicker_end").remove
  //при клике по инпуту появляется тот же самый календарь
  debugger;
  $("#date_timepicker_end").on("click", function(e) {
    $("#date_timepicker_start").datetimepicker("show");
    //остается фокус на втором элементе
    $("#date_timepicker_end")
      .focus()
      .on("focusout", function(e) {
        console.log("focusout");
        $(calendarClass).css("display", "none");
      });
  });
};
/* $("#date_timepicker_end").on("focusout", function(e) {
   console.log("focusout");

 }); */

const bindButtonsWithCalendar = () => {
  $(calendarClass).on("change", function(e) {
    console.log("change");
  });


  
  //есть фокус=видно кнопку
  //     $("#date_timepicker_start").on("focus", function(e) {
  //       showButton();
  //   });
  //   $("#date_timepicker_end").on("focus", function(e) {
  //     showButton();
  //  });
  /*  $("#date_timepicker_start").on("focusout", function(e) {
    controlButtons.toggleClass("buttons-wrap_open");
  });

  

  $("#date_timepicker_end").on("focusout", function(e) {
     console.log("end_onfocus");
    controlButtons.toggleClass("buttons-wrap_open");
  }); */
  //когда дисплей блок у каледаря, тогда и видно кнопку
};

/* const showButton = () => {
  console.log("block");
  if ($(calendarClass).css("display") == "block") {
    
  }
}; */
