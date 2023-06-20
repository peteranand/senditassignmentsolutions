import { Input as AntInput, InputProps as AntInputProps } from 'antd';

import cn from './style.module.scss';

export interface InputProps extends AntInputProps {
  /**
   * text prompt associated with input
   */
  prompt?: string;
}

export function Input({ className, prompt, ...props }: InputProps) {
  if (!prompt) return <AntInput className={className} {...props} />;
  const inputClassname = `${cn.inputContainer ?? ''}  ${className ?? ''}`;
  return (
    <div className={inputClassname}>
      <span>{prompt}</span>
      <AntInput {...props} />
    </div>
  );
}
