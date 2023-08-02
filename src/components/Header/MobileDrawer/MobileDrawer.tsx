import React from 'react';
import {Button} from '../../Button';
import {Drawer} from '../../Drawer';
import {MenuOutlined} from '@ant-design/icons';

import cn from './MobileDrawer.module.scss';

export function MobileDrawer() {
  const [drawerOpen, setDrawer] = React.useState(false);

  const toggleDrawer = () => setDrawer((prev) => !prev);

  return (
    <>
      <Button className={cn.drawerButton} onClick={toggleDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer onClose={toggleDrawer} open={drawerOpen}></Drawer>
    </>
  );
}
