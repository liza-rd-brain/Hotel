"use strict";

import "../../index.scss";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

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

let option = {
  canvas: canvas,
  // угол в радианах
  startAngle: Math.PI/2 ,
  //коорд центра окружности
  center: {
    x: 60,
    y: 60
  },
  outerRadius: 60,
  widthDoughnut: 4,
  widthDoughnutChecked: 10,
  doughnutHole: true,
  styleTextNumber: {
    x: 60,
    y: 53,
    style: "24px Quicksand-bold, Arial, sans-serif"
  },
  styleTextDesc: {
    x: 60,
    y: 73,
    style: "12px Montserrat-bold, Arial, sans-serif"
  },

  data: [
    {
      val: 50,
      textNumber: "520",
      textDesc: "голосов",
      gradient: gradient_1,
      color: color_1
    },

    {
      val: 25,
      textNumber: "260",
      textDesc: "голосов",
      gradient: gradient_3,
      checked: true,
      color: color_3
    },
    {
      val: 25,
      textNumber: "260",
      textDesc: "голосов",
      gradient: gradient_2,
      color: color_2
    }
  ],

  legend: {
    y: 40,
    marginY: 24,
    x: 154,
    //как поменять шрифт
    fontLegent: "14px Montserrat, Arial, sans-serif",
    color: " rgba(31, 32, 65, 0.75)",
    labelRadius: 5,
    textX: 165
  },
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
  ]
};

