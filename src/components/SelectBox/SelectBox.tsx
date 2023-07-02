import {Select} from 'antd';
import {SelectBoxProps} from './SelectBox.interface';

import cn from './SelectBox.module.scss';

export function SelectBox({className, ...props}: SelectBoxProps): JSX.Element {
  const selectBoxClassName = `${cn.selectBox} ${className} `;
  return <Select className={selectBoxClassName} {...props} />;
}
