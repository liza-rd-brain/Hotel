import "../jquery-ui/jquery-ui";
import "../jquery-ui/jquery-ui.css";
import "../jquery-ui/jquery-ui.theme.min.css";
import "./checkbox.scss";

$(function() {
  $(".checkbox").checkboxradio({});
});

$().ready(() => {
  $(".checkbox-label")
    .addClass("my_checkbox")
    .find('[class|="ui-checkboxradio"]')
    .addClass("my_checkbox");
});
