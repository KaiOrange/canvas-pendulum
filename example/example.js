import CanvasPendulum from '../src/index'

window.onload = function () {
  var canvas = document.getElementById('canvas');
  new CanvasPendulum({
    el: canvas,
    ballNum: 4,
  }).start();
};
