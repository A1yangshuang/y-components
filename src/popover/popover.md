---
order: 14

group:
  path: /dataDisplay
  title: 数据展示
  order: 14
---

## Popover 气泡窗

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 基础 气泡窗
 */

import React from 'react';
import { Popover } from 'y-components';

export default () => (
  <div className="flex items-center justify-center">
    <Popover title="Title">
      <div className="bg-blue-600 box-border w-20 h-8 border rounded text-white text-center leading-8 cursor-pointer">
        Click
      </div>
    </Popover>
  </div>
);
```

```jsx
/**
 * title: 触发方式 、方位
 * desc:  根据触发类型 控制气泡窗的显示
 */

import React from 'react';
import { Popover } from 'y-components';

export default () => (
  <div className="flex items-center justify-center">
    <Popover trigger="hover" title="Title" placement="right">
      <div className="bg-blue-600 box-border border w-20 h-8 rounded text-white text-center leading-8 cursor-pointer">
        Hover
      </div>
    </Popover>
  </div>
);
```

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| trigger | 触发方式 | <code color="#D56561">'hover' \| 'focus' \| 'click'</code> | `click` |
| placement | 气泡窗方位 | <code color="#D56561">'top' \| 'right' \| 'bottom' \| 'left'</code> | `Top` |
| title | 气泡窗标题 | `ReactNode` | `-` |
| content | 气泡窗内容 | `ReactNode` | `-` |
| bgColor | 气泡窗背景颜色 | `string` | `white` |
| visible | 触发后,是否展示 | `boolean` | `true` |
| onVisibleChange | 气泡窗内,关闭函数 | `(visible: boolean) => void` | `-` |
