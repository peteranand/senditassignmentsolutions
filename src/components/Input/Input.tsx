import {Input as AntInput} from 'antd';
import {InputProps} from './Input.interface';

import cn from './Input.module.scss';

export function Input({...props}: InputProps) {
  return <AntInput {...props} />;
}
