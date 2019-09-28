import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import "flatpickr/dist/flatpickr.min.css";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import "./dateRangePicker.scss";

const config = {
  altInput: true,
  altInputClass: "flatpickr-alt",
  altFormat: "d.m.Y",
  locale: Russian,
  /* position:"below", */
  monthSelectorType: "static",
  /* inline: true, */
  onReady: function(dateObj, dateStr, instance) {
    const $clear = $(
      '<div class="flatpickr-clear"><button class="flatpickr-clear-button">Clear</button></div>'
    )
      .on("click", () => {
        instance.clear();
        instance.close();
      })
      .appendTo($(instance.calendarContainer));

    const $close = $(
      '<div class="flatpickr-close"><button class="flatpickr-close-button">Close</button></div>'
    )
      .on("click", () => {
        instance.close();
      })
      .appendTo($(instance.calendarContainer));
  },
  plugins: [new rangePlugin({ input: ".example2" })]
};
flatpickr(".example", config);

const newLeftArrow = $(".arrow__left").find("svg");
const newRightArrow = $(".arrow__right").find("svg");
const leftArrowWrap = $(".flatpickr-prev-month");
const rightArrowWrap = $(".flatpickr-next-month");
leftArrowWrap.find("svg").remove();
newLeftArrow.appendTo(leftArrowWrap);
rightArrowWrap.find("svg").remove();
newRightArrow.appendTo(rightArrowWrap);


/* лучше стилизовать текущие кнопки или проборсить кастомные?! */
// const newButtonClear = $(".button_clear");
// const newButtonAccept = $(".button_accept");
// const buttonClearWrap = $(".flatpickr-clear");

// buttonClearWrap.find("button").remove();
// newButtonClear.appendTo(buttonClearWrap);
