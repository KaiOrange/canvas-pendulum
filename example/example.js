import CanvasPendulum from '../src/index'

window.onload = function () {
  var canvas = document.getElementById('canvas');
  new CanvasPendulum({
    el: canvas,
    ballNum: 4,
    ballStyles: ['https://www.kai666666.top/images/avatar.png','#00ff00','orange','transparent']
  }).start();
};
