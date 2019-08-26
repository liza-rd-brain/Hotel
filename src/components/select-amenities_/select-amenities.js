import "item-quantity-dropdown/lib/item-quantity-dropdown.min.js";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min.css";
import "./select-amenities.scss";
// import "../select-menu/select-menu";
// import easydropdown from 'easydropdown';

// $(".select-item__wrap").click(function(event) {
//   var select = $(event.target).children(".select-item__select");
//   select.toggleClass("select-item__select_open");
//   /*  $(event.target).toggleClass("select-item__wrap_open"); */
//   /* $(event.target).children(".select-item__options").addClass("select-item__options_visible"); */

//   var options = $(event.target).children(".select-item__options");
//   options.toggleClass("select-item__options_visible");
// });

// $(".select-item__wrap").on("click", function() {
//   alert($(this).attr("class"));
// });
// console.log("test");
// console.log($);

// easydropdown.all()
// const edd = easydropdown('#my-select');

//максимум - 10 гостей

const GUEST = {
  maxItems: 10,
  minItems: 1,
  selectionText: "гость",
  textPlural: "гостя",
  controls: {
    position: "right",
    displayCls: 0,
    controlsCls: "iqdropdown-item-controls",
    counterCls: "counter"
  },
  items: {
    /* test:"test" */
  },
  onChange: (id, count, totalItems) => {},
  beforeDecrement: () => true,
  beforeIncrement: () => true
};

const AMENTIES = {
  maxItems: 10,
  minItems: 1,
  selectionText: "гость",
  textPlural: "гостя",
  controls: {
    position: "right",
    displayCls: 0,
    controlsCls: "iqdropdown-item-controls",
    counterCls: "counter"
  },
  items: {
  },
  onChange: (id, count, totalItems) => {},
  beforeDecrement: () => true,
  beforeIncrement: () => true
};

let createDropdown = () => {
  $(".iqdropdown").iqDropdown(GUEST);
  $("p.iqdropdown__text").text("Сколько гостей");
  checkText();
  checkButtons();
  showButtonClear();

  $('[class^="iqdropdown"]').addClass("my_iqdropdown");
  $(".my_iqdropdown")
    .find($(".counter"))
    .addClass("my_iqdropdown");
};

$().ready(() => {
  createDropdown();

  /*  debugger; */
});

let checkText = () => {
  //можно ли вынести как константы?!
  let btnInc = $(document).find(".button-increment");
  let btnDec = $(document).find(".button-decrement");

  btnInc.on("click", function() {
    changeText();
    checkButtons();
    showButtonClear();
  });

  btnDec.on("click", function() {
    changeText();
    checkButtons();
  });
};

let showButtonClear = () => {
  if (
    $(document)
      .find("p.iqdropdown__text")
      .text() != "Сколько гостей"
  ) {
    $(".button_clear").addClass("button_show");
  } else {
    $(".button_clear").removeClass("button_show");
  }
};
/* let changeText = () => {
  //функция будет вызываться при нажатии на кнопки плюс или минус
  //проверяем первый символ, если он больше 4 - меняем "гостя" на "гостей" и обратно

  let $text = $(document)
    .find("p.iqdropdown__text")
    .text();
  if ($text.slice(0, 2) > 4) {
    $(document)
      .find("p.iqdropdown__text")
      .text(`${$text.slice(0, 2)} гостей`);
  }
}; */

/* let checkButtons = () => {
  for (let i = 1; i < 4; i++) {
    let counter = $(`div[data-id='item${i}']  .counter`).text();
    $(`div[data-id='item${i}'] .button-increment`).addClass("btn_visible");

    if (counter > 0 && counter < 9) {
      $(`div[data-id='item${i}']  .button-decrement`).addClass("btn_visible");
    } else if (counter > 9) {
      $(`div[data-id='item${i}']  .button-increment`).removeClass(
        "btn_visible"
      );
    } else if (counter < 1) {
      $(`div[data-id='item${i}']  .button-decrement`).removeClass(
        "btn_visible"
      );
    }
  }
}; */

/* //работающий функционал кнопки очистить!!!!
$(".button_clear").on("click", () => {
  for (let i = 0; i < 2; i++) {
    $(".iqdropdown")
      .find(".iqdropdown-item-controls")
      .addClass("my_iqdropdown")
      .remove();
    createDropdown();

    $(".iqdropdown")
      .find(".iqdropdown-item-controls .my_iqdropdown .iqdropdown-content")
      .remove();
  }
}); */
