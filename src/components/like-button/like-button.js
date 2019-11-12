import "./like-button.scss";
/* 
$(".like-button").on("click", console.log("клик")); */
/* let button = $(".like-button"); */
let counterEl = $(".like-button__amount");
let counterText = $(counterEl).html();

var buttons = document.querySelectorAll(".like-button");

for (let i = 0; i < buttons.length; i++) {
  debugger;
  $(buttons[i]).on("click", function(e) {
    $(buttons[i])
      .find(counterEl)
      .toggleClass("amount-inc");
    changeAmount(i);
  });
}

const changeAmount = i => {
  if (
    $(buttons[i])
      .find(counterEl)
      .hasClass("amount-inc")
  ) {
    counterText++;

    $(buttons[i])
      .find(counterEl)
      .html(counterText);
  } else {
    counterText--;
    $(buttons[i])
      .find(counterEl)
      .html(counterText);
  }
};
