import {Button as AntButton} from 'antd';
import {ButtonProps} from './Button.interface';

import cn from './Button.module.scss';

export function Button({className, ...props}: ButtonProps) {
  const componentClassName = ` ${cn.button} ${className}`;
  return <AntButton className={componentClassName} {...props} />;
}
