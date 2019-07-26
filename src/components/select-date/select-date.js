import "./select-date.scss";
import "jquery-datetimepicker/build/jquery.datetimepicker.min.css";
import "jquery-datetimepicker/build/jquery.datetimepicker.full.min.js";
import "../arrow/arrow";

jQuery("#datetimepicker").datetimepicker();
jQuery.datetimepicker.setLocale("ru");
jQuery("#datetimepicker").datetimepicker({
  timepicker: false,
  format: "d.m.Y",
  dayOfWeekStart: 1,
  todayButton: false,
  scrollMonth: false,
  closeOnWithoutClick: false,
  closeOnDateSelect: 0
});
// $(".xdsoft_datetimepicker").addClass("my_datetimepicker");
// $(".xdsoft_label").addClass("my_datetimepicker");

//всем элементам календаря дала доп класс .my_datetimepicker для быстрой стилизации
$('[class^="xdsoft"]').addClass("my_datetimepicker");
/* $('.xdsoft_date').addClass("my_datetimepicker"); */
/* $('[class^="xdsoft_datetimepicker"]').addClass("my_datetimepicker"); */

$("#input").datetimepicker();
$("button.somebutton").on("click", function() {
  $("#input").datetimepicker("show");
});
$(".xdsoft_next").append(
  '<svg class="arrow-icon arrow-icon_colored" width="26" height="26" fill: url(#paint0_linear)/>'
);



$.get('arrow.pug').then(function(doc) {
  var test_html = pug.compile(doc)();
  $($(".test_2")).append(test_html);
});


/* let testElem = myElem;
$(".test_2").append(test_elem); */