import "../jquery-ui/jquery-ui";
import "../jquery-ui/jquery-ui.css";
import "../jquery-ui/jquery-ui.theme.min.css";
import "./radio-button.scss";

$(function() {
  $(".radio").checkboxradio({});
});

$().ready(() => {
  $(".radio-label").addClass("my_radio")
    .find('[class|="ui-checkboxradio"]')
    .addClass("my_radio");

});
