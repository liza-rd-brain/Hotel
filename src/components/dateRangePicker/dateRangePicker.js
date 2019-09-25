import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
// import "flatpickr/dist/themes/airbnb.css"
/* import "./dateRangePicker.scss" */
// flatpickr(".example");
// $(".example").flatpickr();

/* var flatpickr_opts = {
  altInput: true,
  altInputClass: 'flatpickr-alt',
  altFormat: 'F j, Y',
  onReady: function(dateObj, dateStr, instance) {
      $('.flatpickr-calendar').each(function() {
          var $this = $(this);
          if ($this.find('.flatpickr-clear').length < 1) {
              $this.append('<div class="flatpickr-clear">Clear</div>');
              $this.find('.flatpickr-clear').on('click', function() {
                  instance.clear();
                  instance.close();
              });
          }
      });
  }
}; */

const config = {
  altInput: true,
  altInputClass: "flatpickr-alt",
  altFormat: "F j, Y",
  onReady: function ( dateObj, dateStr, instance ) {
    const $clear = $( '<div class="flatpickr-clear"><button class="flatpickr-clear-button">Clear</button></div>' )
      .on( 'click', () => {
        instance.clear();
        instance.close();
      } )
      .appendTo( $( instance.calendarContainer ) );
    
    const $close = $( '<div class="flatpickr-close"><button class="flatpickr-close-button">Close</button></div>' )
      .on( 'click', () => {
        instance.close();
      } )
      .appendTo( $( instance.calendarContainer ) );  
  },
  plugins: [new rangePlugin({ input: ".example2" })]
};
let calendar = flatpickr(".example", config);

/* flatpickr(".some-wrap", {
  wrap: true
}); */
