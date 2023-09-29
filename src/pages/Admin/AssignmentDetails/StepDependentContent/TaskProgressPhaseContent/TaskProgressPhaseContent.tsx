import {Button} from '@components/Button';

interface Props {
  onTaskDone: (arg: any) => void;
}
export function TaskProgressPhaseContent(props: Props) {
  const onClick = () => props.onTaskDone({});
  return (
    <div>
      <span>Time and other stuff related to task will come here</span>
      <Button onClick={onClick}>Task Done</Button>
    </div>
  );
}
