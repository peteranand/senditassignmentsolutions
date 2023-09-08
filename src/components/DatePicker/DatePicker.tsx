import {DatePicker as M} from 'antd';
import {DatePickerProps as Props} from './DatePicker.interface';

import cn from './DatePicker.module.scss';

export function DatePicker({className, ...props}: Props) {
  const componentClassName = `${cn.picker} ${className}`;
  return <M className={componentClassName} {...props} />;
}
