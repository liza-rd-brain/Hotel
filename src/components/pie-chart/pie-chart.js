import "./pie-chart.scss";
import Charts from "chart.js";
/* var myChart = new Chart(ctx, {...}); */

var canvas = document.getElementById("myCharts");
var ctx = canvas.getContext("2d");
var innerText = "привет";

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
var myCharts = new Charts(canvas, {
  type: "doughnut",
  data: {
    labels: ["Хорошо", "Удовлетворительно", "Великолепно", "Разочарован"],
    datasets: [
      {
        /* label: "# of Votes", */
        data: [25, 25, 50, 0],
        /* borderWidth: 20, */
       /*  radius: 1, */
        //black поменять на градиент
        backgroundColor: [gradient_3, gradient_2, gradient, "black"],
        // hoverBorderColor: [gradient_3, gradient_2, gradient],
        hoverBorderWidth: [50,50,50],
        borderWidth:[1,1,1],
        //не получается добиться нужно ширины
        borderAlign: "inner"
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
      },
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
        var innerText = myCharts.active
          ? myCharts.active[0]._model.label
          : "test";

        chart.ctx.fillStyle = "black";
        chart.ctx.textBaseline = "middle";
        chart.ctx.textAlign = "center";
        chart.ctx.font = "17px Arial";
        chart.ctx.fillText(
          innerText,
          /*  myChart.tooltip._lastActive,
          myChart.active[0]._model.label || "test", */
          chart.canvas.width / 2,
          chart.canvas.height / 2
        );
      }
    }
  ]
});

/* document.getElementById("chartjsLegend").innerHTML = myCharts.generateLegend();
 */
/* document.getElementById(".myCharts").onclick = function(evt) {}; */
