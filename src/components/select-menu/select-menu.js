import "item-quantity-dropdown/lib/item-quantity-dropdown.min.js";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min.css";
import "./select-menu.scss";

// 1.сделать рабочими кнопки -применить, очистить
// 2. подкрутить синтаксис -гост-ь(я,ей)
// 3. цвет кнопок: если есть куда менять (+ и -)  они не размытые

// easydropdown.all()
// const edd = easydropdown('#my-select');

/* var textPluralDef = (items>1 && items<5)?"гостя":"гостей" */

$(`button-increment`).click(() => {
  debugger;
  console.log("test");
});

$(`button-increment`).on("click", function() {
  debugger;
  console.log("test");
});

//всем элементам select-menu дала доп класс  "my_iqdropdown"
$('[class^="iqdropdown"]').addClass("my_iqdropdown");


