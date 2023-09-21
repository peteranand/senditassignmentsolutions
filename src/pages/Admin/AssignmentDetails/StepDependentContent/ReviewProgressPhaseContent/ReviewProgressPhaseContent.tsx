import {Button} from '@components/Button';
interface Props {
  onTaskDone: () => void;
}

export function ReviewProgressPhaseContent(props: Props) {
  return (
    <div>
      <span>Time and other stuff related to task will come here</span>
      <Button onClick={props.onTaskDone}>Task Done</Button>
    </div>
  );
}
