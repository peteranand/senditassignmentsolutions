import React from 'react';
import {getAllAssignments} from '@services/assignment';
import {AssignmentData} from '@Types/asssignments';

import {Table} from '@components/Table';
import type {ColumnProps, ColumnType, ColumnsType} from '@components/Table';
import {INPUT_LITERALS as L} from '../Home/AssignmentForm/AssignmentForm.constants';
import {Timestamp} from 'firebase/firestore';

import './Admin.scss';
import {Drawer} from '@components/Drawer';
import {AssignmentDescription} from './AssignmentDescription';
import {AssignmentDetails} from './AssignmentDetails';

export function Admin() {
  const [data, setData] = React.useState<Array<AssignmentData>>([]);
  const [loading, setLoading] = React.useState(false);
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | undefined>();

  const getUsersData = async () => {
    setLoading(true);

    const assignments = await getAllAssignments();
    console.log({assignments});
    if (assignments !== undefined) setData(assignments);

    setLoading(false);
  };

  React.useEffect(() => {
    getUsersData();
  }, []);

  const toggleDrawerShow = () => setShowDrawer((prev) => !prev);
  const onClickViewMore = (selectedIndex: number) => (e: React.MouseEvent) => {
    setActiveIndex(selectedIndex);
    toggleDrawerShow();
  };

  const columnsGet = (): ColumnsType<any> => {
    const keys = ['NAME', 'DEADLINE'];
    let columns: ColumnsType<any> = keys.map((key) => ({
      title: L[key].LABEL,
      key: L[key].NAME,
      dataIndex: L[key].NAME,
    }));
    columns.push({
      title: '',
      key: 'viewMore',
      dataIndex: 'viewMore',
      render(value, record, index) {
        console.log(value, index);
        return <a onClick={onClickViewMore(index)}>View More</a>;
      },
    });
    return columns;
  };

  const getDataSource = () => {
    return data.map((dataItems: AssignmentData) => ({
      ...dataItems,
      key: dataItems.jobId,
    }));
  };

  return (
    <div className='admin'>
      <h2 className='admin__title'>Details</h2>
      <Table
        loading={loading}
        columns={columnsGet()}
        dataSource={getDataSource()}
        scroll={{x: true}}
      />
      <Drawer open={showDrawer} onClose={toggleDrawerShow}>
        {activeIndex !== undefined ? (
          <AssignmentDetails {...data[activeIndex]} />
        ) : (
          <></>
        )}
      </Drawer>
    </div>
  );
}
