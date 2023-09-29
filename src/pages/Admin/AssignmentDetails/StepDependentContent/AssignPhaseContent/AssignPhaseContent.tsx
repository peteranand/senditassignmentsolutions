import {Button} from '@components/Button';
import {SelectBox} from '@components/SelectBox';
import React from 'react';

export type AssignArgType = Record<'assignedTo', any>;
interface Props {
  onAssignComplete: (arg: AssignArgType) => void;
  options: Record<'label' | 'value', string>[];
}

export function AssignPhaseContent(props: Props) {
  const [selectedOption, setSelected] = React.useState<string>();

  const onChange = (value: string) => setSelected(value);
  const onClickAssign = () =>
    props.onAssignComplete({assignedTo: selectedOption});

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
