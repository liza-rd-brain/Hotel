import "./acces.scss";
import "../textField/textField";
import "../radio-button/radio-button";
import "../calendar/calendar";
import "../toggle/toggle";

let signInList = document.querySelectorAll(".acces");

for (let i = 0; i < signInList.length; i++) {
  $(signInList[i])
    .find(".signIn__button")
    .on("click", function(e) {
      toggleHidden(i);
    });
  $(signInList[i])
    .find(".signUp__button")
    .on("click", function(e) {
      toggleHidden(i);
    });
}

function toggleHidden(i) {
  console.log(signInList[i]);
  debugger;
  $(signInList[i])
    .find(".acces__signIn")
    .toggleClass("hidden");
  $(signInList[i])
    .find(".acces__signUp")
    .toggleClass("hidden");

  if ($(signInList[i]).hasClass("acces_type_signUp")) {
    debugger;
    $(signInList[i])
      .removeClass("acces_type_signUp")
      .addClass("acces_type_signIn");
  } else {
    $(signInList[i])
      .removeClass("acces_type_signIn")
      .addClass("acces_type_signUp");
  }
}
