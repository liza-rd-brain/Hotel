import "./booking.scss";
// import "../select-items/select-items";
import "../button/button";
import "../calendar/calendar";
import "../room-title/room-title";

$().ready(() => {
  let numbers = $(".calculation__price");
  for (let i = 0; i < numbers.length; i++) {
    let testNumber = numbers[i].innerText
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
      .replace(/\d$/g, match => match + "\u20bd");
    $(".calculation__price ")[i].innerText = testNumber;
  }

  let textNumbers = $(".calculation__desc");
  for (let i = 0; i < textNumbers.length; i++) {
    let testNumber = textNumbers[i].innerText
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
      .replace(/\d{3,}/g, match => match + "\u20bd");
    $(".calculation__desc")[i].innerText = testNumber;
  }


});
