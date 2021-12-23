import React from 'react';
import classNames from 'classnames';
import './button.less';

const ButtonTypes: Array<string> = ['default', 'primary', 'ghost', 'dashed'];

interface ButtonProps {
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  type?: typeof ButtonTypes[number];
  children?: React.ReactNode;
}

const Button = (props: ButtonProps): React.ReactElement => {
  const { disabled, children, type = 'primary' } = props;

  const prefixCls = 'vfc-btn';

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
  });
  console.log(classes);

  return (
    <button className={`${classes} a`} type="button" disabled={disabled}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
