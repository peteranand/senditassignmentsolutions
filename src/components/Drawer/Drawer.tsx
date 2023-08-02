import {Drawer as MUIDrawer} from 'antd';
import {DrawerProps} from './Drawer.interface';

export function Drawer(props: DrawerProps) {
  return <MUIDrawer {...props} />;
}
