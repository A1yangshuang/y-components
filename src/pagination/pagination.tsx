/*
 * @Author: YangShuang
 * @Date: 2021-12-07 10:52:54
 * @Last Modified by: YangShuang
 * @Last Modified time: 2021-12-17 11:33:46
 */

import { useState, useEffect } from 'react';
import '../style/index.less';

export interface PaginationProps {
  /**
   * 属性描述
   * @description   当前页
   * @default         1
   */
  current?: number;
  /**
   * @description 数据总数
   * @default     0
   */
  total?: number; // 总条数
  /**
   * @description 默认的每页条数
   * @default     10
   */
  defaultPageSize?: number; // 每页显示多少
  /**
   * @description 展示页码个数
   * @default     5
   */
  pageGroup?: number; // 默认展示的页码个数
  /**
   * @description 显示数据总量
   * @default     -
   */
  showTotal?: (tatol: number) => string;
  /**
   * @description 是否可以快速跳转至某页
   * @default     false
   */
  showQuickJumper?: boolean;
  /**
   * @description  current 或 pageSize 改变的回调，参数是改变后的页码及每页条数
   * @default     -
   */
  onChange?: (current: number, defaultPageSize: number) => void;
}

const Pagination = (props: PaginationProps): React.ReactElement => {
  const {
    total = 0,
    defaultPageSize = 10,
    pageGroup = 5,
    showTotal,
    showQuickJumper = false,
    current = 2,
    onChange,
  } = props;

  const totalPage = Math.ceil(total / defaultPageSize); // 一共显示多少页 20

  // 样式
  const classes = 'text-xs w-6 h-6 border mx-2 flex justify-center items-center rounded-md p-4';

  const [currentPage, setCurrentPage] = useState(current);
  const [jumpPage, setJumpPage] = useState('');

  const [list, setList] = useState<(string | number)[]>([]);

  const init = (currentPage: number): any => {
    let l: (string | number)[] = [];
    // 当前页小于总页数5
    if (totalPage <= 9) {
      return Array.from(new Array(totalPage).keys()).map((i) => i + 1);
    } else if (currentPage <= 4) {
      // 当前页小于4 后面 ... 10
      l = Array.from(new Array(pageGroup).keys()).map((i) => i + 1);

      if (currentPage === 4) {
        l = Array.from(new Array(currentPage + 2).keys()).map((i) => i + 1);
      }
      l.push('...', totalPage);
      return l;
    } else if (totalPage - currentPage <= 3) {
      // 后几页 前面加 1 ...
      l = [1, '...'];
      const total = totalPage - currentPage === 3 ? totalPage - 5 : totalPage - 4;
      for (let i = total; i <= totalPage; i++) {
        if (i - Number(l[0]) !== 1) {
          l.push(i);
        }
      }
      return l;
    } else if (currentPage <= 3) {
    } else {
      l = [1, '...'];
      for (let i = currentPage - 2; i < currentPage + 3; i++) {
        if (i - Number(l[0]) !== 1) {
          l.push(i);
        }
      }
      l.push('...', totalPage);
      return l;
    }
    onChange &&
      onChange(
        currentPage,
        currentPage <= totalPage - 1 ? defaultPageSize : totalPage % defaultPageSize,
      );
  };

  const clickFive = (index: number) => {
    let currentP = 0;

    if (index === 1) {
      currentP = currentPage - 5 <= 0 ? 1 : currentPage - 5;
    } else {
      currentP = currentPage + 5 >= totalPage ? totalPage : currentPage + 5;
    }
    setCurrentPage(currentP);
    setList(init(currentP));
  };

  // 第一次渲染
  useEffect(() => {
    setList(init(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = (type: string) => {
    if (type === 'pre' && currentPage - 1 >= 1) {
      setCurrentPage(currentPage - 1);
      setList(init(currentPage - 1));
    }

    if (type === 'next' && currentPage + 1 <= totalPage) {
      setCurrentPage(currentPage + 1);
      setList(init(currentPage + 1));
    }
  };

  const clickPage = (currentPage: string | number) => {
    if (typeof currentPage === 'number') {
      setCurrentPage(currentPage);
      setList(init(currentPage));
    }
  };

  const quickJumperBlur = () => {
    let num = Number(jumpPage);
    if (typeof num === 'number') {
      if (num <= 0) {
        num = 1;
      }
      if (num > totalPage) {
        num = totalPage;
      }
      setCurrentPage(num);
      setList(init(num));
    }
    setJumpPage('');
  };

  console.log('list', list, currentPage);

  return (
    <div className="flex items-center">
      {showTotal && <div className="text-sm">{showTotal(total)}</div>}

      <div
        className={`${classes} ${currentPage !== 1 && 'cursor-pointer'}`}
        onClick={() => clickHandler('pre')}
      >
        {'<'}
      </div>
      <ul className="flex">
        {list.map((i: string | number, index: number) => {
          if (i === currentPage) {
            return (
              <li
                key={i}
                onClick={() => clickPage(i)}
                className={`border-primary cursor-pointer ${classes}`}
              >
                <span>{i}</span>
              </li>
            );
          } else if (i === '...') {
            return (
              <li
                key={'...' + index}
                onClick={() => clickFive(index)}
                className={'text-xs cursor-pointer w-6 h-6 mx-2 flex justify-center items-center'}
              >
                <span>···</span>
              </li>
            );
          } else {
            return (
              <li
                key={i}
                onClick={() => clickPage(Number(i))}
                className={`${classes} cursor-pointer`}
              >
                <span>{Number(i)}</span>
              </li>
            );
          }
        })}
      </ul>
      <div
        className={`${classes} ${currentPage !== totalPage && 'cursor-pointer'}`}
        onClick={() => clickHandler('next')}
      >
        {'>'}
      </div>
      {showQuickJumper && (
        <div className="text-sm ml-1">
          跳至
          <input
            value={jumpPage}
            onChange={(val: any) => {
              setJumpPage(val.target.value);
            }}
            onBlur={quickJumperBlur}
            className="text-center p-1.5 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-10 mx-2"
          />
          页
        </div>
      )}
    </div>
  );
};
export default Pagination;
