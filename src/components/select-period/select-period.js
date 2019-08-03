import "./select-period.scss";
import "air-datepicker/dist/css/datepicker.min.css";
import "air-datepicker/dist/js/datepicker.min.js";

let params = {
  /*  inline: true, */
  clearButton: true,
  todayButton: new Date()
};

$(".datepicker-here").datepicker(params);
$('[class^="datepicker"]').addClass("my_datepicker");
$(".datepicker").addClass("my_datepicker");

$(".dropdown-wrap").datepicker(params);

// $(".datepicker--cell").on("click", function() {
//   //   let dataFrom = $(".-range-from-").attr("data-date");
//   //   console.log(dataFrom);

//   $(".datepicker--cell .datepicker--cell-day .-range-from- .-selected-").css(
//     "background",
//     "red"
//   );
// });
// при выборе даты в любом случае идт клик по любой ячейке!!!

// $(".datepicker--cell").on("click", function() {
//   //теперь должны вытащить данные для вставки в ячейку!!

//   //   let data = $(this).attr("data-date");
//   //   let month = $(this).attr("data-month");
//   //   let dataFrom = $(".-range-from-").attr("data-date");
//   //   console.log(dataFrom);
//   console.log($(this).attr("data-date"));
//   //   console.log(month);
// });
//__________________попытка на JS____________________________

function getTargetDay() {
  //   let targetDay = document.querySelector(".-range-from-");
  let firstDay = document.querySelector(".-range-from-");
  let fisrtStrAtr =
    `${getData(firstDay, "data-date")}.` +
    `${getData(firstDay, "data-month")}.` +
    `${getData(firstDay, "data-year")}`;

  let lastDay = document.querySelector(".-range-to-")
    ? document.querySelector(".-range-to-")
    : false;

  let lastStrAtr =
    lastDay &&
    `${getData(lastDay, "data-date")}.` +
      `${getData(lastDay, "data-month")}.` +
      `${getData(lastDay, "data-year")}`;

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

  let startDate = document.querySelector(".date-dropdown_start");
  startDate.value = fisrtStrAtr;
  console.log(fisrtStrAtr);

  if (lastStrAtr) {
    let endDate = document.querySelector(".date-dropdown_end");
    endDate.value = lastStrAtr;
    console.log(lastStrAtr);
  }
}

let table = document.querySelector(".datepicker-inline");
table.addEventListener("click", getTargetDay);
