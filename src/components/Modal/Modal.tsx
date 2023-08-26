import {Modal as M} from 'antd';
import {ModalProps as Props} from './Modal.interface';

export function Modal(props: Props) {
  return <M {...props} />;
}

Modal.success = M.success;
