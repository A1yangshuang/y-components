---
order: 1

group:
  path: /dataPresentation
  title: 数据展示
  order: 1
---

## Tooltip 文字提示

简单的文字提示气泡框

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的用法
 */

import React from 'react';
import { Tooltip } from '@a1yyss/y-comps';

export default () => (
  <div>
    <Tooltip placement="top">hover left</Tooltip>
    <Tooltip placement="left">hover left</Tooltip>
    <Tooltip placement="right">hover righ</Tooltip>
    <Tooltip placement="bottom">hover bottom</Tooltip>
  </div>
);
```

<API src="./index.tsx"></API>
