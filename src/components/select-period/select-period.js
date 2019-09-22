import "./select-period.scss";
import "air-datepicker/dist/css/datepicker.min.css";
import "air-datepicker/dist/js/datepicker.min.js";

let params = {
  /*  inline: true, */
  clearButton: true,
  todayButton: new Date()
};
$(".datepicker-here").datepicker(params);
/* 

$('[class^="datepicker"]').addClass("my_datepicker");
$(".datepicker").addClass("my_datepicker");

$(".dropdown-wrap").datepicker(params);

// ___________попытка на JS____________________________
// 1. Календарь должен открываться  по клику стартовой или финишной даты
//2. В зависимости от того, какое поле в фокусе - выбираем начальную или конечную дату
// 3.Промежуточная подсветка только в одну сторону и только если стоим на другой ячейке

//дописать  функционал - посмотреть  в фокусе start или end dropdown

let startDate = document.querySelector(".date-dropdown_start");
let endDate = document.querySelector(".date-dropdown_end");

// startDate.on("click", function(e) {
//   showCalendar;
// });

startDate.addEventListener("click", showCalendar);
endDate.addEventListener("click", showCalendar);
let currentData;

let table = document.querySelector(".datepicker-inline");

function showCalendar(event) {
  //текущий элемент - поле выбора даты
  currentData = event.target;
  console.log(currentData);
  table.classList.add("datepicker-inline_active");
  console.log("click")
}

table.addEventListener("click", getTargetDay);

function getTargetDay() {
  //смоттрим, currentData страровая или финишная дата

  let currentDay =
    currentData === startDate
      ? document.querySelector(".-range-from-")
      : document.querySelector(".-range-to-");
  console.log(currentDay);

  let dateStr =
    `${getData(currentDay, "data-date")}.` +
    `${getData(currentDay, "data-month")}.` +
    `${getData(currentDay, "data-year")}`;

  function getData(day, data) {
    if (day && data) {
      let dataInn = day.getAttribute(data);

      if (data === "data-month") {
        dataInn = (+dataInn + 1).toString();
      }
      if (dataInn.length < 2) {
        dataInn = "0" + dataInn;
      }
      return dataInn;
    }
  }

  currentData.value = dateStr;
  // console.log(fisrtStrAtr);
} */
