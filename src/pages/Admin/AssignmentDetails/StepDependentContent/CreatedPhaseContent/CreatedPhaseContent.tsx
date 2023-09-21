import {Button} from '@components/Button';

export function CreatedPhaseContent(props: any) {
  return (
    <div>
      <Button onChange={props.onAccept}>Accept</Button>
      <Button onChange={props.onReject}>Reject</Button>
    </div>
  );
}
