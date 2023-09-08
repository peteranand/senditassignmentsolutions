import {InputNumber as AntInput} from 'antd';
import {InputNumberProps} from './InputNumber.interface';

import cn from './InputNumber.module.scss';

export function InputNumber({className, ...props}: InputNumberProps) {
  const componentClassName = `${cn.inputttattaa} ${className}`;
  return <AntInput className={componentClassName} {...props} />;
}
