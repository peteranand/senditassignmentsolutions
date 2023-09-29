import {Button} from '@components/Button';

interface Props {
  onDone: (arg: any) => void;
}
export function DonePhaseContent(props: Props) {
  return (
    <div>
      <Button onClick={props.onDone}>Mark as Done</Button>
    </div>
  );
}