class Doughnut {
  constructor(options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.draw = this.draw.bind(this);
    this.drawPieSlice = this.drawPieSlice.bind(this);
    this.drawLegendLabel = this.drawLegendLabel.bind(this);
    this.checkClick = this.checkClick.bind(this);
    this.findSector = this.findSector.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
    //массив значений слайсов
    this.val = [];
    this.totalValue = 0;
    //массив углов слайсов
    this.sliceAngle = [];
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
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  drawBorder(ctx, x, y, width, height, color) {
    //переделать как-то на арки???
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  drawText(x, y, text, color, font) {
    ctx = this.ctx;
    ctx.font = font;
    ctx.textAlign = "center";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }
  handlerClick(ev) {
    var canvasPosition = {
      x: this.canvas.offsetLeft,
      y: this.canvas.offsetTop
    };

    let mouse = {
      x: ev.pageX - canvasPosition.x,
      y: ev.pageY - canvasPosition.y
    };

    let { x, y } = mouse;
    //смотрим, попал ли клик по окружности=координаты дуги совпадают с координатой клика
    // если да, то по какой окружности попал!!!
    let intersection = this.checkClick({ x, y });
    if (intersection) {
      this.findSector(intersection);
    }
  }

  checkClick({ x, y }) {
    let outerRadius = 60;
    //выводим центр системы координат в центр окружности
    let centerX = x - outerRadius;
    let centerY = y - outerRadius;
    let currMouse = {
      x: centerX,
      y: centerY
    };
    let radiusClick = Math.sqrt(centerX ** 2 + centerY ** 2);
    //погрешность на 10 = кликнули рядом, почти по кругу
    if (radiusClick > outerRadius - 10 && radiusClick < outerRadius + 10) {
      //словила клик по краю окружности
      //передаю кооординаты от центра окружности
      console.log(currMouse);
      return currMouse;
    }
  }

  findSector(coord) {
    ;
    /*  let totalValue = 0; */

    /* this.options.data.map(item => {
      let val = item.val;
      totalValue += val;
    }); */

    let touchАngle;
    if (coord.y > 0) {
      touchАngle = Math.acos(coord.x / 60);
    } else {
      touchАngle = -Math.acos(coord.x / 60);
    }
    /*    this.options.data.map(item => {}); */

    //рисуем типа точку касания
    // this.drawPieSlice(
    //   this.ctx,
    //   60,
    //   60,
    //   80,
    //   touchАngle,
    //   touchАngle + 0.001,
    //   "red"
    // );

    let startAngle = this.options.startAngle;
    this.options.data.map((item, index) => {
      if (touchАngle < startAngle) {
        touchАngle = 2 * Math.PI + touchАngle;
      }

      if (
        touchАngle > startAngle &&
        touchАngle < startAngle + this.sliceAngle[index]
      ) {
        item.checked = true;
        //нахожу по какому сектору клик
      } else {
        item.checked = false;
      }
      startAngle += this.sliceAngle[index];
      //очистила канвас
    });
    /*; */
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.draw();
  }

  draw() {
    this.val = this.options.data.map(item => item.val);
    this.totalValue = this.val.reduce((summ, item) => summ + item);
    this.sliceAngle = this.val.map(item => {
      return (2 * Math.PI * item) / this.totalValue;
    });
    //при клике в консоли видим координаты кликов
    canvas.onclick = ev => {
      this.handlerClick(ev);
    };

    //0.05-на бордер
    let startAngle = this.options.startAngle;
    let centerX = this.options.center.x;
    let centerY = this.options.center.y;
    let outerRadius = this.options.outerRadius;
    let widthDoughnut = this.options.widthDoughnut;
    let widthDoughnutChecked = this.options.widthDoughnutChecked;
    //непосредственная рисовка кусков пирога
    this.options.data.map((item, index) => {
      let radiusHole = item.checked
        ? outerRadius - widthDoughnutChecked
        : outerRadius - widthDoughnut;
      //параметрирозвать ширина и вырезанный круг
      this.drawPieSlice(
        this.ctx,
        centerX,
        centerY,
        outerRadius,
        startAngle,
        startAngle + this.sliceAngle[index],
        item.gradient
      );

      /*   currArc.onClick(this.handlerClick); */

      if (this.options.doughnutHole) {
        this.drawPieSlice(
          this.ctx,
          centerX,
          centerY,
          radiusHole,
          startAngle,
          startAngle + this.sliceAngle[index],
          "white"
        );
      }
      startAngle += this.sliceAngle[index];
    });

    //придумать, как параметризировать бордеры-белые, отделющие слайсы
    //сделать в итоге их арками
    this.drawBorder(this.ctx, 59, 0, 2, 120, "white");
    this.drawBorder(this.ctx, 59, 59, 80, 2, "white");

    if (this.options.legend) {
      let legendY = this.options.legend.y;
      let legendX = this.options.legend.x;
      let fontLegent = this.options.legend.fontLegent;
      let fillStyle = this.options.legend.color;
      let labelRadius = this.options.legend.labelRadius;
      let textX = this.options.legend.textX;
      let marginY = this.options.legend.marginY;
      ;

      ;
      this.options.labels.map(item => {
        this.drawLegendLabel(
          this.ctx,
          legendX,
          legendY,
          labelRadius,
          item.gradient
        );
        ctx.font = fontLegent;
        ctx.fillStyle = fillStyle;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(item.text, textX, legendY);
        this.drawText();
        legendY += marginY;
      });
    }

    /* canvas.style.letterSpacing = "7px"; */
    let fontNumber = this.options.styleTextNumber.style;
    let fontDesc = this.options.styleTextDesc.style;
    let checkedElem = this.options.data.find(item => item.checked);
    let numberTextX = this.options.styleTextNumber.x;
    let numberTextY = this.options.styleTextNumber.y;
    let descTextX = this.options.styleTextDesc.x;
    let descTextY = this.options.styleTextDesc.y;
    /* canvas.style.textTransform = "capitalize"; */
    //не трогала
    this.drawText(
      numberTextX,
      numberTextY,
      checkedElem.textNumber,
      checkedElem.color,
      fontNumber
    );
    this.drawText(
      descTextX,
      descTextY,
      checkedElem.textDesc.toUpperCase(),
      checkedElem.color,
      fontDesc
    );
  }
}

let myDougnutChart = new Doughnut(option);
myDougnutChart.draw();
