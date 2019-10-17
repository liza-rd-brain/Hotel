import "../../libraries/jquery-ui/jquery-ui";
import "../../libraries/jquery-ui/jquery-ui.css";
import "../../libraries/jquery-ui/jquery-ui.theme.min.css";
import "./radio-button.scss";

$(function() {
  $(".radio").checkboxradio({});
});

$().ready(() => {
  let radioGroup = document.querySelectorAll(".radio-label");
 
  for (let i = 0; i < radioGroup.length; i++) {
    $(radioGroup[i])
      .addClass("my_radio")
      .find('[class|="ui-checkboxradio"]')
      .addClass("my_radio");
  }
});
