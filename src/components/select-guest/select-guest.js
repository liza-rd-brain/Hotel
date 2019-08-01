import "item-quantity-dropdown/lib/item-quantity-dropdown.min.js";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min.css";
import "./select-guest.scss";
import "../select-menu/select-menu";
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
const GUEST = {
  maxItems: Infinity,
  minItems: 1,
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

/* var textPluralDef = (items>1 && items<5)?"гостя":"гостей" */

$().ready(() => {
  $(".iqdropdown").iqDropdown(GUEST);
 
  $(".iqdropdown-selection").text("Сколько гостей");
});

$(`button-increment`).click(() => {
  debugger;
  console.log("test");
});

  
$(`button-increment`).on('click', function(){
  debugger;
  console.log("test");
});