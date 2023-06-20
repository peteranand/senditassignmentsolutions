import { InputNumber } from '../InputNumber';
import { Input } from '../Input';
import { SelectBox } from '../SelectBox';
import cn from './style.module.scss';

export function InputForm(): JSX.Element {
  const PROMPT = 'Choose a service';
  const OPTIONS = [
    {
      value: '1',
      label: 'Not Identified',
    },
    {
      value: '2',
      label: 'Closed',
    },
  ];
  return (
    <div className={cn.inputContainer}>
      <SelectBox prompt={'Choose a service'} options={OPTIONS} />
      <InputNumber prompt="No of Pages that are needed" />
      <Input prompt="Academic Level" />
      <Input prompt="Subject something of assignment topic" />
    </div>
  );
}

/**
 * Doubts:
 * Academic level should be a number, text or select box??
 * does no of pages need a threshold
 */
