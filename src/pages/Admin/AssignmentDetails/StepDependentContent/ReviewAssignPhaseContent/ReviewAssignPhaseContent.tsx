import {Button} from '@components/Button';
import {SelectBox} from '@components/SelectBox';
import React from 'react';

export type ReviewAssingArgType = Record<'reviewer', any>;
interface Props {
  onAssignComplete: (arg: ReviewAssingArgType) => void;
  options: Record<'label' | 'value', string>[];
}

export function ReviewAssignPhaseContent(props: Props) {
  const [selectedOption, setSelected] = React.useState<string>();

  const onChange = (value: string) => setSelected(value);
  const onClickAssign = () =>
    props.onAssignComplete({reviewer: selectedOption});

  const isButtonDisabled = selectedOption === undefined;

  return (
    <div>
      <SelectBox options={props.options} onChange={onChange} />
      <Button disabled={isButtonDisabled} onClick={onClickAssign}>
        Assign
      </Button>
    </div>
  );
}
