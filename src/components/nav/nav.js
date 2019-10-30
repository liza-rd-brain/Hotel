import "./nav.scss";

$().ready(() => {
  let expandedList = document.querySelectorAll(".nav__item_expanded");

  for (let i = 0; i < expandedList.length; i++) {
    $(expandedList[i])
      .find(".nav__link")
      .on("click", function(e) {
        $(expandedList[i])
          .find(".nav__expandable-options")
          .toggleClass("nav__expandable-options_open");
      });

    $(document).mouseup(function(e) {
      // событие клика по веб-документу
      if (
        !$(expandedList[i]).is(e.target) && // если клик был не по нашему блоку
        $(expandedList[i]).has(e.target).length === 0
      ) {
        // и не по его дочерним элементам
        $(expandedList[i])
          .find(".nav__expandable-options")
          .removeClass("nav__expandable-options_open"); // скрываем его
      }
    });
  }
});
