import Ball from './ball'
import utils from './utils'

class CanvasPendulum {

  constructor(options = {}){
    this.canvas = options.el
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      document.body.appendChild(this.canvas);
    }
    this.cWidth = options.width || this.canvas.width;
    this.cHeight =  options.height || this.canvas.height;
    this.context = this.canvas.getContext('2d');
    var mouse = utils.captureMouse(this.canvas);

    this.T = options.T || 1000;// 周期
    this.ballNum = options.ballNum || 5;
    this.ballWidth = options.ballWidth || 40;
    this.maxAngle = options.maxAngle || 20;// 最大的角度
    this.outLineWidth = Math.min(options.outLineWidth || 1,this.ballWidth);// 边框大小
    this.initSpeed = 2 * Math.PI / this.T;
    this.intX = this.cWidth / 2 - this.ballNum / 2 * (this.ballWidth + this.outLineWidth);
    this.maxRadian = Math.PI * (this.maxAngle || 10) / 180;

    this.startTime = + new Date();
    this.time = this.getTimer();
    let lineWidth = options.lineWidth || (this.cHeight - this.ballWidth) * 90 / 100;

    let defaultBallStyle = 'red'
    let ballStyles = options.ballStyles || defaultBallStyle

    this.pendulums = new Array(this.ballNum).fill(0).map((item,index)=>({
      ball:new Ball({
        radius: this.ballWidth / 2,
        style: Array.isArray(ballStyles) ? ballStyles[index]||defaultBallStyle : ballStyles,
        outLineWidth: this.outLineWidth
      }),
      radius: this.ballWidth / 2,
      fixedPoint:[this.intX + index * (this.ballWidth + this.outLineWidth) + this.ballWidth / 2,0],
      line: lineWidth,
      spend: index === 0 ? this.initSpeed : 0,
      w: 0,
    }));
  }

  getTimer(){
    return + new Date() - this.startTime;
  }

  checkConflict (ball1,ball2){
    if (!ball1 || !ball2) {
      return false
    }
    return Math.pow(ball1.radius + ball2.radius,2) > Math.pow(ball2.x - ball1.x,2) + Math.pow(ball2.y - ball1.y,2)
  }

  start(){
    window.requestAnimationFrame(this.start.bind(this), this.canvas);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    var elspsed = this.getTimer() - this.time;
    this.time = this.getTimer();

     // 绘制
    this.pendulums.forEach(item=>{
      // item.w+=item.spend;
      item.w += item.spend * elspsed;
      var angle =  Math.sin(item.w) * this.maxRadian;
      item.ball.x = item.fixedPoint[0] - (item.line + item.radius) * Math.sin(angle);
      item.ball.y = item.fixedPoint[1] + (item.line + item.radius) * Math.cos(angle);

      // 划线
      this.context.save();
      this.context.lineWidth = 1;
      this.context.beginPath();
      this.context.moveTo(item.fixedPoint[0] || 9, item.fixedPoint[1] || 0);
      this.context.lineTo(item.fixedPoint[0] - item.line * Math.sin(angle) , item.fixedPoint[1] + item.line * Math.cos(angle));
      this.context.stroke();
      this.context.restore();

      if (angle !== 0) {
        item.ball.rotation = angle
      }

      item.ball.draw(this.context);

    })

    // 碰撞检测
    if (this.pendulums.length >= 2 && (
      this.checkConflict(this.pendulums[0].ball,this.pendulums[1].ball) ||
      this.checkConflict(this.pendulums[this.pendulums.length-1].ball,this.pendulums[this.pendulums.length -2].ball))) {
      console.log('碰撞了！！！');
      var spend = this.pendulums[0].spend;
      var w = this.pendulums[0].w;
      this.pendulums[0].spend = this.pendulums[this.pendulums.length - 1].spend;
      this.pendulums[0].w = this.pendulums[this.pendulums.length - 1].w
      this.pendulums[this.pendulums.length - 1].spend = spend
      this.pendulums[this.pendulums.length - 1].w = w
    }
  }

}

export default CanvasPendulum

