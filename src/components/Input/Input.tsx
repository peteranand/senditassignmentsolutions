import {Input as AntInput} from 'antd';
import {InputProps} from './Input.interface';

import cn from './Input.module.scss';

export function Input({className, ...props}: InputProps) {
  const componentClassName = `${className} ${cn.input}`;
  return <AntInput className={componentClassName} {...props} />;
}
