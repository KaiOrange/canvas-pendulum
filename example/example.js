import CanvasPendulum from '../src/index'

window.onload = function () {
  new CanvasPendulum({
    el: document.getElementById('canvas'),
    ballNum: 4,
    ballStyles: [
      'https://www.kai666666.top/images/avatar.png',
      '#00ff00',
      'orange',
      'transparent',
    ],
  })
    .start()
    .on('ping', (e) => {
      // 小球碰撞事件
      // let { isFrist } = e; // 是否第一个小球被碰撞了 false为最后一个小球碰撞了
      console.log('碰撞了')
    })
    .on('ballClick', (e) => {
      // 小球被点击事件
      // let { spend,index, x, y } = e; // spend不等于0表示小球在运动
      console.log('小球被点击')
    })
}
