import {Button} from '../Button/Button';
import {Input} from '../Input';
import {SelectBox} from '../SelectBox';

import cn from './InputForm.style.module.scss';

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
      <SelectBox prompt={PROMPT} options={OPTIONS} />
      <Input prompt='Input 1' />
      <Input prompt='Input 2' />
      <Button>Upload</Button>
    </div>
  );
}

/**
 * Doubts:
 * Academic level should be a number, text or select box??
 * does no of pages need a threshold
 */
