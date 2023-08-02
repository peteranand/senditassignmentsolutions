import {ListProps as MUIListProps} from 'antd';
import {ListItemProps as MUIListItemProps} from 'antd/es/list';

export interface ListProps extends MUIListProps<MUIListItemProps> {}
export interface ListItemProps extends MUIListItemProps {}
