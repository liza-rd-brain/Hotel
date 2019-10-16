//1) будем в паг спрашивать тип календаряЖ статический/динамический на одну дату
//динамический на 2 даты

import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import "flatpickr/dist/flatpickr.min.css";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import "./calendar.scss";

Russian.rangeSeparator = " - ";

const configRange = {
  altInput: true,
  altInputClass: "flatpickr-alt",
  altFormat: "d.m.Y",
  /* inline: true, */
  locale: Russian,
  position: "below",
  monthSelectorType: "static",
  static: true,
  onReady: function(dateObj, dateStr, instance) {
    const buttonWrap = $('<div class="flatpickr-wrap__range"></div>').appendTo(
      $(instance.calendarContainer)
    );
    const $clear = $(
      '<button class="flatpickr-clear-button flatpickr-button">Очистить</button>'
    )
      .on("click", () => {
        instance.clear();
        instance.close();
      })
      .appendTo($(".flatpickr-wrap__range"));

    const $close = $(
      '<button class="flatpickr-close-button flatpickr-button">Применить</button>'
    )
      .on("click", () => {
        instance.close();
      })
      .appendTo($(".flatpickr-wrap__range"));
  },
  plugins: [new rangePlugin({ input: ".departure-range" })]
};
flatpickr(".entry-range", configRange);

const configStatic = {
  altInput: true,
  altInputClass: "flatpickr-alt",
  altFormat: "d.m.Y",
  inline: true,
  locale: Russian,
  mode: "range",
  monthSelectorType: "static",

  onReady: function(dateObj, dateStr, instance) {
    const buttonWrap = $('<div class="flatpickr-wrap__static"></div>').appendTo(
      $(instance.calendarContainer)
    );
    const $clear = $(
      '<button class="flatpickr-clear-button flatpickr-button">Очистить</button>'
    )
      .on("click", () => {
        instance.clear();
        instance.close();
      })
      .appendTo($(".flatpickr-wrap__static"));

    const $close = $(
      '<button class="flatpickr-close-button flatpickr-button">Применить</button>'
    )
      .on("click", () => {
        instance.close();
      })
      .appendTo($(".flatpickr-wrap__static"));
  }
};
flatpickr(".calendar_type_static", configStatic);

const today = new Date();
const defaultFiterDateStart = `${today.getFullYear()}-${today.getMonth() +
  1}-${today.getDate()}`;
const defaultFiterDateEnd = `${today.getFullYear()}-${today.getMonth() +
  1}-${today.getDate() + 5}`;

const configFilter = {
  altInput: true,
  altInputClass: "flatpickr-alt",
  altFormat: "j M",
  defaultDate: [
    defaultFiterDateStart.toLowerCase(),
    defaultFiterDateEnd.toLowerCase()
  ],
  locale: Russian,
  mode: "range",
  rangeSeparator: ":",
  monthSelectorType: "static",
  static: true,

  onReady: function(dateObj, dateStr, instance) {
    const buttonWrap = $('<div class="flatpickr-wrap__filter"></div>').appendTo(
      $(instance.calendarContainer)
    );
    const $clear = $(
      '<button class="flatpickr-clear-button flatpickr-button">Очистить</button>'
    )
      .on("click", () => {
        instance.clear();
        instance.close();
      })
      .appendTo($(".flatpickr-wrap__filter"));

    const $close = $(
      '<button class="flatpickr-close-button flatpickr-button">Применить</button>'
    )
      .on("click", () => {
        instance.close();
      })
      .appendTo($(".flatpickr-wrap__filter"));
  }
};
flatpickr(".filter-range", configFilter);

const configMasked = {
  altInput: true,
  altInputClass: "flatpickr-alt",
  altFormat: "d.m.Y",
  monthSelectorType: "static",
  static: true,
  locale: Russian,

  onReady: function(dateObj, dateStr, instance) {
    const buttonWrap = $('<div class="flatpickr-wrap__masked"></div>').appendTo(
      $(instance.calendarContainer)
    );
    const $clear = $(
      '<button class="flatpickr-clear-button flatpickr-button">Очистить</button>'
    )
      .on("click", () => {
        instance.clear();
        instance.close();
      })
      .appendTo($(".flatpickr-wrap__masked"));

    const $close = $(
      '<button class="flatpickr-close-button flatpickr-button">Применить</button>'
    )
      .on("click", () => {
        instance.close();
      })
      .appendTo($(".flatpickr-wrap__masked"));
  }
};
flatpickr(".calendar__input", configMasked);

$().ready(() => {
  var calendars = document.querySelectorAll(".flatpickr-calendar");
  for (var i = 0; i < calendars.length; i++) {
    const newLeftArrow = $(".arrow-group__wrap")
      .find(".calendar__arrow_left")
      .first();
    const newRightArrow = $(".arrow-group__wrap")
      .find(".calendar__arrow_right")
      .first();
    const leftArrowWrap = $(calendars[i]).find(" .flatpickr-prev-month");
    const rightArrowWrap = $(calendars[i]).find(" .flatpickr-next-month");
    leftArrowWrap.find("svg").remove();
    newLeftArrow.appendTo(leftArrowWrap);
    rightArrowWrap.find("svg").remove();
    newRightArrow.appendTo(rightArrowWrap);
  }
  $(".arrow-group__wrap").remove();
});
