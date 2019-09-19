import "../checkbox/checkbox";
import "./dropdown-list.scss";

$(document)
  .find(".some-select")
  .on("click", function(e) {
    console.log("click");
    $(".some-options").toggleClass("some-options_open");
  });
