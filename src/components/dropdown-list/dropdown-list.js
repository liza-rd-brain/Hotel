import "../checkbox/checkbox";
import "./dropdown-list.scss";


$().ready(() => {
  let dropdownList = document.querySelectorAll(".dropdown-list");

  for (let i = 0; i < dropdownList.length; i++) {
    $(dropdownList[i])
      .find(".dropdown-list__select")
      .on("click", function(e) {
        $(dropdownList[i])
          .find(".dropdown-list__options")
          .toggleClass("dropdown-list__options_open");
        $(dropdownList[i])
          .find(".dropdown-list__select")
          .toggleClass("dropdown-list__select_open");
      });
  }
});



