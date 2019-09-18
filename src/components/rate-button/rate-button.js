/* import "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"; */
import "jquery-bar-rating/dist/jquery.barrating.min.js";

/* import "http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"; */
/* import "jquery-bar-rating/dist/themes/fontawesome-stars.css"; */
import "./rate-button.scss";

$(function() {
  $("#example").barrating({
    theme: "fontawesome-stars"
  });
});
