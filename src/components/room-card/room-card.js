import Glide from "@glidejs/glide/dist/glide.min.js";
import "../rate-button/rate-button";
import "../room-title/room-title"
import "./room-card.scss";

$().ready(() => {
  var sliders = document.querySelectorAll(".glide");
  for (var i = 0; i < sliders.length; i++) {
    var glide = new Glide(sliders[i], {
      type: "slider",
      startAt: 0,
      perView: 1,
      animationDuration: 700,
      rewind: false
    });

    glide.mount();
  }

  let numbers = $(".desc-section__price_number");
  for (let i = 0; i < numbers.length; i++) {
    let testNumber =
      numbers[i].innerText
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + "\u20bd";
    $(".desc-section__price_number")[i].innerText = testNumber;
  }
});

/* $().ready(() => {
  var glide = new Glide("[id^='glide-']", {
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
}); */
