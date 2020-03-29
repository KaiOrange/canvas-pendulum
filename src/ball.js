function Ball (option = {}) {
  this.x = option.x || 0;
  this.y = option.y || 0;
  this.radius = option.radius || 20;
  this.vx = option.vx;
  this.vy = option.vy;
  this.color = option.color || "#ff0000";
  this.outLineWidth = option.outLineWidth || 1;
}

Ball.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.lineWidth = this.outLineWidth;
  context.fillStyle = this.color;
  context.beginPath();
  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  context.closePath();
  context.fill();
  if (this.outLineWidth > 0) {
    context.stroke();
  }
  context.restore();
};

Ball.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 2,
    height: this.radius * 2
  };
};

export default Ball
