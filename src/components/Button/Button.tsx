import {Button as AntButton} from 'antd';
import {ButtonProps} from './Button.interface';

export function Button(props: ButtonProps) {
  return <AntButton {...props} />;
}
