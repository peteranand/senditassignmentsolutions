import {Button} from '@components/Button';
interface Props {
  onTaskDone: (arg: any) => void;
}

export function ReviewProgressPhaseContent(props: Props) {
  return (
    <div>
      <span>Time and other stuff related to task will come here</span>
      <Button onClick={props.onTaskDone}>Review Done</Button>
    </div>
  );
}
