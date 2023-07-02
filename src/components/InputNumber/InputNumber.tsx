import {InputNumber as AntInput} from 'antd';
import {InputNumberProps} from './InputNumber.interface';

import cn from './InputNumber.module.scss';

export function InputNumber({...props}: InputNumberProps) {
  return <AntInput {...props} />;
}
