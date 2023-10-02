import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getAssignment} from '@services/assignment';
import {AssignmentData} from '@Types/asssignments';
import {List} from '@components/List';
import {ROUTES} from '@constants/routes.constants';
import {ContentLoader} from '@components/ContentLoader';
import {addToLocalStorage, getFromLocalStorage} from '@utils/storage';
import {
  EXTRA_LIST_ITEMS,
  DATA_STORAGE_KEY as KEY,
  LIST_ITEMS,
  STORAGE_DATA_KEYS,
} from './Share.constants';
import {filterObject} from '@utils/object';
import {INPUT_LITERALS} from '../Home/AssignmentForm/AssignmentForm.constants';
import {ListItem} from './ListItem';
import {DueDays} from './DueDays';

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
      addToStorage(assignment as AssignmentData);
      setLoading(false);
    } catch (e) {
      navigate(ROUTES.NOT_FOUND);
    }
  };

  React.useEffect(() => {
    if (!slugId) return navigate(ROUTES.NOT_FOUND);

    const storageData = getFromStorage(slugId);
    console.log({storageData, slugId});
    if (!storageData) {
      getData(slugId);
      return;
    }
    setData(storageData);
    setLoading(false);
  }, []);

  const documentObj = EXTRA_LIST_ITEMS.find(({key}) => key === 'documents');

  return (
    <main className='share'>
      <ContentLoader loading={loading}>
        <DueDays deadline={data?.deadline ?? ''} />
        <List className='share_list'>
          {LIST_ITEMS.map(({label, key}) => (
            <ListItem
              className='share_list__item'
              key={label}
              label={label}
              value={data?.[key as keyof AssignmentData]}
              expandable={key === INPUT_LITERALS.DESC.NAME}
            />
          ))}
          {data?.documents?.length !== 0 && (
            <ListItem
              className='share_list__item'
              key={documentObj?.key}
              label={documentObj?.label as string}
              value={data?.documents.map((docHref, index) => {
                const text = `Document-${index + 1}`;
                return (
                  <a href={docHref} target='_blank'>
                    {text}
                  </a>
                );
              })}
            />
          )}
        </List>
      </ContentLoader>
    </main>
  );
}

function addToStorage(data: AssignmentData) {
  let requiredKeys = STORAGE_DATA_KEYS;
  const filteredData = filterObject(data, requiredKeys);
  const payload = {...filteredData};
  console.log({requiredKeys, payload});
  addToLocalStorage(KEY, JSON.stringify(payload));
}
function getFromStorage(id: string) {
  const response = getFromLocalStorage(KEY);
  if (!response) return;
  const {id: responseId, ...requiredData} = JSON.parse(response);
  if (responseId !== id) return;
  return requiredData;
}
