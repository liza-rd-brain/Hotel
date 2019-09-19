import "jquery-bar-rating/dist/jquery.barrating.min.js";
import "./rate-button.scss";

$(function() {
  $(".example").barrating({
    theme: "fontawesome-stars"
  });

  let selects = $(".example");
  for (let i = 0; i < selects.length; i++) {
    let elemID = selects[i].getAttribute("id");
    let elemRate = selects[i].getAttribute("data-rate");
    $(`#${elemID}`).barrating("set", elemRate);
  }
});
