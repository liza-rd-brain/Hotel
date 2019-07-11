import "./select-item.scss";

$(".select-item__wrap").click(function(event) {
  var select = $(event.target).children(".select-item__select");
  select.toggleClass("select-item__select_open");
 /*  $(event.target).toggleClass("select-item__wrap_open"); */
  /* $(event.target).children(".select-item__options").addClass("select-item__options_visible"); */

  var options = $(event.target).children(".select-item__options");
  options.toggleClass("select-item__options_visible");
});

/* $(".select-item__wrap").on('click', function() {
  alert($(this).attr('class'));
}); */
console.log("test");
console.log($);
