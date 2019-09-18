import Glide from "@glidejs/glide/dist/glide.min.js"
import "./room-card.scss"


var glide = new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 1,
    animationDuration:700,
   /*  focusAt:"center" */
   /*  rewind:false */
})

glide.mount()


/* $().ready(() => {
  addImage()
  });

  const addImage=()=>{
      //найти каждый элемент li и сделать ему background-image
  } */