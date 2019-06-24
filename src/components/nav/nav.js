import "./nav.scss";

var elItem = $(".nav__item");
var elLinkBold = $(".nav__link");

elItem.mouseover(function() {
 /*  $(this)
    .children()
    .addClass("nav__link_hover"); */
  /*  elLinkBold.appendTo($(this)); */
  /* elLinkBold.clone().appendTo($(this)); */

  /*   $(this).insertAfter( $(this)) */
  console.log($(this));
});
elItem.mouseout(function() {
  /* $(this)
    .children()
    .removeClass("nav__link_hover") */ /* .removeClass("nav__link_bold") */;
});
