import {InputNumber as AntInput} from 'antd';
import {InputNumberProps} from './InputNumber.interface';

import cn from './InputNumber.style.module.scss';

export function InputNumber({className, prompt, ...props}: InputNumberProps) {
  if (!prompt) return <AntInput className={className} {...props} />;
  const inputClassname = `${cn.inputNumberContainer ?? ''}  ${className ?? ''}`;
  return (
    <div className={inputClassname}>
      <span>{prompt}</span>
      <AntInput {...props} />
    </div>
  );
}
