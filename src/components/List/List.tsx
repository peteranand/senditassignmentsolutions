import {List as MUIList} from 'antd';
import {ListItemProps, ListProps} from './List.interface';

export function List(props: ListProps): JSX.Element {
  return <MUIList {...props} />;
}

List.Item = function (props: ListItemProps): JSX.Element {
  return <MUIList.Item {...props} />;
};
