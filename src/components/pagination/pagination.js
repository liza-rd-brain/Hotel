import "simple-pagination.js/jquery.simplePagination";
import "simple-pagination.js/simplePagination.css";
import "./pagination.scss";


$().ready(() => {
  const newLeftArrow = $(".pagination__arrow-wrap").find(
    ".pagination__arrow_left"
  );

  const newRightArrow = $(".pagination__arrow-wrap")
    .find(".pagination__arrow_right")
    .first();

  $(function() {
    $(".pagination__item").pagination({
      items: 20,
      itemsOnPage: 10,
      pages: 15,
      cssStyle: "light-theme",
      displayedPages: 3,
      edges: 1,
      prevText: " ",
      nextText: " ",
      ellipsePageSet: false,
      onInit: () => {}
    });
    $(".pagination")
      .find("ul")
      .addClass("pagination__list");

    let testElem = $(".pagination__list")
      .find(".current.prev")
      .remove();

    let testLink = $(".pagination__list").find(".page-link.prev");
    console.log(testLink);
  });
});
