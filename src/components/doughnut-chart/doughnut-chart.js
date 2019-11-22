var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(50, 50, 20, 0, Math.PI, false);
ctx.stroke();

var gradient_1 = ctx.createLinearGradient(0, 0, 0, 180);
gradient_1.addColorStop(0, "#FFE39C");
gradient_1.addColorStop(1, "#ffba9c");
var gradient_2 = ctx.createLinearGradient(0, 180, 0, 0);
gradient_2.addColorStop(0, "#6FCF97");
gradient_2.addColorStop(1, "#66D2EA");
var gradient_3 = ctx.createLinearGradient(0, 0, 0, 180);
gradient_3.addColorStop(0, "#BC9CFF");
gradient_3.addColorStop(1, "#8BA4F9");

class Doughnut {
  constructor(options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
    this.drawPieSlice = this.drawPieSlice.bind(this);
    this.drawLegendLabel = this.drawLegendLabel.bind(this);
  }

  drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
  }

  drawLegendLabel(ctx, centerX, centerY, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    /*    ctx.moveTo(centerX, centerY); */
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    /*     ctx.closePath(); */
    ctx.fill();
  }

  drawInnerText() {}

  drawBorder() {}

  draw() {
    let total_value = 0;
    let color_index = 0;
    //вычисляем общее значание value
    //переписать редьюсом
    for (var item in this.options.data) {
      var val = this.options.data[item];
      total_value += val;
    }
    //вычисляем угол среза
    //параметризовать по радианам
    var start_angle = 4.71;
    /*  var start_angle = 2 * Math.PI * val; */
    for (var item in this.options.data) {
      val = this.options.data[item];
      var slice_angle = (2 * Math.PI * val) / total_value;

      //параметрирозвать ширина и вырезанный круг
      this.drawPieSlice(
        this.ctx,
        60,
        60,
        60,
        start_angle,
        start_angle + slice_angle,
        this.colors[color_index]
      );

      start_angle += slice_angle;
      color_index++;
    }

    if (this.options.doughnutHoleSize) {
      this.drawPieSlice(this.ctx, 60, 60, 56, 0, 2 * Math.PI, "white");
    }

    //легенда
    //проблема-не возьмет градиент от канвы, поэтому нужно будет переделать легенду на канву, а не HTML
    if (this.options.legend) {
      let color_index = 0;
      let y = 40;
      for (let item in this.options.data) {
        this.drawLegendLabel(
          this.ctx,
          130,
          y,
          10,

          this.colors[color_index]
        );
        color_index++;
        /* y+=20 */
        //нарисовали текст-вынести в функцию
        ctx.font = "12px serif";
        ctx.fillStyle = "black";
        ctx.fillText(item, 150, y, 320);
        y += 20;

        /*  legendHTML +=
          "<div><span style='display:inline-block;width:20px;background-color:" +
          this.colors[color_index++] +
          ";'>&nbsp;</span> " +
          item +
          "</div>"; */
      }
      /*  this.options.legend.innerHTML = legendHTML; */
    }
  }
}

/* var myLegend = document.getElementById("myLegend"); */
var myDougnutChart = new Doughnut({
  canvas: canvas,
  data: {
    Хорошо: 25,
    Удовлетворительно: 25,
    Великолепно: 50,
    Разочарован: 0
  },
  colors: [gradient_3, gradient_2, gradient_1],
  doughnutHoleSize: 0.8,
  legend: true
});
myDougnutChart.draw();

/* var myDoughnut = new Doughnut(canvas, {
  data: {
    labels: ["Хорошо", "Удовлетворительно", "Великолепно", "Разочарован"],
    datasets: [
      {
        data: [25, 25, 50, 0],
        backgroundColor: [gradient_3, gradient_2, gradient, "black"],
        hoverBorderColor: [gradient_3, gradient_2, gradient],
        hoverBorderWidth: [10, 10, 10],
        hoverRadius: 10,
        borderWidth: [1, 1, 1],
        borderAlign: "inner",
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10
      }
    ]
  }
}); */
