import {InputProps as AntInputProps} from 'antd';

export interface InputProps extends AntInputProps {
  /**
   * text prompt associated with input
   */
  prompt?: string;
}
