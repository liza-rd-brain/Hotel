import "./pie-chart.scss";
import Chart from "chart.js";
import "chartjs-plugin-style";
/* var myChart = new Chart(ctx, {...}); */

var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");
var innerText = "привет";

var effectColors = {
  highlight: "rgba(255, 255, 255, 0.75)",
  shadow: "rgba(0, 0, 0, 0.5)",
  glow: "rgb(255, 255, 225)"
};

var gradient = ctx.createLinearGradient(0, 0, 0, 360);
gradient.addColorStop(0, "#FFE39C");
gradient.addColorStop(1, "#ffba9c");
var gradient_2 = ctx.createLinearGradient(0, 360, 0, 0);
gradient_2.addColorStop(0, "#6FCF97");
gradient_2.addColorStop(1, "#66D2EA");
var gradient_3 = ctx.createLinearGradient(0, 0, 0, 360);
gradient_3.addColorStop(0, "#BC9CFF");
gradient_3.addColorStop(1, "#8BA4F9");

//сэмулировать с самого начала наведение на элемент удовлетворительно
//убрать unhover c элементов
//посмотреть плагин, который центрирует надпись
var myChart = new Chart(canvas, {
  type: "doughnut",
  data: {
    labels: ["Хорошо", "Удовлетворительно", "Великолепно", "Разочарован"],
    datasets: [
      {
        /*  label: "# of Votes", */
        data: [25, 25, 50, 0],
        backgroundColor: [gradient_3, gradient_2, gradient, "black"],
        hoverBorderColor: [gradient_3, gradient_2, gradient],
        hoverBorderWidth: [10, 10, 10],

        /*  hoverRadius: 10,
        hitRadius: 10, */
        borderWidth: [1, 1, 1],

        //не получается добиться нужно ширины
        borderAlign: "inner",
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
      /*   shadowColor: effectColors.shadow, */
        bevelWidth: 2,
        /* bevelHighlightColor: effectColors.highlight, */
       /*  bevelShadowColor: effectColors.shadow, */
        /* hoverInnerGlowWidth: 20,
        hoverInnerGlowColor: effectColors.glow, */
        hoverOuterGlowWidth:10,
        hoverOuterGlowColor: effectColors.glow
        /*      data: [6, 3, 2, 0] */
      }
    ]
  },
  options: {
    animation: {
      animateRotate: true
    },
    /* events: ["click"], */
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    legend: {
      display: true,
      position: "right",
      align: "center",
      labels: {
        padding: 14,
        /*  fontColor: "rgb(255, 99, 132)" */
        boxWidth: 12,
        usePointStyle: true
        /*    style: "point" */
      }
      /*  generateLabels: {
        pointStyle: "circle"
      } */
    },

    tooltips: {
      enabled: false,
      mode: "index"
    },
    elements: {
      customCutout: true
    },
    cutoutPercentage: 92

    /*   */
  },
  plugins: [
    {
      id: "my-plugin",
      afterDraw: function(chart, option) {
        var innerText = myChart.active
          ? myChart.active[0]._model.label
          : "test";

        chart.ctx.fillStyle = "black";
        chart.ctx.textBaseline = "middle";
        chart.ctx.textAlign = "center";
        chart.ctx.font = "17px Arial";
        chart.ctx.fillText(
          innerText,
          //  myChart.tooltip._lastActive,
          // myChart.active[0]._model.label || "test",
          chart.canvas.width / 2,
          chart.canvas.height / 2
        );
      }
    }
  ]
});
