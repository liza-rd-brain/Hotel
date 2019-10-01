import "../../libraries/jquery-ui/jquery-ui.min.css";
import "../../libraries/jquery-ui/jquery-ui";
import "./range-slider.scss";
$(function() {
  $(".slider-range").slider({
    range: true,
    min: 0,
    max: 15000,
    values: [5000, 10000],
    slide: function(event, ui) {
      $("#amount").val(
        ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") +
          "\u20bd" +
          " - " +
          ui.values[1]
            .toString()
            .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") +
          "\u20bd"
      );
    }
  });
  $("#amount").val(
    $(".slider-range")
      .slider("values", 0)
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") +
      "\u20bd" +
      " - " +
      $(".slider-range")
        .slider("values", 1)
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") +
      "\u20bd"
  );
});
/* 
$(` [class^="slider-range"]`).addClass(`my_slider`); */