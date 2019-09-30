import "../checkbox/checkbox";
import "./dropdown-list.scss";

$(document)
  .find(".dropdown-list__select")
  .on("click", function(e) {
    console.log("click");
    $(".dropdown-list__options").toggleClass("dropdown-list__options_open");
    $(".dropdown-list__select").toggleClass("dropdown-list__select_open");
  });
