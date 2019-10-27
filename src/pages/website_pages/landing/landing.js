import "./landing.scss";
import "../../../index.scss";
import "../../../components/header/header";
import "../../../components/logo/logo";
import "../../../components/footer/footer";
import "../../../components/social/social";
import "../../../components/searchbox/searchbox";

let item = 3;

/* $().ready(() => {
  //можно менять класс по количеству узлов
  setInterval(() => checkItem(), 5000);
}); */

/* const checkItem = () => {
  if (item > 1) {
    changeImg();
  } else {
    item = 3;
    changeImg();
  }
};
const changeImg = () => {
  $(".landing__main")
    .removeClass(`main__image-${item}`)
    .addClass(`main__image-${item - 1}`);
  item--;
  console.log("test");
}; */
