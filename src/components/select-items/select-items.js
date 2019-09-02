import "item-quantity-dropdown/lib/item-quantity-dropdown.min.js";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min.css";
import "./select-items.scss";
// import "../select-menu/select-menu";
// import easydropdown from 'easydropdown';

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

let guestID = "guest";
let amenitiesID = "amenities";

let guestText = $("#guest .iqdropdown__text").text();
let amenitiesText = $("#amenities .iqdropdown__text").text();

//отдельные счетчики для гостей и удобств
let guestCounter = [
  { id: "guest0", amount: 0 },
  { id: "guest1", amount: 0 },
  { id: "guest2", amount: 0 }
];

let amenitiesCounter = [
  { id: "amenities0", amount: 0 },
  { id: "amenities1", amount: 0 },
  { id: "amenities2", amount: 0 }
];

$().ready(() => {
  createDropdowns(guestID, GUEST, guestText);
  createDropdowns(amenitiesID, AMENTIES, amenitiesText);
});

let createDropdowns = (id, config, title) => {
  $(`#${id}`).iqDropdown(config);
  $(`#${id} p.iqdropdown__text`).text(title);
  /*  checkText(id, title); */
  checkButtons(id);
  $(`#${id}`).addClass(`my_iqdropdown ${id}_iqdropdown`);
  $(` [class^="iqdropdown"]`).addClass(`my_iqdropdown`);

  //добавляем элементам инкр/декр дата-атрибут
  for (let i = 0; i < 3; i++) {
    let itemCounter = $(`div[data-id='${id + i}']`);
    itemCounter.find(".counter").attr("data-id", `${id + i}`);
    itemCounter.find(".iqdropdown-item").attr("data-id", `${id + i}`);
    itemCounter.find("button").attr("data-id", `${id + i}`);

    itemCounter.find("button").on("click", function(e) {
      changeCounter(id, title, e);
    });

    /*  itemCounter.find("button-decrement").on("click", function(e) {
      changeCounter(id, title, e, );
    }); */

    itemCounter.find("button").on("click", function(e) {
      checkButtons(id);
      showButtonClear(id, title);
      changeText(id, title, e);
    });
  }

  $(`.${id}_iqdropdown`)
    .find($(".button_clear"))
    .attr("data", `${id}`)
    .on("click", { id, config, title }, clearSelect);
};

let changeCounter = (id, title, e) => {
  console.log(id);
  let elem = e.target.getAttribute("data-id");
  let elemClass = e.target.getAttribute("class");
  console.log(elemClass);

  let currentArrayCount = id === "guest" ? guestCounter : amenitiesCounter;
  let currElem = currentArrayCount.find(item => item.id == elem);
  if (elemClass.includes("button-increment")) {
    currElem.amount++;
  } else {
    currElem.amount--;
  }
  console.log(currentArrayCount);
};

let showButtonClear = id => {
  //если хоть один счетчик ненулевой
  if (
    $(`#${id}`)
      .find(".counter")
      .text() != 0
  ) {
    $(`[data=${id}]`).addClass("button_show");
  } else {
    $(`[data=${id}]`).removeClass("button_show");
  }
};

let changeText = (id, title, e) => {
  switch (id) {
    case "guest":
      changeTextGuest(id, title, e);
      break;
    case "amenities":
      changeTextAmenities(id, title, e);
      break;
  }

  /*  let $text = $("#guest")
    .find("p.iqdropdown__text")
    .text();
  if ($text.slice(0, 2) > 4) {
    $("#guest")
      .find("p.iqdropdown__text")
      .text(`${$text.slice(0, 2)} гостей`);
  } */
};
//функция будет вызываться при нажатии на кнопки плюс или минус
//проверяем первый символ, если он больше 4 - меняем "гостя" на "гостей" и обратно

/*  1) Проверяем гость или удобства
  2) ДЛя гостя делим строки на гость и младенец
  3) ДЛя удобств на удобства и многоточие */

let changeTextGuest = (id, title, e) => {
  //изменим кнопку для младенцев
  /*   $(`[data-id="guest2"]`)
    .removeClass("counter")
    .addClass("counter_baby"); */
  /*   let babyButtonDec = $(`button-increment [data-id="guest2"]`);
  babyButtonInc.deleteClass("button-increment");
  babyButtonDec.deleteClass("button-decrement"); */
  let currTitle = $(`#${id}`)
    .find("p.iqdropdown__text")
    .text();
  /*   console.log(currTitle); */
  /* 
  console.log(e.target.getAttribute("data-id")); */
  /*   let currElem = currentArrayCount.find(item => item.id == elem); */

  let currAmountGuests =
    guestCounter.find(item => item.id == "guest0").amount +
    guestCounter.find(item => item.id == "guest1").amount;

  let currAmountBabyes = guestCounter.find(item => item.id == "guest2").amount;
  let currBabyesString =
    currAmountBabyes > 0 ? `, ${currAmountBabyes} младенец` : " ";
  console.log(`гости: ${currAmountGuests},${currBabyesString}`);

  const finishText = ``;

  //параметризировать слово гость и младенец
  $(`#${id}`)
    .find("p.iqdropdown__text")
    .text(`${currAmountGuests} гостя ${currBabyesString}`);

  let currText = guestCounter;
  let currElem = e.target.getAttribute("data-id");

  switch (currElem) {
    case "guest0":
      currText = $(`#${id}`)
        .find("p.iqdropdown__text")
        .text();
      /*  console.log(currText); */
      break;
    case "guest1":
      currText = $(`#${id}`)
        .find("p.iqdropdown__text")
        .text();
      /*    console.log(currText); */
      break;
    default:
      currText = "младенцы";
    /*  console.log(currText); */
  }

  const guestTitle = ``;

  let $text = $(`#${id}`)
    .find("p.iqdropdown__text")
    .text();

  if ($text.slice(0, 2) > 4) {
    $("#guest")
      .find("p.iqdropdown__text")
      .text(`${$text.slice(0, 2)} гостей`);
  }
};

let changeTextAmenities = (id, title, e) => {
  /*  console.log("удобства"); */
};

let checkButtons = id => {
  for (let i = 0; i < 4; i++) {
    let counter = $(`div[data-id='${id + i}']  .counter`).text();
    $(`div[data-id='${id + i}'] .button-increment`).addClass("btn_visible");

    if (counter > 0 && counter < 9) {
      $(`div[data-id='${id + i}']  .button-decrement`).addClass("btn_visible");
    } else if (counter > 9) {
      $(`div[data-id='${id + i}']  .button-increment`).removeClass(
        "btn_visible"
      );
    } else if (counter < 1) {
      $(`div[data-id='${id + i}']  .button-decrement`).removeClass(
        "btn_visible"
      );
    }
  }
};

let clearSelect = e => {
  let id = e.data.id;
  let config = e.data.config;
  let title = e.data.title;

  for (let i = 0; i < 2; i++) {
    $(`#${id}`)
      .find(".iqdropdown-item-controls")
      .addClass("my_iqdropdown")
      .remove();
    createDropdowns(id, config, title);

    $(`#${id}`)
      .find(".iqdropdown-item-controls .my_iqdropdown .iqdropdown-content")
      .remove();
  }

  //занулить элементы искуственно?!
  guestCounter.map(item => {
    item.amount = 0;
  });
  amenitiesCounter.map(item => {
    item.amount = 0;
  });

  showButtonClear(id);
};

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
