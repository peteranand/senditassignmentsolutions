import {List} from '@components/List';
import Paragraph from 'antd/es/typography/Paragraph';
import {ListItemProps as Props} from './ListItem.interface';

export function ListItem(props: Props) {
  const content = props.value ?? '**No Content**';
  return (
    <List.Item className={props.className}>
      <span>{props.label}</span>
      {props.expandable ? (
        <span>{content}</span>
      ) : (
        <Paragraph ellipsis={{rows: 2, expandable: true}}>{content}</Paragraph>
      )}
    </List.Item>
  );
}
