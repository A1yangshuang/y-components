/*
 * @Author: ZhangYiZong
 * @Date: 2021-12-10 10:52:54
 * @Last Modified by: ZhangYiZong
 * @Last Modified time: 2021-12-10 13:25:35
 */

import { ReactNode } from 'react';
import classNames from 'classnames';
export interface SpinnerProps {
  className: string;
  /**
   * @description 组件大小
   * @default     -
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * @description 组件显示隐藏
   * @default     true
   */
  spinning?: boolean;
  /**
   * @description 转圈区域颜色
   * @default     -
   */
  color?: string;
  /**
   * @description 加载内容提示
   * @default     -
   */
  tipText?: ReactNode;
  /**
   * @description 子元素
   * @default     -
   */
  children?: ReactNode;
}

const Spin = (props: SpinnerProps): React.ReactElement => {
  const { children, size, color, tipText, spinning, className } = props;
  // 默认有btn，根据属性生成类名。可以查classnames的文档

  const classes = classNames(className, {
    'text-2xl': size === 'md',
    'text-xs': size === 'xs',
    'text-base': size === 'sm',
    'text-3xl': size === 'lg',
    'text-4xl': size === 'xl',
  });
  // stroke 环背景颜色  fill 转环的颜色 stroke-width 环的厚度
  return (
    <div className="relative">
      {spinning && (
        <div className="absolute w-full z-10">
          <div className="flex items-center justify-center flex-col">
            <span className={`${classes}`}>
              <svg
                style={{ color: color, textAlign: 'center' }}
                width="1em"
                height="1em"
                className="animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            {tipText && (
              <div className="text-xs leading-10" style={{ color: color }}>
                {tipText}
              </div>
            )}
          </div>
        </div>
      )}
      {/* spinning 加载中，不渲染children */}
      {!spinning && children}
    </div>
  );
};
Spin.defaultProps = {
  size: 'md',
  color: '#1890FF',
  spinning: true,
  tipText: '',
};
export default Spin;
