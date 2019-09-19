import "jquery-bar-rating/dist/jquery.barrating.min.js";
import "./rate-button.scss";

$(function() {
  $(".example").barrating({
    theme: "fontawesome-stars"
  });
});
