import {Input as AntInput} from 'antd';
import {InputProps} from './Input.interface';

import cn from './Input.style.module.scss';

export function Input({className, prompt, ...props}: InputProps) {
  if (!prompt) return <AntInput className={className} {...props} />;
  const inputClassname = `${cn.inputContainer ?? ''}  ${className ?? ''}`;
  return (
    <div className={inputClassname}>
      <span>{prompt}</span>
      <AntInput {...props} />
    </div>
  );
}
