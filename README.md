# canvas-pendulum

基于`canvas`的单摆组件。demo:[https://kaiorange.github.io/canvas-pendulum](https://kaiorange.github.io/canvas-pendulum)

## 安装 ##

```shell
npm install canvas-pendulum
```


## 使用 ##

```JavaScript
import CanvasPendulum from 'canvas-pendulum'

new CanvasPendulum({
  el: document.getElementById('canvas'),
  ballNum: 4,
  ballStyles: ['https://www.kai666666.top/images/avatar.png','#00ff00','orange','transparent']
}).start().on('ping',(e)=>{ // 小球碰撞事件
  // let { isFrist } = e; // 是否第一个小球被碰撞了 false为最后一个小球碰撞了
  console.log('碰撞了');
}).on('ballClick',(e)=>{ // 小球被点击事件
  // let { spend,index, x, y } = e; // spend不等于0表示小球在运动
  console.log('小球被点击');
});
```

## 参数 ##

| 参数        | 描述           | 类型         | 默认值                        |
| :----:     | :----:        | :----:       | :----:                       |
| el         | DOM元素        | string       | null,(即追加到document.body上) |
| ballNum    | 小球个数        | number       | 1                            |
| ballStyles | 小球样式        | string/attay | 'red'                        |
| width      | canvas宽度     | number       | 300                          |
| height     | canvas高度     | number       | 150                          |
| T          | 小球周期（毫秒） | number       | 1000                         |
| maxAngle   | 单摆最大角度    | number        | 20                          |
| lineWidth  | 线的长度        | number       | (canvas高度-小球直径)*90%      |

## 事件 ##

| 事件名称        | 描述           |
| :----:         | :----:        |
| ping           | 小球碰撞事件    |
| ballClick      | 小球被点击事件  |
