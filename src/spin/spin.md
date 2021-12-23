---
order: 12

group:
  path: /feedback
  title: 反馈
  order: 12
---

## Spin 加载中

用于页面和区块的加载中状态。

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 基础 加载中
 */

import React, { useState } from 'react';
import { Spin } from 'y-components';

const App = () => {
  const [spinning, setSpinning] = useState(true);
  const handleClick = () => {
    console.log('点击按钮');
    setSpinning(!spinning);
  };
  return (
    <div>
      <Spin spinning={spinning}>
        <ul>
          <li> Racing car sprays burning fuel into crowd.</li>
          <li> Australian walks 100km after outback crash</li>
          <li> Los Angeles battles huge wildfires.</li>
        </ul>
      </Spin>
      <div className="w-40 h-6 bg-blue-600 rounded text-white cursor-pointer" onClick={handleClick}>
        点击开关Spin
      </div>
    </div>
  );
};
export default App;
```

```jsx
/**
 * title: 大小 提示内容 外圆环颜色
 * desc:  改变大小 添加提示内容 外圆环颜色
 */

import React from 'react';
import { Spin } from 'y-components';

export default () => (
  <div className="h-20">
    <Spin color={'#DA4F43'} size="lg" tipText={'加载中……'} />
  </div>
);
```

## API

| Name | Description | Type | Default |
| :-- | --- | --- | --- |
| size | 组件大小 | <code color=#D56161 >'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'</code> | `md` |
| color | 转圈区域颜色 | `string` | `#FF4D4F` |
| spinning | 组件显示隐藏 | `boolean` | `true` |
| tipText | 加载内容提示 | `ReactNode` | `-` |
