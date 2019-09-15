import "./like-button.scss";
/* 
$(".like-button").on("click", console.log("клик")); */
let button =$(".like-button");
let counterEl=$(".like-button__amount");
let counterText=$(counterEl).html()


$(document).find(button).on("click", function(e){
  console.log("button");
  $(counterEl).toggleClass("amount-inc")
 changeAmount();
})

//можно продумать также ситуацию, если нет ни одного лайка = сердце по середине 
// и анимация с появлением как вк
const changeAmount=()=>{
  if($(counterEl).hasClass("amount-inc")){
    counterText++;
    $(counterEl).html(counterText)
  }
  else{
    counterText--;
    $(counterEl).html(counterText)
  }
  
}

/* button.on("click", console.log("клик")); */

/* button.addEventListener("click", makeClick); */
const makeClick = () => {
  console.log("клик");
};
