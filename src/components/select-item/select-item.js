import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import "./select-item.scss";
import "../select-menu/select-menu";
// import easydropdown from 'easydropdown';


$(".select-item__wrap").click(function(event) {
  var select = $(event.target).children(".select-item__select");
  select.toggleClass("select-item__select_open");
 /*  $(event.target).toggleClass("select-item__wrap_open"); */
  /* $(event.target).children(".select-item__options").addClass("select-item__options_visible"); */

  var options = $(event.target).children(".select-item__options");
  options.toggleClass("select-item__options_visible");
});



$(".select-item__wrap").on('click', function() {
  alert($(this).attr('class'));
});
console.log("test");
console.log($);

// easydropdown.all()
// const edd = easydropdown('#my-select');


$(document).ready(() => {
  $('.iqdropdown').iqDropdown({ });
});