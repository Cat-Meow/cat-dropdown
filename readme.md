# React Salt - Dropdown

菜单项可以用来表明一组动作，当界面上的操作命令过多时，可以用以收纳元素

菜单项目前提供三种封装好的元素：Item\Divider\Header

## API

Props属性如下

props | 说明 | 类型 | 默认值 | 备选 
------------ |--------------- | ------------- | ------------- | -------------
myStyle | 风格 | string | default | 参考button
mySize | 大小 | string | medium | 参考button
title | 默认显示内容 | string | dropdown |
trigger | 触发方式 | string | hover | hover\click
liveKey | 选中值 | string | |
eventKey | 子元素的key | string | |
noCaret | 是否显示图标 | boolean | false |
dropip | 向上 | boolean | false |
onSelect | 选中事件 | function | |


