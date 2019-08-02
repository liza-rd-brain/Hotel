import "./select-date.scss";
import "jquery-datetimepicker/build/jquery.datetimepicker.min.css";
import "jquery-datetimepicker/build/jquery.datetimepicker.full.min.js";
import Arrow from "../arrow/arrow.pug";
/* const pug = require("pug"); */

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
  range: 'period'
});

// jQuery("#date_timepicker_end").datetimepicker();
// jQuery.datetimepicker.setLocale("ru");
// jQuery("#date_timepicker_end").datetimepicker({
//   timepicker: false,
//   format: "d.m.Y",
//   dayOfWeekStart: 1,
//   todayButton: false,
//   scrollMonth: false,
//   closeOnWithoutClick: false,
//   closeOnDateSelect: 0
// });
// $(".xdsoft_datetimepicker").addClass("my_datetimepicker");
// $(".xdsoft_label").addClass("my_datetimepicker");

//всем элементам календаря дала доп класс .my_datetimepicker для быстрой стилизации
$('[class^="xdsoft"]').addClass("my_datetimepicker");


// $("#input").datetimepicker();
// $("button.somebutton").on("click", function() {
//   $("#input").datetimepicker("show");
// });

//убрали кнопку сегодня
$(".xdsoft_today_button").remove();

//убрали часть календаря с выбором времени
$(".xdsoft_timepicker").remove();

//убрали выбор месяца и года
$(".xdsoft_scroller_box").remove();

$(".xdsoft_datetimepicker .xdsoft_next").addClass("arrow");
$(".xdsoft_datetimepicker .xdsoft_prev").addClass("arrow");

// $("#date_timepicker_end").remove
//при клике по инпуту появляется тот жк самы календарь
$("#date_timepicker_end").on("click", function() {
  $("#date_timepicker_start").datetimepicker("show");
});
// попытка вставить вместо картинки svg
// $(".xdsoft_next").append(
//   '<svg class="arrow-icon arrow-icon_colored" width="26" height="26" fill: url(#paint0_linear)/>'
// );

// input id="date_timepicker_end" у него удалить дочерний календарь и передать вместо него от start