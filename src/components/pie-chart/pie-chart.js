import "./pie-chart.scss";
import Chart from "chart.js";
/* var myChart = new Chart(ctx, {...}); */

var ctx = document.getElementById("myChart");
var innerText = "привет";
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        /* label: "# of Votes", */
        data: [25, 25, 50],
        hoverBorderWidth: 30,
        borderWidth: "20px",
        radius: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    animation: {
      animateRotate: true
    },
    events: ["click"],
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    legend: {
      display: false
    },
    title: {
      display: true
    },
    tooltips: {
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
          /* myChart.tooltip._lastActive, */
          /*  myChart.active[0]._model.label || "test", */
          chart.canvas.width / 2,
          chart.canvas.height / 2
        );
      }
    }
  ]
});

document.getElementById("myChart").onclick = function(evt) {
  debugger;
/*   myChart.options.rotation = myChart.options.rotation + Math.PI / 2; */

  /*  var activePoints = myChart.getElementsAtEvent(evt);
  var firstPoint = activePoints[0];
  var label = myChart.data.labels[firstPoint._index];
  var value =
    myChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
  alert(label + ": " + value); */
};

/* myChart.pluginServce.register({
  // Change thickness of line for the data section of the
  // doughnut chart that displays the amount that is left to be raised. Accessing data[1] gets us the
  // correct data section of the doughnut we want to manipulate.
  beforeDraw: function(chart) {
    if (chart.config.options.elements.customCutout !== undefined) {
      chart.getDatasetMeta(0).data[1]._view.innerRadius = 94;
      chart.getDatasetMeta(0).data[1]._view.outerRadius = 98;
      chart.update();
    }
  }
});
 */
