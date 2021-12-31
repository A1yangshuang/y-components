import React from 'react';
import classNames from 'classnames';
import './button.less';

const ButtonTypes: Array<string> = ['default', 'primary', 'ghost', 'dashed'];

interface ButtonProps {
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  type?: typeof ButtonTypes[number];
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties | undefined;
}

const Button = (props: ButtonProps): React.ReactElement => {
  const { disabled, children, type = 'primary', style, className = '' } = props;

  const prefixCls = 'vfc-btn';

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
  });
  console.log(classes);

  return (
    <button className={`${classes} ${className}`} style={style} type="button" disabled={disabled}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
