import utils from './utils'
import { EventEmitter } from 'events'
import Ball from './ball'

class CanvasPendulum extends EventEmitter {
  constructor(options = {}) {
    super()
    options = options || {}
    this.el = options.el
    if (typeof this.el === 'string') {
      this.el = document.querySelector(this.el)
    }
    if (this.el) {
      if (this.el.tagName === 'CANVAS') {
        this.canvas = this.el
      } else if (this.el.appendChild) {
        this.canvas = document.createElement('canvas')
        this.el.appendChild(this.canvas)
      } else {
        throw new Error('参数el错误')
      }
    } else {
      this.canvas = document.createElement('canvas')
      document.body.appendChild(this.canvas)
    }

    this.cWidth = options.width || this.canvas.width || 300
    this.cHeight = options.height || this.canvas.height || 150
    if (this.canvas.width !== this.cWidth) {
      this.canvas.width = this.cWidth
    }
    if (this.canvas.height !== this.cHeight) {
      this.canvas.height = this.cHeight
    }
    this.context = this.canvas.getContext('2d')

    this.T = options.T || 1000 // 周期
    this.ballNum = options.ballNum || 1
    this.ballWidth = options.ballWidth || 40
    this.maxAngle = options.maxAngle || 20 // 最大的角度
    this.outLineWidth = Math.min(options.outLineWidth || 1, this.ballWidth) // 边框大小
    this.initSpeed = (2 * Math.PI) / this.T
    this.intX =
      this.cWidth / 2 -
      (this.ballNum / 2) * (this.ballWidth + this.outLineWidth)
    this.maxRadian = (Math.PI * (this.maxAngle || 10)) / 180

    this.startTime = +new Date()
    this.time = this._getTimer()
    let lineWidth =
      options.lineWidth || ((this.cHeight - this.ballWidth) * 90) / 100

    let defaultBallStyle = 'red'
    let ballStyles = options.ballStyles || defaultBallStyle

    this.pendulums = new Array(this.ballNum).fill(0).map((item, index) => ({
      ball: new Ball({
        radius: this.ballWidth / 2,
        style: Array.isArray(ballStyles)
          ? ballStyles[index] || defaultBallStyle
          : ballStyles,
        outLineWidth: this.outLineWidth,
      }),
      radius: this.ballWidth / 2,
      fixedPoint: [
        this.intX +
          index * (this.ballWidth + this.outLineWidth) +
          this.ballWidth / 2,
        0,
      ],
      line: lineWidth,
      spend: index === 0 ? this.initSpeed : 0,
      w: 0,
    }))

    this._status = 'pause'

    let mouse = utils.captureMouse(this.canvas)
    this.canvas.addEventListener('click', (e) => {
      this.pendulums.some((item, index) => {
        let isInBall = item.ball.isPointInBall(mouse.x, mouse.y)
        if (isInBall) {
          this.emit('ballClick', {
            spend: item.spend,
            index: index,
            x: mouse.x,
            y: mouse.y,
          })
        }
        return isInBall
      })
    })
  }

  _getTimer() {
    return +new Date() - this.startTime
  }

  _checkConflict(ball1, ball2) {
    if (!ball1 || !ball2) {
      return false
    }
    return (
      Math.pow(ball1.radius + ball2.radius, 2) >
      Math.pow(ball2.x - ball1.x, 2) + Math.pow(ball2.y - ball1.y, 2)
    )
  }

  start() {
    if (this._status !== 'running') {
      this._status = 'running'
      this._run()
    }
    return this
  }

  stop() {
    this._status = 'pause'
    return this
  }

  _run() {
    if (this._status === 'running') {
      window.requestAnimationFrame(this._run.bind(this), this.canvas)
    }
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    var elspsed = this._getTimer() - this.time
    this.time = this._getTimer()

    // 绘制
    this.pendulums.forEach((item) => {
      // item.w+=item.spend;
      item.w += item.spend * elspsed
      var angle = Math.sin(item.w) * this.maxRadian
      item.ball.x =
        item.fixedPoint[0] - (item.line + item.radius) * Math.sin(angle)
      item.ball.y =
        item.fixedPoint[1] + (item.line + item.radius) * Math.cos(angle)

      // 划线
      this.context.save()
      this.context.lineWidth = 1
      this.context.beginPath()
      this.context.moveTo(item.fixedPoint[0] || 9, item.fixedPoint[1] || 0)
      this.context.lineTo(
        item.fixedPoint[0] - item.line * Math.sin(angle),
        item.fixedPoint[1] + item.line * Math.cos(angle)
      )
      this.context.stroke()
      this.context.restore()

      if (angle !== 0) {
        item.ball.rotation = angle
      }

      item.ball.draw(this.context)
    })

    // 碰撞检测
    if (
      this.pendulums.length >= 2 &&
      (this._checkConflict(this.pendulums[0].ball, this.pendulums[1].ball) ||
        this._checkConflict(
          this.pendulums[this.pendulums.length - 1].ball,
          this.pendulums[this.pendulums.length - 2].ball
        ))
    ) {
      this.emit('ping', {
        isFrist: this.pendulums[0].spend > 0,
      })
      var spend = this.pendulums[0].spend
      var w = this.pendulums[0].w
      this.pendulums[0].spend = this.pendulums[this.pendulums.length - 1].spend
      this.pendulums[0].w = this.pendulums[this.pendulums.length - 1].w
      this.pendulums[this.pendulums.length - 1].spend = spend
      this.pendulums[this.pendulums.length - 1].w = w
    }
  }
}

export default CanvasPendulum
