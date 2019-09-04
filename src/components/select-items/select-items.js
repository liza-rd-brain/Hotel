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

const guestID = "guest";
const amenitiesID = "amenities";

const guestText = $("#guest .iqdropdown__text").text();
const amenitiesText = $("#amenities .iqdropdown__text").text();

const defaultGuestText = guestText;
const defaultAmenitiesText = amenitiesText;
//отдельные счетчики для гостей и удобств
const guestCounter = [
  { id: "guest0", amount: 0 },
  { id: "guest1", amount: 0 },
  { id: "guest2", amount: 0 }
];

const amenitiesCounter = [
  { id: "amenities0", amount: 0 },
  { id: "amenities1", amount: 0 },
  { id: "amenities2", amount: 0 }
];

$().ready(() => {
  createDropdowns(guestID, GUEST, guestText);
  createDropdowns(amenitiesID, AMENTIES, amenitiesText);
});

const addCountersAttr = (id, title) => {
  for (let i = 0; i < 3; i++) {
    let itemCounter = $(`div[data-id='${id + i}']`);
    itemCounter.find(".counter").attr("data-id", `${id + i}`);
    itemCounter.find(".iqdropdown-item").attr("data-id", `${id + i}`);
    itemCounter.find("button").attr("data-id", `${id + i}`);
    addCountersHandlers(id, title, itemCounter);
  }
};

const addCountersHandlers = (id, title, itemCounter) => {
  itemCounter.find("button").on("click", function(e) {
    changeCounter(id, e);
    checkButtons(id);
    showButtonClear(id, title);
    changeText(id, title, e);
  });
};

const createDropdowns = (id, config, title) => {
  $(`#${id}`).iqDropdown(config);
  $(`#${id} p.iqdropdown__text`).text(title);
  /*  checkText(id, title); */
  checkButtons(id);
  $(`#${id}`).addClass(`my_iqdropdown ${id}_iqdropdown`);
  $(` [class^="iqdropdown"]`).addClass(`my_iqdropdown`);

  addCountersAttr(id, title);
  addClearButtonHandlers(id, config, title);
};

const addClearButtonHandlers = (id, config, title) => {
  $(`.${id}_iqdropdown`)
    .find($(".button_clear"))
    .attr("data", `${id}`)
    .on("click", { id, config, title }, clearSelect);
};

const changeCounter = (id, e) => {
  let elem = e.target.getAttribute("data-id");
  let elemClass = e.target.getAttribute("class");

  let currentArrayCount = id === "guest" ? guestCounter : amenitiesCounter;
  let currElem = currentArrayCount.find(item => item.id == elem);
  if (elemClass.includes("button-increment")) {
    currElem.amount++;
  } else {
    currElem.amount--;
  }
};

const showButtonClear = id => {
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

const changeText = id => {
  switch (id) {
    case "guest":
      changeTitleGuest(id);
      break;
    case "amenities":
      changeTitleAmenities(id);
      break;
  }
};

const changeTitleGuest = id => {
  const currAmountGuests =
    guestCounter.find(item => item.id == "guest0").amount +
    guestCounter.find(item => item.id == "guest1").amount;

  const currAmountBabyes = guestCounter.find(item => item.id == "guest2")
    .amount;
  const guestText = changeTextItem("guest", currAmountGuests);
  const babyText = changeTextItem("baby", currAmountBabyes);

  const currGuestString =
    currAmountGuests > 0 ? ` ${currAmountGuests} ${guestText}` : " ";
  const currBabyesString =
    currAmountBabyes > 0 ? ` ${currAmountBabyes} ${babyText}` : " ";
  const needСomma = currAmountGuests && currAmountBabyes ? "," : " ";

  const finalText =
    currAmountGuests || currAmountBabyes
      ? `${currGuestString} ${needСomma} ${currBabyesString}`
      : defaultGuestText;

  $(`#${id}`)
    .find("p.iqdropdown__text")
    .text(finalText);
};

const changeTitleAmenities = id => {
  const currAmountBedrooms = amenitiesCounter.find(
    item => item.id == "amenities0"
  ).amount;
  const currAmountBeds = amenitiesCounter.find(item => item.id == "amenities1")
    .amount;
  const currAmountBath = amenitiesCounter.find(item => item.id == "amenities2")
    .amount;

  const bedroomsText = changeTextItem("bedrooms", currAmountBedrooms);
  const bedsText = changeTextItem("beds", currAmountBeds);
  const bathText = changeTextItem("bath", currAmountBath);

  const currBedroomsString =
    currAmountBedrooms > 0 ? ` ${currAmountBedrooms} ${bedroomsText}` : " ";
  const currBedsString =
    currAmountBeds > 0 ? ` ${currAmountBeds} ${bedsText}` : " ";
  const currBathString =
    currAmountBath > 0 ? ` ${currAmountBath} ${bathText}` : " ";
  const needСomma =
    (currAmountBedrooms && currAmountBeds) ||
    (currAmountBedrooms && currAmountBath) ||
    (currAmountBeds && currAmountBath)
      ? ","
      : " ";
  const needEllipsis =
    currAmountBedrooms && currAmountBeds && currAmountBath > 0 ? "..." : " ";

  const finalText =
    currAmountBedrooms && currAmountBeds
      ? `${currBedroomsString} ${needСomma} ${currBedsString} ${needEllipsis} `
      : currAmountBedrooms && currAmountBath
      ? `${currBedroomsString} ${needСomma} ${currBathString}  `
      : currAmountBeds && currAmountBath
      ? `${currBedsString} ${needСomma} ${currBathString}  `
      : currAmountBedrooms
      ? `${currBedroomsString} `
      : currAmountBeds
      ? `${currBedsString} `
      : currAmountBath
      ? `${currBathString}  `
      : defaultAmenitiesText;

  $(`#${id}`)
    .find("p.iqdropdown__text")
    .text(finalText);
};

const changeTextItem = (name, amount) => {
  if (amount === 1) {
    switch (name) {
      case "guest":
        return "гость";
        break;
      case "baby":
        return "младенец";
        break;
      case "bedrooms":
        return "спальня";
        break;
      case "beds":
        return "кровать";
        break;
      case "bath":
        return "ванная комната";
        break;
      default:
        return "item";
    }
  } else if (amount > 1 && amount < 5) {
    switch (name) {
      case "guest":
        return "гостя";
        break;
      case "baby":
        return "младенца";
        break;
      case "bedrooms":
        return "спальни";
        break;
      case "beds":
        return "кровати";
        break;
      case "bath":
        return "ванные комнаты";
        break;
      default:
        return "item";
    }
  } else {
    switch (name) {
      case "guest":
        return "гостей";
        break;
      case "baby":
        return "младенцев";
        break;
      case "bedrooms":
        return "спальнен";
        break;
      case "beds":
        return "кроватей";
        break;
      case "bath":
        return "ванных комнат";
        break;
      default:
        return "item";
    }
  }
};

const checkButtons = id => {
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

const clearSelect = e => {
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
