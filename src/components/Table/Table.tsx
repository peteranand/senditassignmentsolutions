import {Table as T} from 'antd';
import {TableProps as Props} from './Table.interface';

export function Table(props: Props) {
  return <T {...props} />;
}
