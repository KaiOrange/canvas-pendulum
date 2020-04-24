class Ball {
  constructor(options = {}) {
    this.x = options.x || 0
    this.y = options.y || 0
    this.radius = options.radius || 20
    this.vx = options.vx
    this.vy = options.vy
    this.style = options.style || 'red'
    if (this.isURL(this.style)) {
      this.image = new Image()
      this.image.src = this.style
    }
    this.rotation = options.rotation || 0
    this.outLineWidth = options.outLineWidth || 1
  }

  isURL(url) {
    return (
      typeof url === 'string' &&
      (url.startsWith('http') || url.startsWith('.') || url.startsWith('/'))
    )
  }

  draw(context) {
    context.save()
    context.translate(this.x, this.y)
    context.rotate(this.rotation)
    context.lineWidth = this.outLineWidth
    context.beginPath()
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true)
    context.closePath()

    if (this.image) {
      context.save()
      context.clip()
      context.drawImage(
        this.image,
        -this.radius + this.outLineWidth / 2,
        -this.radius + this.outLineWidth / 2,
        this.radius * 2 - this.outLineWidth,
        this.radius * 2 - this.outLineWidth
      )
      context.restore()
    } else {
      context.fillStyle = this.style
      context.fill()
    }
    if (this.outLineWidth > 0) {
      context.stroke()
    }

    context.restore()
  }

  getBounds() {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2,
    }
  }

  isPointInBall(x, y) {
    return (
      Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2) <=
      Math.pow(this.radius, 2)
    )
  }
}

export default Ball
