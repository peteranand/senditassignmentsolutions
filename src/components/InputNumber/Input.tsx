import {
  InputNumber as AntInput,
  InputNumberProps as AntInputProps,
} from 'antd';

import cn from './style.module.scss';

export interface InputNumberProps extends AntInputProps {
  /**
   * text prompt associated with input
   */
  prompt?: string;
}

export function InputNumber({ className, prompt, ...props }: InputNumberProps) {
  if (!prompt) return <AntInput className={className} {...props} />;
  const inputClassname = `${cn.inputNumberContainer ?? ''}  ${className ?? ''}`;
  return (
    <div className={inputClassname}>
      <span>{prompt}</span>
      <AntInput {...props} />
    </div>
  );
}
