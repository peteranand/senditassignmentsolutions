import {Input as AntInput} from 'antd';
import {TextAreaProps} from './TextArea.interface';

export function TextArea(props: TextAreaProps) {
  return <AntInput.TextArea {...props} />;
}
