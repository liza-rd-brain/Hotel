import "./select-date.scss";
import "jquery-datetimepicker/build/jquery.datetimepicker.min.css";
import "jquery-datetimepicker/build/jquery.datetimepicker.full.min.js";

jQuery("#datetimepicker").datetimepicker();
jQuery.datetimepicker.setLocale('ru');
jQuery("#datetimepicker").datetimepicker({
  yearpicker: false,
  timepicker: false,
  format: "d.m.Y",
  scrollMonth:false
});
