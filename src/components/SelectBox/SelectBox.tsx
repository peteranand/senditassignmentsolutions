import { Select, SelectProps } from 'antd';

import cn from './style.module.scss';

export interface SelectBoxProps extends SelectProps {
  /**
   * Prompt to be diplayed with select box
   */
  prompt: string;
}

export function SelectBox({
  prompt,
  placeholder,
  options,
}: SelectBoxProps): JSX.Element {
  const className = cn.selectBox;

  return (
    <div className={cn.selectContainer}>
      <span>{prompt}</span>
      <Select
        className={className}
        placeholder={placeholder}
        options={options}
      />
    </div>
  );
}
