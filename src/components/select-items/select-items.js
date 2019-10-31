import "item-quantity-dropdown/lib/item-quantity-dropdown.min.js";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min.css";
import "./select-items.scss";
// import easydropdown from 'easydropdown';

// максимум - 10 гостей
const GUEST = {
  //пока не привязалась к минимуму/максимуму гостей
  maxItems: 10,
  minItems: 1,
  selectionText: "гость",
  textPlural: "гостя",
  controls: {
    position: "right",
    displayCls: "iqdropdown-content",
    controlsCls: "iqdropdown-item-controls",
    counterCls: "counter"
  },
  items: {},
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

//отдельные счетчики для гостей и удобств
const guestCounter = [
  { id: "guest-0", amount: 0 },
  { id: "guest-1", amount: 0 },
  { id: "guest-2", amount: 0 }
];

const amenitiesCounter = [
  { id: "amenities-0", amount: 0 },
  { id: "amenities-1", amount: 0 },
  { id: "amenities-2", amount: 0 }
];

$().ready(() => {
  let guestList = document.querySelectorAll("#guest");

  for (let i = 0; i < guestList.length; i++) {
    let currGuestID = `${guestID}-${i}`;
    $(guestList[i]).attr("id", currGuestID);
    let guestText = $(guestList[i])
      .find(".iqdropdown__text")
      .text();
    createDropdowns(currGuestID, GUEST, guestText);

    closedDropdown(guestList[i]);
  }

  let amenitiesList = document.querySelectorAll("#amenities");

  for (let i = 0; i < amenitiesList.length; i++) {
    let currAmenitiesID = `${amenitiesID}-${i}`;
    $(amenitiesList[i]).attr("id", currAmenitiesID);
    let amenitiesText = $(amenitiesList[i])
      .find(".iqdropdown__text")
      .text();
    createDropdowns(currAmenitiesID, AMENTIES, amenitiesText);

    closedDropdown(amenitiesList[i]);
  }

  let incButtonList = document.querySelectorAll(".button-increment");
  for (let i = 0; i < incButtonList.length; i++) {
    $(incButtonList[i]).addClass("btn_visible");
  }
});

const closedDropdown = elem => {
  $(document).mouseup(function(e) {
    // событие клика по веб-документу
    if (
      !$(elem).is(e.target) && // если клик был не по нашему блоку
      $(elem).has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      $(elem).removeClass("menu-open"); // скрываем его
    }
  });
};

const addCountersAttr = (id, title) => {
  let itemCounterList = document
    .getElementById(id)
    .querySelectorAll(".iqdropdown-menu-option");

  for (let i = 0; i < itemCounterList.length; i++) {
    let itemCounter = $(itemCounterList[i]);
    itemCounter.attr("data-id", `${id}${i}`);
    itemCounter.find("button").attr("data-id", `${id}${i}`);
    itemCounter.find(".counter").attr("data-id", `${id}${i}`);
    addCountersHandlers(id, title, itemCounter);
  }
};

const addCountersHandlers = (id, title, itemCounter) => {
  let currButtonGroup = $(itemCounter).find("button");
  for (let i = 0; i < currButtonGroup.length; i++) {
    let testButton = currButtonGroup[i];
    $(testButton).on("click", function(e) {
      changeCounter(id, e);
      checkButtons(id);
      showButtonClear(id, title);
      changeText(id, title /* , e */);
    });
  }
};

const createDropdowns = (id, config, title) => {
  $(`#${id}`).iqDropdown(config);
  $(`#${id} p.iqdropdown__text`).text(title);
  /*  checkText(id, title); */
  checkButtons(id);
  $(`#${id}`).addClass(`my_iqdropdown ${id}_iqdropdown`);
  $(`#${id}`)
    .find(` [class^="iqdropdown"]`)
    .addClass(`my_iqdropdown`);

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
  let currentArrayCount = id.match(/guest/) ? guestCounter : amenitiesCounter;

  let currElem = currentArrayCount.find(
    item => item.id.substr(-1) === elem.substr(-1)
    /*  return item; */
  );

  if (elemClass.includes("button-increment") && currElem.amount < 10) {
    currElem.amount++;
  } else if (elemClass.includes("button-decrement") && currElem.amount > 0) {
    currElem.amount--;
  }

  let currCounter = $(`[data-id=${elem}]`).find(".counter");
  currCounter.html(currElem.amount);
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

const changeText = (id, title) => {
  if (id.match(/guest/)) {
    changeTitleGuest(id, title);
  } else if (id.match(/amenities/)) {
    changeTitleAmenities(id, title);
  }
};

const changeTitleGuest = (id, title) => {
  const currAmountGuests =
    guestCounter.find(item => item.id == "guest-0").amount +
    guestCounter.find(item => item.id == "guest-1").amount;

  const currAmountBabyes = guestCounter.find(item => item.id == "guest-2")
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
      : title;

  $(`#${id}`)
    .find("p.iqdropdown__text")
    .text(finalText);
};

const changeTitleAmenities = (id, title) => {
  const currAmountBedrooms = amenitiesCounter.find(
    item => item.id == "amenities-0"
  ).amount;
  const currAmountBeds = amenitiesCounter.find(item => item.id == "amenities-1")
    .amount;
  const currAmountBath = amenitiesCounter.find(item => item.id == "amenities-2")
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
      : title;

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
