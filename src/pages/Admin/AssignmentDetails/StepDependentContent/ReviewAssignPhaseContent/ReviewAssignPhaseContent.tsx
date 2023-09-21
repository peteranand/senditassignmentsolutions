import {Button} from '@components/Button';
import {SelectBox} from '@components/SelectBox';

interface Props {
  onAssignComplete: () => void;
  options: Record<'label' | 'value', string>[];
}

export function ReviewAssignPhaseContent(props: Props) {
  return (
    <div>
      <SelectBox options={props.options} />
      <Button onClick={props.onAssignComplete}>Assign</Button>
    </div>
  );
}
