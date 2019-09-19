import "jquery-bar-rating/dist/jquery.barrating.min.js";
import "./rate-button.scss";

// для select c каждым id назначить новый rate

$(function() {
  $(".example").barrating({
    theme: "fontawesome-stars"
  });

  debugger;
  let selects = $(".example");
  console.log(selects);

  for (let i = 0; i < selects.length; i++) {
    let elemID = selects[i].getAttribute("id");
    let elemRate = selects[i].getAttribute("data-rate");
    $(`#${elemID}`).barrating("set", elemRate);
  }
});
