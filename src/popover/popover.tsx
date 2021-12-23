/*
 * @Author: ZhangYiZong
 * @Date: 2021-12-10 10:52:54
 * @Last Modified by: ZhangYiZong
 * @Last Modified time: 2021-12-10 13:25:35
 */

import { ReactNode, useRef, MutableRefObject, useEffect, useState } from 'react';

// type BadgeTrigger = 'hover' | 'focus' | 'click'
// type BadgePlacement = 'Top' | 'Right' | 'Bottom' | 'Left'

export interface PopoverProps {
  children?: ReactNode;
  /**
   * @description   触发方式
   * @default       'click'
   */
  trigger?: 'hover' | 'focus' | 'click';
  /**
   * @description 气泡窗方位
   * @default     'Top'
   */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * @description 气泡窗标题
   * @default     -
   */
  title?: ReactNode;
  /**
   * @description 气泡窗内容
   * @default     -
   */
  content?: ReactNode;
  /**
   * @description 气泡窗背景颜色
   * @default     'white'
   */
  bgColor?: string;
  /**
   * @description 触发后,是否展示
   * @default     true
   */
  visible?: boolean;
  /**
   * @description 气泡窗内,关闭函数
   * @default     -
   */
  onVisibleChange?: (visible: boolean) => void;
}

const Popover = (props: PopoverProps): React.ReactElement => {
  const { content, bgColor, title, children, trigger, placement } = props;
  bgColor?.trim();
  const popoverRef: MutableRefObject<any> = useRef(null);
  const innerRef: MutableRefObject<any> = useRef(null);

  const [popoverW, setPopoverW] = useState(0);
  const [popoverH, setPopoverH] = useState(0);
  const [popoShow, setPopoShow] = useState(false);

  useEffect(() => {
    document.addEventListener('click', (e: any) => {
      trigger === 'click' && setPopoShow(false);
    });
  });

  useEffect(() => {
    setPopoverW(popoverRef.current.firstChild.offsetWidth);
    setPopoverH(popoverRef.current.firstChild.offsetHeight);
  }, []);

  useEffect(() => {
    if (popoShow) {
      setInnerW(innerRef.current.offsetWidth);
      setInnerH(innerRef.current.offsetHeight);
    }
  }, [popoShow]);
  const [innerW, setInnerW] = useState(0);
  const [innerH, setInnerH] = useState(0);
  const innerX: number = (innerW - popoverW) / 2;
  const innerY: number = (innerH - popoverH) / 2;

  // console.log(innerX, 'innerX');
  // console.log(innerY, 'innerY');
  // console.log(innerW, 'innerW');
  // console.log(innerH, 'innerH');

  const mouseOver = () => {
    setTimeout(() => trigger === 'hover' && setPopoShow(true), 300);
  };
  const mouseOut = () => {
    setTimeout(() => trigger === 'hover' && setPopoShow(false), 300);
  };
  const handleClick = (e: any, type: string) => {
    e.stopPropagation(); // 事件源 阻止冒泡
    trigger === 'click' && setPopoShow(true);
    // console.log(popoShow, '是否')
  };

  // 弹窗 方位
  const popoverSite = {
    top: '-translate-y-full',
    bottom: 'translate-y-full ',
    left: '-translate-x-full ',
    right: 'translate-x-full ',
  };

  // 旋转正方形位置 在弹窗底部宽的中间， 旋转后，宽向左偏移一半，高向下偏移一半
  const squareSite = {
    top: 'bottom-0 transform -translate-x-1/2 translate-y-1/2 left-2/4 ',
    bottom: 'top-0 transform -translate-x-1/2 -translate-y-1/2 left-2/4 ',
    left: 'right-0 transform translate-x-1/2 -translate-y-1/2 top-2/4 ',
    right: 'left-0 transform -translate-x-1/2 -translate-y-1/2 top-2/4 ',
  };
  // 旋转正方形 boxShdow
  const squareShadow = {
    top: '3px 3px 7px #0000001f',
    bottom: '-2px -2px 8px #0000001f',
    left: '2px -2px 7px #0000001f',
    right: '-2px 2px 7px #0000001f',
  };

  return (
    <div className="relative mr-5">
      <div
        ref={popoverRef}
        style={{ boxShadow: `0 0 0 1px #fff`, width: popoverW, height: popoverH }}
        onClick={(e) => handleClick(e, 'active')}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onFocus={() => {
          trigger === 'focus' && setPopoShow(true);
        }}
        onBlur={() => {
          trigger === 'focus' && setPopoShow(false);
        }}
      >
        {children}
      </div>
      {/* 弹窗 这里absolute 其不会覆盖 children 区域 */}
      {/* 弹窗的中轴线 与 事件div的 中轴线 在一条线上， (弹窗宽 - 事件div宽) /2 */}
      {popoShow && (
        <div
          className={`absolute whitespace-nowrap text-sm z-50 transform ${
            popoverSite[placement as string]
          }`}
          ref={innerRef}
          style={{
            boxShadow: `0 2px 8px #d8d8d8`,
            minWidth: 177,
            minHeight: 98,
            top: placement === 'top' ? -14 : placement === 'bottom' ? '' : -innerY,
            left: placement === 'left' ? -10 : placement === 'right' ? '' : -innerX,
            bottom: placement === 'bottom' ? -14 : '',
            right: placement === 'right' ? -10 : '',
            backgroundColor: bgColor,
          }}
          onClick={(e) => handleClick(e, 'unactive')}
          onMouseEnter={mouseOver}
          onMouseLeave={mouseOut}
        >
          <div className="w-full h-8 box-border border-b border-gray-300 px-4 py-1.5 font-medium">
            {title}
          </div>
          <div className="w-full border-gray-300 px-4 py-3">{content}</div>
          {/* 旋转正方形 */}
          <span
            className={`absolute origin-center rotate-45 w-2 h-2 ${
              squareSite[placement as string]
            }`}
            style={{ boxShadow: squareShadow[placement as string], backgroundColor: bgColor }}
          ></span>
        </div>
      )}
    </div>
  );
};

Popover.defaultProps = {
  bgColor: 'white',
  trigger: 'click',
  placement: 'top',
  visible: true,
};
export default Popover;
