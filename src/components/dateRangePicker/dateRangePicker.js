//1) будем в паг спрашивать тип календаряЖ статический/динамический на одну дату
//динамический на 2 даты

import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import "flatpickr/dist/flatpickr.min.css";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import "./dateRangePicker.scss";

const config = {
  altInput: true,
  altInputClass: "flatpickr-alt",
  altFormat: "d.m.Y",
  /* inline: true, */
  locale: Russian,
  position: "below",
  monthSelectorType: "static",
  static: true,
  onReady: function(dateObj, dateStr, instance) {
    const buttonWrap = $('<div class="flatpickr-wrap"></div>').appendTo(
      $(instance.calendarContainer)
    );
    const $clear = $(
      '<button class="flatpickr-clear-button flatpickr-button">Очистить</button>'
    )
      .on("click", () => {
        instance.clear();
        instance.close();
      })
      .appendTo($(".flatpickr-wrap"));

    const $close = $(
      '<button class="flatpickr-close-button flatpickr-button">Применить</button>'
    )
      .on("click", () => {
        instance.close();
      })
      .appendTo($(".flatpickr-wrap"));
  },
  plugins: [new rangePlugin({ input: ".departure-range" })]
};
flatpickr(".entry-range", config);

const newLeftArrow = $(".arrow__left").find("svg");
const newRightArrow = $(".arrow__right").find("svg");
const leftArrowWrap = $(".flatpickr-prev-month");
const rightArrowWrap = $(".flatpickr-next-month");
leftArrowWrap.find("svg").remove();
newLeftArrow.appendTo(leftArrowWrap);
rightArrowWrap.find("svg").remove();
newRightArrow.appendTo(rightArrowWrap);

$(".numInputWrapper")
  .find(".cur-year")
  .attr("readonly", "readonly");

/* лучше стилизовать текущие кнопки или проборсить кастомные?! */
// const newButtonClear = $(".button_clear");
// const newButtonAccept = $(".button_accept");
// const buttonClearWrap = $(".flatpickr-clear");

// buttonClearWrap.find("button").remove();
// newButtonClear.appendTo(buttonClearWrap);

/* $(`<h3 class="entry-caption">Прибытие</h3>`).insertBefore($(".entry-range"));

$(`<h3 class="departure-caption" ">Выезд</h3>`).insertBefore(
  $(".departure-range")
);
 */
