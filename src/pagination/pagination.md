---
order: 1

group:
  path: /navigation
  title: 导航
  order: 1
---

## Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 基础分页
 */

import React from 'react';
import { Pagination } from '@a1yyss/y-comps';

export default () => <Pagination total={50} />;
```

```jsx
/**
 * title: 跳转
 * desc: 快速跳转到某一页

 */

import React from 'react';
import { Pagination } from '@a1yyss/y-comps';

export default () => <Pagination showQuickJumper total={500} />;
```

<API src="./pagination.tsx"></API>
