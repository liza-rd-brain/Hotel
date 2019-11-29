let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(50, 50, 20, 0, Math.PI, false);
ctx.stroke();

let gradient_1 = ctx.createLinearGradient(0, 0, 0, 180);
gradient_1.addColorStop(0, "#FFE39C");
gradient_1.addColorStop(1, "#ffba9c");
let gradient_2 = ctx.createLinearGradient(0, 180, 0, 0);
gradient_2.addColorStop(0, "#6FCF97");
gradient_2.addColorStop(1, "#66D2EA");
let gradient_3 = ctx.createLinearGradient(0, 0, 0, 180);
gradient_3.addColorStop(0, "#BC9CFF");
gradient_3.addColorStop(1, "#8BA4F9");

let color_1 = "#FFE39C";
let color_3 = "#BC9CFF";
let color_2 = "#6FCF97";

class Doughnut {
  constructor(options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
    this.drawPieSlice = this.drawPieSlice.bind(this);
    this.drawLegendLabel = this.drawLegendLabel.bind(this);
    /*  this.handlerClick = this.handlerClick.bind(this); */
    this.checkClick = this.checkClick.bind(this);
    this.findSector = this.findSector.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
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

  drawBorder(ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  drawInnerText(ctx, x, y, text, color) {
    ctx.font = "24px serif";
    ctx.textAlign = "center";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }
  handlerClick(ev) {
    var canvasPosition = {
      x: canvas.offsetLeft,
      y: canvas.offsetTop
    };

    let mouse = {
      x: ev.pageX - canvasPosition.x,
      y: ev.pageY - canvasPosition.y
    };
    /*  console.log(mouse); */
    let { x, y } = mouse;
    //смотрим, попал ли клик по окружности
    // если да, то по какой окружности попал!!!
    let intersection = this.checkClick({ x, y });
    if (intersection) {
      this.findSector(intersection);
    }
  }

  checkClick({ x, y }) {
    let radiusMax = 60;
    //выводим центр системы координат в центр окружности
    let centerX = x - radiusMax;
    let centerY = y - radiusMax;
    let currMouse = {
      x: centerX,
      y: centerY
    };
    let radiusClick = Math.sqrt(centerX ** 2 + centerY ** 2);
    if (radiusClick > radiusMax - 10) {
      /*  console.log("true"); */
      //словила клик по краю окружности
      //передаю кооординаты от центра окружности
      console.log(currMouse);
      return currMouse;
    }
  }

  findSector(coord) {
    let total_value = 0;
    this.options.data.map(item => {
      let val = item.val;
      total_value += val;
    });

    let touchАngle;
    if (coord.y > 0) {
      touchАngle = Math.acos(coord.x / 60);
    } else {
      touchАngle = -Math.acos(coord.x / 60);
    }

    console.log(touchАngle);
    /*    this.options.data.map(item => {}); */

    //рисуем типа точку касания
    this.drawPieSlice(
      this.ctx,
      60,
      60,
      80,
      touchАngle,
      touchАngle + 0.001,
      "red"
    );
    let start_angle = 1.57;
    this.options.data.map(item => {
      let val = item.val;
      let slice_angle = (2 * Math.PI * val) / total_value;
      //cдвиг на 1,57
      if (touchАngle < 1.57) {
        touchАngle = 6.28 + touchАngle;
      }

      if (touchАngle > start_angle && touchАngle < start_angle + slice_angle) {
        //нахожу по какому сектору клик
        item.checked = true;
        console.log(item.val);
      } else {
        item.checked = false;
      }
      console.log(item.checked);
      start_angle += slice_angle;
      //очистила канвас
    });
    /*  debugger; */
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.draw();
  }

  draw() {
    let total_value = 0;

    //вычисляем общее значание value
    //переписать редьюсом

    this.options.data.map(item => {
      let val = item.val;
      total_value += val;
    });

    /*    debugger; */

    //при клике в консоли видим координаты кликов
    canvas.onclick = ev => {
      this.handlerClick(ev);
    };

    //вычисляем угол среза
    //параметризовать по радианам
    //0.05-на бордер
    let start_angle = 1.57;
    let centerX = 60;
    let centerY = 60;
    let radiusMax = 60;
    let radiusMin = 55;

    this.options.data.map(item => {
      let val = item.val;
      let slice_angle = (2 * Math.PI * val) / total_value;

      let radiusHole = item.checked ? radiusMin - 4 : radiusMax - 4;

      //параметрирозвать ширина и вырезанный круг
      this.drawPieSlice(
        this.ctx,
        centerX,
        centerY,
        radiusMax,
        start_angle,
        start_angle + slice_angle,
        item.gradient
      );

      /*   currArc.onClick(this.handlerClick); */

      if (this.options.doughnutHoleSize) {
        this.drawPieSlice(
          this.ctx,
          centerX,
          centerY,
          radiusHole,
          start_angle,
          start_angle + slice_angle,
          "white"
        );
      }
      start_angle += slice_angle;
      /*   color_index++; */
    });

    //придумать, как параметризировать бордеры
    this.drawBorder(this.ctx, 59, 0, 2, 120, "white");
    this.drawBorder(this.ctx, 59, 59, 80, 2, "white");

    if (this.options.legend) {
      let y = 40;
      debugger;

      this.options.labels.map(item => {
        this.drawLegendLabel(this.ctx, 154, y, 5, item.gradient);

        /* y+=20 */
        //нарисовали текст-вынести в функцию
        ctx.font = "12px serif";
        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.fillStyle = this.color;
        ctx.fillText(item.text, 170, y);
        y += 24;
      });
    }

    let checkedElem = this.options.data.find(item => item.checked);

    this.drawInnerText(this.ctx, 60, 60, checkedElem.text, checkedElem.color);
    this.drawInnerText(
      this.ctx,
      65,
      80,
      checkedElem.textDesc,
      checkedElem.color
    );
    /*     debugger; */
  }
}

let myDougnutChart = new Doughnut({
  canvas: canvas,
  labels: [
    {
      val: 50,
      text: "Великолепно",
      gradient: gradient_1
    },
    {
      val: 25,
      text: "Хорошо",
      gradient: gradient_2
    },
    {
      val: 25,
      text: "Удовлетворительно",
      gradient: gradient_3
    },
    {
      val: 0,
      text: "Разочарован",
      gradient: "black"
    }
  ],

  data: [
    {
      val: 50,
      text: "520",
      textDesc: "голосов",
      gradient: gradient_1,
      color: color_1
    },

    {
      val: 25,
      text: "260",
      textDesc: "голосов",
      gradient: gradient_3,
      checked: true,
      color: color_3
    },
    {
      val: 25,
      text: "260",
      textDesc: "голосов",
      gradient: gradient_2,
      color: color_2
    }
  ],

  doughnutHoleSize: 0.8,
  legend: true
});

myDougnutChart.draw();
