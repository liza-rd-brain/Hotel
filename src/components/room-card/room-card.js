import "./room-card.scss"
import Glide from "@glidejs/glide/dist/glide.min.js"


var glide = new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 1,
    animationDuration:700,
   /*  focusAt:"center" */
   /*  rewind:false */
})

glide.mount()