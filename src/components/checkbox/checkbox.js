import "../../libraries/jquery-ui/jquery-ui";
import "../../libraries/jquery-ui/jquery-ui.css";
import "../../libraries/jquery-ui/jquery-ui.theme.min.css";
import "./checkbox.scss";

$(document).ready(() => {
  $(".checkbox").checkboxradio({});
  $(".checkbox-label")
    .addClass("my_checkbox")
    .find('[class|="ui-checkboxradio"]')
    .addClass("my_checkbox");
});
