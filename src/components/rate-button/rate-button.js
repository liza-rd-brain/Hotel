import "jquery-bar-rating/dist/jquery.barrating.min.js";
import "./rate-button.scss";

$(function() {
  $(".rate-select").barrating({
    theme: "fontawesome-stars"
  });

  let selects = $(".rate-select");
  for (let i = 0; i < selects.length; i++) {
    let elemID = selects[i].getAttribute("id");
    let elemRate = selects[i].getAttribute("data-rate");
    $(`#${elemID}`).barrating("set", elemRate);
  }
});
