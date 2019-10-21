import "./room-title.scss";

$().ready(() => {
  let numbers = $(".room-title__price-number ");
  for (let i = 0; i < numbers.length; i++) {
    let testNumber =
      numbers[i].innerText
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + "\u20bd";
    $(".room-title__price-number")[i].innerText = testNumber;
  }
});
