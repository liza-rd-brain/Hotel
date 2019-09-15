import "./like-button.scss";
/* 
$(".like-button").on("click", console.log("клик")); */
let button =$(".like-button")
;
console.log(button);


button.on("click", console.log("клик"));
/* button.addEventListener("click", makeClick); */
const makeClick = () => {
  console.log("клик");
};
