import React, {ChangeEvent} from 'react';
import {Button} from '@components/Button';
import {Input} from '@components/Input';
import {Popconfirm} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';

import cn from './ProcessingPhase.module.scss';

export type ProcessingArgType = Record<'payableAmount' | 'isAccepted', any>;
interface Props {
  onAccept: (arg: ProcessingArgType) => void;
  onReject: (arg: ProcessingArgType) => void;
}

export function ProcessingPhaseContent(props: Props) {
  const [price, setPrice] = React.useState<string>('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const buttonDisabled = price.length === 0 || isNaN(parseInt(price));

  const onAccept = () => {
    props.onAccept({payableAmount: price, isAccepted: true});
  };
  const onReject = () => {
    props.onReject({payableAmount: undefined, isAccepted: false});
  };

  return (
    <div className={cn.processing}>
      <span className={cn.processing__input}>
        <label>Enter Price</label>
        <Input onChange={onChange} value={price} />
      </span>
      <div className={cn.processing__buttonBlk}>
        <Popconfirm
          title='Confirmation'
          description='Are you sure to update task?'
          okText='Yes'
          cancelText='No'
          onConfirm={onAccept}>
          <Button
            className={cn.processing__buttonBlk_accept}
            disabled={buttonDisabled}
            icon={<CheckOutlined />}>
            Accept
          </Button>
        </Popconfirm>
        <Popconfirm
          title='Confirmation'
          description='Are you sure to update task?'
          okText='Yes'
          cancelText='No'
          onConfirm={onReject}>
          <Button
            className={cn.processing__buttonBlk_reject}
            icon={<CloseOutlined />}>
            Reject
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
}
