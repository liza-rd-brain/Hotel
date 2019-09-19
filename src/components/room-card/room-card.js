import Glide from "@glidejs/glide/dist/glide.min.js";
import "../rate-button/rate-button";
import "./room-card.scss";

var glide = new Glide(".glide", {
  type: "slider",
  startAt: 0,
  perView: 1,
  animationDuration: 700,
  rewind: false
});

glide.mount();

let numbers = $(".desc-section__price_number");
for (let i = 0; i < numbers.length; i++) {
  let testNumber =
    numbers[i].innerText
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + "\u20bd";
  $(".desc-section__price_number")[i].innerText = testNumber;
}
