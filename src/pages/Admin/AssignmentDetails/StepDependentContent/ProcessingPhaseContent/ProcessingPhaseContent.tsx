import {Button} from '@components/Button';
import {Popconfirm} from 'antd';

interface Props {
  onAccept: () => void;
  onReject: () => void;
}

export function ProcessingPhaseContent(props: Props) {
  return (
    <div>
      <Popconfirm
        title='Confirmation'
        description='Are you sure to update task?'
        okText='Yes'
        cancelText='No'
        onConfirm={props.onAccept}>
        <Button>Accept</Button>
      </Popconfirm>
      <Popconfirm
        title='Confirmation'
        description='Are you sure to update task?'
        okText='Yes'
        cancelText='No'
        onConfirm={props.onReject}>
        <Button>Reject</Button>
      </Popconfirm>
    </div>
  );
}
