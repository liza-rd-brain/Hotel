import "./like-button.scss";
/* 
$(".like-button").on("click", console.log("клик")); */
/* let button = $(".like-button"); */
let counterEl = $(".like-button__amount");
/* let counterText = $(counterEl).html(); */

var buttons = document.querySelectorAll(".like-button");

for (let i = 0; i < buttons.length; i++) {
  $(buttons[i]).on("click", function() {
    $(buttons[i])
      .find(counterEl)
      .toggleClass("amount-inc");
    changeAmount(i);
  });
}

const changeAmount = i => {
  let counterAmount = $(buttons[i]).find(counterEl);
  let counterText = counterAmount.html();
  console.log(counterAmount);
  if (counterAmount.hasClass("amount-inc")) {
    counterText++;
    counterAmount.html(counterText);
  } else {
    counterText--;
    counterAmount.html(counterText);
  }
};
 