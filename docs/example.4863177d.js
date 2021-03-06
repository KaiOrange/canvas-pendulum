parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire
        if (!n && i) return i(t, !0)
        if (o) return o(t, !0)
        if (u && 'string' == typeof t) return u(t)
        var c = new Error("Cannot find module '" + t + "'")
        throw ((c.code = 'MODULE_NOT_FOUND'), c)
      }
      ;(p.resolve = function (r) {
        return e[t][1][r] || r
      }),
        (p.cache = {})
      var l = (r[t] = new f.Module(t))
      e[t][0].call(l.exports, p, l, l.exports, this)
    }
    return r[t].exports
    function p(e) {
      return f(p.resolve(e))
    }
  }
  ;(f.isParcelRequire = !0),
    (f.Module = function (e) {
      ;(this.id = e), (this.bundle = f), (this.exports = {})
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t
        },
        {},
      ]
    })
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c])
    } catch (e) {
      i || (i = e)
    }
  if (t.length) {
    var l = f(t[t.length - 1])
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l
        })
      : n && (this[n] = l)
  }
  if (((parcelRequire = f), i)) throw i
  return f
})(
  {
    FOZT: [
      function (require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0),
          window.requestAnimationFrame ||
            (window.requestAnimationFrame =
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              function (e) {
                return window.setTimeout(e, 17)
              }),
          window.cancelRequestAnimationFrame ||
            (window.cancelRequestAnimationFrame =
              window.cancelAnimationFrame ||
              window.webkitCancelRequestAnimationFrame ||
              window.mozCancelRequestAnimationFrame ||
              window.msCancelRequestAnimationFrame ||
              window.oCancelRequestAnimationFrame ||
              window.clearTimeout)
        var e = {
            captureMouse: function (e) {
              var n = { x: 0, y: 0, event: null },
                t = document.body.scrollLeft,
                o = document.documentElement.scrollLeft,
                i = document.body.scrollTop,
                r = document.documentElement.scrollTop,
                a = e.offsetLeft,
                u = e.offsetTop
              return (
                e.addEventListener(
                  'mousemove',
                  function (e) {
                    var m, s
                    e.pageX || e.pageY
                      ? ((m = e.pageX), (s = e.pageY))
                      : ((m = e.clientX + t + o), (s = e.clientY + i + r)),
                      (m -= a),
                      (s -= u),
                      (n.x = m),
                      (n.y = s),
                      (n.event = e)
                  },
                  !1
                ),
                n
              )
            },
            parseColor: function (e, n) {
              return !0 === n
                ? 'number' == typeof e
                  ? 0 | e
                  : ('string' == typeof e && '#' === e[0] && (e = e.slice(1)),
                    window.parseInt(e, 16))
                : ('number' == typeof e &&
                    (e = '#' + ('00000' + (0 | e).toString(16)).substr(-6)),
                  e)
            },
            colorToRGB: function (e, n) {
              'string' == typeof e &&
                '#' === e[0] &&
                (e = window.parseInt(e.slice(1), 16))
              var t = (e >> 16) & 255,
                o = (e >> 8) & 255,
                i = 255 & e,
                r = (n = void 0 === n ? 1 : n) < 0 ? 0 : n > 1 ? 1 : n
              return 1 === r
                ? 'rgb(' + t + ',' + o + ',' + i + ')'
                : 'rgba(' + t + ',' + o + ',' + i + ',' + r + ')'
            },
            containsPoint: function (e, n, t) {
              return !(
                n < e.x ||
                n > e.x + e.width ||
                t < e.y ||
                t > e.y + e.height
              )
            },
            intersects: function (e, n) {
              return !(
                e.x + e.width < n.x ||
                n.x + n.width < e.x ||
                e.y + e.height < n.y ||
                n.y + n.height < e.y
              )
            },
          },
          n = e
        exports.default = n
      },
      {},
    ],
    OMFo: [
      function (require, module, exports) {
        'use strict'
        var e,
          t = 'object' == typeof Reflect ? Reflect : null,
          n =
            t && 'function' == typeof t.apply
              ? t.apply
              : function (e, t, n) {
                  return Function.prototype.apply.call(e, t, n)
                }
        function r(e) {
          console && console.warn && console.warn(e)
        }
        e =
          t && 'function' == typeof t.ownKeys
            ? t.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                )
              }
            : function (e) {
                return Object.getOwnPropertyNames(e)
              }
        var i =
          Number.isNaN ||
          function (e) {
            return e != e
          }
        function o() {
          o.init.call(this)
        }
        ;(module.exports = o),
          (o.EventEmitter = o),
          (o.prototype._events = void 0),
          (o.prototype._eventsCount = 0),
          (o.prototype._maxListeners = void 0)
        var s = 10
        function u(e) {
          if ('function' != typeof e)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof e
            )
        }
        function f(e) {
          return void 0 === e._maxListeners
            ? o.defaultMaxListeners
            : e._maxListeners
        }
        function v(e, t, n, i) {
          var o, s, v
          if (
            (u(n),
            void 0 === (s = e._events)
              ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
              : (void 0 !== s.newListener &&
                  (e.emit('newListener', t, n.listener ? n.listener : n),
                  (s = e._events)),
                (v = s[t])),
            void 0 === v)
          )
            (v = s[t] = n), ++e._eventsCount
          else if (
            ('function' == typeof v
              ? (v = s[t] = i ? [n, v] : [v, n])
              : i
              ? v.unshift(n)
              : v.push(n),
            (o = f(e)) > 0 && v.length > o && !v.warned)
          ) {
            v.warned = !0
            var l = new Error(
              'Possible EventEmitter memory leak detected. ' +
                v.length +
                ' ' +
                String(t) +
                ' listeners added. Use emitter.setMaxListeners() to increase limit'
            )
            ;(l.name = 'MaxListenersExceededWarning'),
              (l.emitter = e),
              (l.type = t),
              (l.count = v.length),
              r(l)
          }
          return e
        }
        function l() {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length
                ? this.listener.call(this.target)
                : this.listener.apply(this.target, arguments)
            )
        }
        function a(e, t, n) {
          var r = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: t,
              listener: n,
            },
            i = l.bind(r)
          return (i.listener = n), (r.wrapFn = i), i
        }
        function h(e, t, n) {
          var r = e._events
          if (void 0 === r) return []
          var i = r[t]
          return void 0 === i
            ? []
            : 'function' == typeof i
            ? n
              ? [i.listener || i]
              : [i]
            : n
            ? d(i)
            : c(i, i.length)
        }
        function p(e) {
          var t = this._events
          if (void 0 !== t) {
            var n = t[e]
            if ('function' == typeof n) return 1
            if (void 0 !== n) return n.length
          }
          return 0
        }
        function c(e, t) {
          for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r]
          return n
        }
        function y(e, t) {
          for (; t + 1 < e.length; t++) e[t] = e[t + 1]
          e.pop()
        }
        function d(e) {
          for (var t = new Array(e.length), n = 0; n < t.length; ++n)
            t[n] = e[n].listener || e[n]
          return t
        }
        Object.defineProperty(o, 'defaultMaxListeners', {
          enumerable: !0,
          get: function () {
            return s
          },
          set: function (e) {
            if ('number' != typeof e || e < 0 || i(e))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  e +
                  '.'
              )
            s = e
          },
        }),
          (o.init = function () {
            ;(void 0 !== this._events &&
              this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0)
          }),
          (o.prototype.setMaxListeners = function (e) {
            if ('number' != typeof e || e < 0 || i(e))
              throw new RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  e +
                  '.'
              )
            return (this._maxListeners = e), this
          }),
          (o.prototype.getMaxListeners = function () {
            return f(this)
          }),
          (o.prototype.emit = function (e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t.push(arguments[r])
            var i = 'error' === e,
              o = this._events
            if (void 0 !== o) i = i && void 0 === o.error
            else if (!i) return !1
            if (i) {
              var s
              if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s
              var u = new Error(
                'Unhandled error.' + (s ? ' (' + s.message + ')' : '')
              )
              throw ((u.context = s), u)
            }
            var f = o[e]
            if (void 0 === f) return !1
            if ('function' == typeof f) n(f, this, t)
            else {
              var v = f.length,
                l = c(f, v)
              for (r = 0; r < v; ++r) n(l[r], this, t)
            }
            return !0
          }),
          (o.prototype.addListener = function (e, t) {
            return v(this, e, t, !1)
          }),
          (o.prototype.on = o.prototype.addListener),
          (o.prototype.prependListener = function (e, t) {
            return v(this, e, t, !0)
          }),
          (o.prototype.once = function (e, t) {
            return u(t), this.on(e, a(this, e, t)), this
          }),
          (o.prototype.prependOnceListener = function (e, t) {
            return u(t), this.prependListener(e, a(this, e, t)), this
          }),
          (o.prototype.removeListener = function (e, t) {
            var n, r, i, o, s
            if ((u(t), void 0 === (r = this._events))) return this
            if (void 0 === (n = r[e])) return this
            if (n === t || n.listener === t)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete r[e],
                  r.removeListener &&
                    this.emit('removeListener', e, n.listener || t))
            else if ('function' != typeof n) {
              for (i = -1, o = n.length - 1; o >= 0; o--)
                if (n[o] === t || n[o].listener === t) {
                  ;(s = n[o].listener), (i = o)
                  break
                }
              if (i < 0) return this
              0 === i ? n.shift() : y(n, i),
                1 === n.length && (r[e] = n[0]),
                void 0 !== r.removeListener &&
                  this.emit('removeListener', e, s || t)
            }
            return this
          }),
          (o.prototype.off = o.prototype.removeListener),
          (o.prototype.removeAllListeners = function (e) {
            var t, n, r
            if (void 0 === (n = this._events)) return this
            if (void 0 === n.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== n[e] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete n[e]),
                this
              )
            if (0 === arguments.length) {
              var i,
                o = Object.keys(n)
              for (r = 0; r < o.length; ++r)
                'removeListener' !== (i = o[r]) && this.removeAllListeners(i)
              return (
                this.removeAllListeners('removeListener'),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              )
            }
            if ('function' == typeof (t = n[e])) this.removeListener(e, t)
            else if (void 0 !== t)
              for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r])
            return this
          }),
          (o.prototype.listeners = function (e) {
            return h(this, e, !0)
          }),
          (o.prototype.rawListeners = function (e) {
            return h(this, e, !1)
          }),
          (o.listenerCount = function (e, t) {
            return 'function' == typeof e.listenerCount
              ? e.listenerCount(t)
              : p.call(e, t)
          }),
          (o.prototype.listenerCount = p),
          (o.prototype.eventNames = function () {
            return this._eventsCount > 0 ? e(this._events) : []
          })
      },
      {},
    ],
    VOYe: [
      function (require, module, exports) {
        'use strict'
        function t(t, i) {
          if (!(t instanceof i))
            throw new TypeError('Cannot call a class as a function')
        }
        function i(t, i) {
          for (var s = 0; s < i.length; s++) {
            var e = i[s]
            ;(e.enumerable = e.enumerable || !1),
              (e.configurable = !0),
              'value' in e && (e.writable = !0),
              Object.defineProperty(t, e.key, e)
          }
        }
        function s(t, s, e) {
          return s && i(t.prototype, s), e && i(t, e), t
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0)
        var e = (function () {
            function i() {
              var s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              t(this, i),
                (this.x = s.x || 0),
                (this.y = s.y || 0),
                (this.radius = s.radius || 20),
                (this.vx = s.vx),
                (this.vy = s.vy),
                (this.style = s.style || 'red'),
                this.isURL(this.style) &&
                  ((this.image = new Image()), (this.image.src = this.style)),
                (this.rotation = s.rotation || 0),
                (this.outLineWidth = s.outLineWidth || 1)
            }
            return (
              s(i, [
                {
                  key: 'isURL',
                  value: function (t) {
                    return (
                      'string' == typeof t &&
                      (t.startsWith('http') ||
                        t.startsWith('.') ||
                        t.startsWith('/'))
                    )
                  },
                },
                {
                  key: 'draw',
                  value: function (t) {
                    t.save(),
                      t.translate(this.x, this.y),
                      t.rotate(this.rotation),
                      (t.lineWidth = this.outLineWidth),
                      t.beginPath(),
                      t.arc(0, 0, this.radius, 0, 2 * Math.PI, !0),
                      t.closePath(),
                      this.image
                        ? (t.save(),
                          t.clip(),
                          t.drawImage(
                            this.image,
                            -this.radius + this.outLineWidth / 2,
                            -this.radius + this.outLineWidth / 2,
                            2 * this.radius - this.outLineWidth,
                            2 * this.radius - this.outLineWidth
                          ),
                          t.restore())
                        : ((t.fillStyle = this.style), t.fill()),
                      this.outLineWidth > 0 && t.stroke(),
                      t.restore()
                  },
                },
                {
                  key: 'getBounds',
                  value: function () {
                    return {
                      x: this.x - this.radius,
                      y: this.y - this.radius,
                      width: 2 * this.radius,
                      height: 2 * this.radius,
                    }
                  },
                },
                {
                  key: 'isPointInBall',
                  value: function (t, i) {
                    return (
                      Math.pow(t - this.x, 2) + Math.pow(i - this.y, 2) <=
                      Math.pow(this.radius, 2)
                    )
                  },
                },
              ]),
              i
            )
          })(),
          h = e
        exports.default = h
      },
      {},
    ],
    Focm: [
      function (require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0)
        var t = i(require('./utils')),
          e = require('events'),
          n = i(require('./ball'))
        function i(t) {
          return t && t.__esModule ? t : { default: t }
        }
        function r(t) {
          return (r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                })(t)
        }
        function u(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        function a(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i)
          }
        }
        function l(t, e, n) {
          return e && a(t.prototype, e), n && a(t, n), t
        }
        function s(t) {
          return function () {
            var e,
              n = d(t)
            if (h()) {
              var i = d(this).constructor
              e = Reflect.construct(n, arguments, i)
            } else e = n.apply(this, arguments)
            return o(this, e)
          }
        }
        function o(t, e) {
          return !e || ('object' !== r(e) && 'function' != typeof e) ? c(t) : e
        }
        function c(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return t
        }
        function h() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            )
          } catch (t) {
            return !1
          }
        }
        function d(t) {
          return (d = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              })(t)
        }
        function f(t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && p(t, e)
        }
        function p(t, e) {
          return (p =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            })(t, e)
        }
        var m = (function (i) {
            f(a, e.EventEmitter)
            var r = s(a)
            function a() {
              var e,
                i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
              if (
                (u(this, a),
                (i = i || {}),
                ((e = r.call(this)).el = i.el),
                'string' == typeof e.el &&
                  (e.el = document.querySelector(e.el)),
                e.el)
              )
                if ('CANVAS' === e.el.tagName) e.canvas = e.el
                else {
                  if (!e.el.appendChild) throw new Error('参数el错误')
                  ;(e.canvas = document.createElement('canvas')),
                    e.el.appendChild(e.canvas)
                }
              else
                (e.canvas = document.createElement('canvas')),
                  document.body.appendChild(e.canvas)
              ;(e.cWidth = i.width || e.canvas.width || 300),
                (e.cHeight = i.height || e.canvas.height || 150),
                e.canvas.width !== e.cWidth && (e.canvas.width = e.cWidth),
                e.canvas.height !== e.cHeight && (e.canvas.height = e.cHeight),
                (e.context = e.canvas.getContext('2d')),
                (e.T = i.T || 1e3),
                (e.ballNum = i.ballNum || 1),
                (e.ballWidth = i.ballWidth || 40),
                (e.maxAngle = i.maxAngle || 20),
                (e.outLineWidth = Math.min(i.outLineWidth || 1, e.ballWidth)),
                (e.initSpeed = (2 * Math.PI) / e.T),
                (e.intX =
                  e.cWidth / 2 -
                  (e.ballNum / 2) * (e.ballWidth + e.outLineWidth)),
                (e.maxRadian = (Math.PI * (e.maxAngle || 10)) / 180),
                (e.startTime = +new Date()),
                (e.time = e._getTimer())
              var l = i.lineWidth || (90 * (e.cHeight - e.ballWidth)) / 100,
                s = i.ballStyles || 'red'
              ;(e.pendulums = new Array(e.ballNum).fill(0).map(function (t, i) {
                return {
                  ball: new n.default({
                    radius: e.ballWidth / 2,
                    style: Array.isArray(s) ? s[i] || 'red' : s,
                    outLineWidth: e.outLineWidth,
                  }),
                  radius: e.ballWidth / 2,
                  fixedPoint: [
                    e.intX +
                      i * (e.ballWidth + e.outLineWidth) +
                      e.ballWidth / 2,
                    0,
                  ],
                  line: l,
                  spend: 0 === i ? e.initSpeed : 0,
                  w: 0,
                }
              })),
                (e._status = 'pause')
              var o = t.default.captureMouse(e.canvas)
              return (
                e.canvas.addEventListener('click', function (t) {
                  e.pendulums.some(function (t, n) {
                    var i = t.ball.isPointInBall(o.x, o.y)
                    return (
                      i &&
                        e.emit('ballClick', {
                          spend: t.spend,
                          index: n,
                          x: o.x,
                          y: o.y,
                        }),
                      i
                    )
                  })
                }),
                e
              )
            }
            return (
              l(a, [
                {
                  key: '_getTimer',
                  value: function () {
                    return +new Date() - this.startTime
                  },
                },
                {
                  key: '_checkConflict',
                  value: function (t, e) {
                    return (
                      !(!t || !e) &&
                      Math.pow(t.radius + e.radius, 2) >
                        Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)
                    )
                  },
                },
                {
                  key: 'start',
                  value: function () {
                    return (
                      'running' !== this._status &&
                        ((this._status = 'running'), this._run()),
                      this
                    )
                  },
                },
                {
                  key: 'stop',
                  value: function () {
                    return (this._status = 'pause'), this
                  },
                },
                {
                  key: '_run',
                  value: function () {
                    var t = this
                    'running' === this._status &&
                      window.requestAnimationFrame(
                        this._run.bind(this),
                        this.canvas
                      ),
                      this.context.clearRect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height
                      )
                    var e = this._getTimer() - this.time
                    if (
                      ((this.time = this._getTimer()),
                      this.pendulums.forEach(function (n) {
                        n.w += n.spend * e
                        var i = Math.sin(n.w) * t.maxRadian
                        ;(n.ball.x =
                          n.fixedPoint[0] - (n.line + n.radius) * Math.sin(i)),
                          (n.ball.y =
                            n.fixedPoint[1] +
                            (n.line + n.radius) * Math.cos(i)),
                          t.context.save(),
                          (t.context.lineWidth = 1),
                          t.context.beginPath(),
                          t.context.moveTo(
                            n.fixedPoint[0] || 9,
                            n.fixedPoint[1] || 0
                          ),
                          t.context.lineTo(
                            n.fixedPoint[0] - n.line * Math.sin(i),
                            n.fixedPoint[1] + n.line * Math.cos(i)
                          ),
                          t.context.stroke(),
                          t.context.restore(),
                          0 !== i && (n.ball.rotation = i),
                          n.ball.draw(t.context)
                      }),
                      this.pendulums.length >= 2 &&
                        (this._checkConflict(
                          this.pendulums[0].ball,
                          this.pendulums[1].ball
                        ) ||
                          this._checkConflict(
                            this.pendulums[this.pendulums.length - 1].ball,
                            this.pendulums[this.pendulums.length - 2].ball
                          )))
                    ) {
                      this.emit('ping', {
                        isFrist: this.pendulums[0].spend > 0,
                      })
                      var n = this.pendulums[0].spend,
                        i = this.pendulums[0].w
                      ;(this.pendulums[0].spend = this.pendulums[
                        this.pendulums.length - 1
                      ].spend),
                        (this.pendulums[0].w = this.pendulums[
                          this.pendulums.length - 1
                        ].w),
                        (this.pendulums[this.pendulums.length - 1].spend = n),
                        (this.pendulums[this.pendulums.length - 1].w = i)
                    }
                  },
                },
              ]),
              a
            )
          })(),
          b = m
        exports.default = b
      },
      { './utils': 'FOZT', events: 'OMFo', './ball': 'VOYe' },
    ],
    Zdfz: [
      function (require, module, exports) {
        'use strict'
        var n = e(require('../src/index'))
        function e(n) {
          return n && n.__esModule ? n : { default: n }
        }
        window.onload = function () {
          new n.default({
            el: document.getElementById('canvas'),
            ballNum: 4,
            ballStyles: [
              'https://www.kai666666.com/images/avatar.png',
              '#00ff00',
              'orange',
              'transparent',
            ],
          })
            .start()
            .on('ping', function (n) {
              console.log('碰撞了')
            })
            .on('ballClick', function (n) {
              console.log('小球被点击')
            })
        }
      },
      { '../src/index': 'Focm' },
    ],
  },
  {},
  ['Zdfz'],
  null
)
//# sourceMappingURL=/example.4863177d.js.map
