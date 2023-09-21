import {Button} from '@components/Button';
import {SelectBox} from '@components/SelectBox';
import {Popconfirm} from 'antd';

interface Props {
  onAssignComplete: () => void;
  options: Record<'label' | 'value', string>[];
}

export function AssignPhaseContent(props: Props) {
  return (
    <div>
      <SelectBox options={props.options} />
      <Button onClick={props.onAssignComplete}>Assign</Button>
    </div>
  );
}
