import "item-quantity-dropdown/lib/item-quantity-dropdown.min.js";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min.css";
import "./select-items.scss";
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

// максимум - 10 гостей
const GUEST = {
  maxItems: 10,
  /*  minItems: 1, */
  selectionText: "гость",
  textPlural: "гостя",
  controls: {
    position: "right",
    displayCls: "iqdropdown-content",
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
  selectionText: "item",
  textPlural: "items",
  controls: {
    position: "right",
    displayCls: 0,
    controlsCls: "iqdropdown-item-controls",
    counterCls: "counter"
  },
  items: {},
  onChange: (id, count, totalItems) => {},
  beforeDecrement: () => true,
  beforeIncrement: () => true
};

let defaultText = "0 items";
let guestText = "Сколько гостей";
let amenitiesText = "Удобства номера";

let createDropdown = () => {
  $("#guest").iqDropdown(GUEST);
  $("#guest p.iqdropdown__text").text(guestText);
  checkText();
  checkButtons();
  showButtonClear();
   $('[class^="iqdropdown"]').addClass("my_iqdropdown");
 /*  $(".my_iqdropdown")
    .find($(".counter"))
    .addClass("my_iqdropdown"); */
  
 /*  $("#guest")
    .find('[class^="iqdropdown"]')
    .addClass("guest_iqdropdown"); */
  $(".guest_iqdropdown")
    .find($(".counter"))
    .addClass("guest_iqdropdown");

  $("#amenities").iqDropdown(AMENTIES);
  $("#guest p.iqdropdown__text").text(amenitiesText);
  /*  checkText();
  checkButtons();
  showButtonClear(); */
  /*  $('[class^="iqdropdown"]').addClass("my_iqdropdown");
  $(".my_iqdropdown")
    .find($(".counter"))
    .addClass("my_iqdropdown"); */
$('[class^="iqdropdown"]').addClass("amenities_iqdropdown");
  $(".amenities_iqdropdown")
    .find($(".counter"))
    .addClass("amenities_iqdropdown");
};

/* let createDropdown = () => {
  $("#amenities").iqDropdown();
  $("p.iqdropdown__text").text(amenitiesText);
  checkText();
  checkButtons();
   showButtonClear();
  $('[class^="iqdropdown"]').addClass("my_iqdropdown");
  $(".my_iqdropdown")
    .find($(".counter"))
    .addClass("my_iqdropdown");
}; */

$().ready(() => {
  createDropdown();
});

let checkText = () => {
  let btnInc = $("#guest").find(".button-increment");
  let btnDec = $("#guest").find(".button-decrement");
  console.log(btnInc);

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
  //здесь лучше изменить на количество в counter
  if (
    $("#guest")
      .find("p.iqdropdown__text")
      .text() != guestText
  ) {
    /*     console.log(defaultText); */
    /*  console.log(
      $(".iqdropdown")
        .find("p.iqdropdown__text")
        .text()
    ); */
    $(".button_clear").addClass("button_show");
  } else {
    $(".button_clear").removeClass("button_show");
  }
};

//только для гостей
let changeText = () => {
  //функция будет вызываться при нажатии на кнопки плюс или минус
  //проверяем первый символ, если он больше 4 - меняем "гостя" на "гостей" и обратно

  let $text = $("#guest")
    .find("p.iqdropdown__text")
    .text();
  if ($text.slice(0, 2) > 4) {
    $("#guest")
      .find("p.iqdropdown__text")
      .text(`${$text.slice(0, 2)} гостей`);
  }
};

//похоже тоже нужно будет прописать для каждого отдельного класса
let checkButtons = () => {
  for (let i = 0; i < 4; i++) {
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
};

//работающий функционал кнопки очистить!!!!
$(".button_clear").on("click", () => {
  for (let i = 0; i < 2; i++) {
    $("#guest")
      .find(".iqdropdown-item-controls")
      .addClass("my_iqdropdown")
      .remove();
    createDropdown();

    $("#guest")
      .find(".iqdropdown-item-controls .my_iqdropdown .iqdropdown-content")
      .remove();
  }
});
