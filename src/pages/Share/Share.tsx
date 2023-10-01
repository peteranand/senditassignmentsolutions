import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getAssignment} from '@services/assignment';
import {AssignmentData} from '@Types/asssignments';
import {List} from '@components/List';
import {ROUTES} from '@constants/routes.constants';
import {ContentLoader} from '@components/ContentLoader';
import {addToLocalStorage, getFromLocalStorage} from '@utils/storage';
import {DATA_STORAGE_KEY as KEY, LIST_MAP} from './Share.constants';
import {filterObject} from '@utils/object';
import {INPUT_LITERALS} from '../Home/AssignmentForm/AssignmentForm.constants';
import Paragraph from 'antd/es/typography/Paragraph';

import './Share.scss';

export function Share(): JSX.Element {
  const [data, setData] = React.useState<AssignmentData>();
  const [loading, setLoading] = React.useState<boolean>(true);

  const {assignmentSlug: slugId} = useParams();
  const navigate = useNavigate();

  const getData = async (id: string) => {
    try {
      const assignment = await getAssignment(id);
      if (!assignment || (assignment && Object.keys(assignment).length === 0))
        navigate(ROUTES.NOT_FOUND);
      setData(assignment);
      addToStorage(slugId as string, assignment as AssignmentData);
      setLoading(false);
    } catch (e) {
      navigate(ROUTES.NOT_FOUND);
    }
  };

  React.useEffect(() => {
    if (!slugId) return navigate(ROUTES.NOT_FOUND);

    const storageData = getFromStorage(slugId);
    if (!storageData) {
      getData(slugId);
      return;
    }
    setData(storageData);
    setLoading(false);
  }, []);

  return (
    <main className='share'>
      <ContentLoader loading={loading}>
        <List className='share_list'>
          {LIST_MAP.map(({label, key}) => (
            <ListItem
              className='share_list__item'
              key={label}
              label={label}
              value={data?.[key as keyof AssignmentData]}
              expandable={key === INPUT_LITERALS.DESC.NAME}
            />
          ))}
        </List>
      </ContentLoader>
    </main>
  );
}

interface ListItemProps {
  className?: string;
  label: string;
  value?: any;
  expandable?: boolean;
}
function ListItem(props: ListItemProps) {
  const content = `${props.value}` ?? '**No Content**';
  return (
    <List.Item className={props.className}>
      <span>{props.label}</span>
      {props.expandable ? (
        <span>{content}</span>
      ) : (
        <Paragraph ellipsis={{rows: 2, expandable: true, symbol: 'more'}}>
          {content}
        </Paragraph>
      )}
    </List.Item>
  );
}

function addToStorage(id: string, data: AssignmentData) {
  const requiredKeys = LIST_MAP.map(({key}) => key);
  const filteredData = filterObject(data, requiredKeys);
  const payload = {...filteredData, id};
  addToLocalStorage(KEY, JSON.stringify(payload));
}
function getFromStorage(id: string) {
  const response = getFromLocalStorage(KEY);
  if (!response) return;
  const {id: responseId, ...requiredData} = JSON.parse(response);
  if (responseId !== id) return;
  return requiredData;
}
