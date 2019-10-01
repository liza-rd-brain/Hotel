// import "../../libraries/jquery-ui/jquery-ui.min.css";
// import "../../libraries/jquery-ui/jquery-ui";
//для локализации
// import "../../libraries/jquery-ui/tree/master/ui/i18n/datepicker-ru.js";
import "./datapicker.scss";

/* $("#DateField").datepicker({
  showButtonPanel: true,
  closeText: 'Clear',
       onClose: function (dateText, inst) {
      if ($(window.event.srcElement).hasClass('ui-datepicker-close'))
      {
          document.getElementById(this.id).value = '';
      }
  }
}); */

$(function() {
  var dateFormat = "mm/dd/yy",
    from = $("#from")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 1,
        showButtonPanel: true,
        currentText: "Очистить ",
        closeText: "Применить",
        minDate: null,
        maxDate: null,
        hideOnSelect: false
        // onSelect: function() {
        //   $(this).data("datepicker").inline = true;
        // },
        /*   onClose: function() {
          $(this).data("datepicker").inline = false;
        } */
      })
      .on("change", function() {
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#to")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 1,
        showButtonPanel: true,
        currentText: "Now",
        currentText: "Очистить",
        closeText: "Применить",
        minDate: null,
        maxDate: null,
        hideOnSelect: false
        // onSelect: function() {
        //   $(this).data("datepicker").inline = true;
        // },
        /*  onClose: function() {
          $(this).data("datepicker").inline = false;
        } */
      })
      .on("change", function() {
        from.datepicker("option", "maxDate", getDate(this));
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }
    return date;
  }
});

$.datepicker._gotoToday = function(id) {
/*   debugger; */
  $(id).val("");
  if (id === "#from") {
    $("#to").datepicker("option", {
      minDate: null
    });
  } else {
    $("#from").datepicker("option", {
      maxDate: null
    });
  }
};
$.datepicker._selectDate = function(id, dateStr) {
  var target = $(id);
  var inst = this._getInst(target[0]);
  dateStr = dateStr != null ? dateStr : this._formatDate(inst);
  if (inst.input) inst.input.val(dateStr);
  this._updateAlternate(inst);
  var onSelect = this._get(inst, "onSelect");
  if (onSelect)
    onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]);
  // trigger custom callback
  else if (inst.input) inst.input.trigger("change"); // fire the change event
  if (inst.inline) this._updateDatepicker(inst);
  else {
    if (inst.settings.hideOnSelect != false) {
      /* this._hideDatepicker(); */
    }
    this._lastInput = inst.input[0];
    if (typeof inst.input[0] != "object") inst.input.focus(); // restore focus
    this._lastInput = null;
  }
};

/* const changeButtonClear = () => {
  //показывается, только если введена дата
  $(`[class^="ui-datepicker-current"]`).addClass("my_calendar");
}; */
