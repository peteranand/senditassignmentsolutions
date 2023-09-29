import React from 'react';
import {getAllAssignments} from '@services/assignment';
import {AssignmentData} from '@Types/asssignments';
import {Table} from '@components/Table';
import type {ColumnsType} from '@components/Table';
import {INPUT_LITERALS as L} from '../Home/AssignmentForm/AssignmentForm.constants';
import {Drawer} from '@components/Drawer';
import {AssignmentDetails} from './AssignmentDetails';
import {getWriters} from '@services/admin';
import {useSearchParams} from 'react-router-dom';

import './Admin.scss';
import {URL_PARAM_KEY} from './Admin.constants';

export function Admin() {
  const [data, setData] = React.useState<Array<AssignmentData>>([]);
  const [writers, setWriters] = React.useState<Array<Record<string, string>>>(
    []
  );
  const [loading, setLoading] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | undefined>();

  const [searchParams, setSearchParams] = useSearchParams();

  const selected = searchParams.get(URL_PARAM_KEY.SELECTED);

  const getAllData = async () => {
    const getUsersData = async () => {
      const assignments = await getAllAssignments();
      if (assignments !== undefined) setData(assignments);
    };
    const getWritersData = async () => {
      const writers = await getWriters();
      if (writers) setWriters(writers);
    };

    setLoading(true);
    const promises = [getUsersData(), getWritersData()];
    await Promise.all(promises);
    setLoading(false);
  };

  React.useEffect(() => {
    getAllData();
  }, []);

  React.useEffect(() => {
    const setInitialActiveIndex = () => {
      const activeIndex = data.findIndex(({jobId}) => jobId === selected);
      if (activeIndex >= 0) {
        setActiveIndex(activeIndex);
      }
      return -1;
    };
    if (data.length > 0) setInitialActiveIndex();
  }, [data]);

  const onClickViewMore = (selectedIndex: number) => (e: React.MouseEvent) => {
    setActiveIndex(selectedIndex);
    const jobId = data[selectedIndex].jobId;
    searchParams.set(URL_PARAM_KEY.SELECTED, jobId);
    setSearchParams(searchParams);
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

  const getWriterOptions = () =>
    writers.map(({name, id}) => ({label: name, value: id}));

  const onCloseDrawer = () => {
    searchParams.delete(URL_PARAM_KEY.SELECTED);
    setSearchParams(searchParams);
    setActiveIndex(undefined);
  };
  const showDrawer =
    activeIndex !== undefined && activeIndex >= 0 ? true : false;

  return (
    <div className='admin'>
      <h2 className='admin__title'>Details</h2>
      <Table
        loading={loading}
        columns={columnsGet()}
        dataSource={getDataSource()}
        scroll={{x: true}}
      />
      <Drawer open={showDrawer} onClose={onCloseDrawer}>
        {activeIndex !== undefined ? (
          <AssignmentDetails
            {...data[activeIndex]}
            writers={getWriterOptions()}
          />
        ) : (
          <></>
        )}
      </Drawer>
    </div>
  );
}
