import {AssignmentData} from '@Types/asssignments';
import {INPUT_LITERALS} from '../Home/AssignmentForm/AssignmentForm.constants';

export const DATA_STORAGE_KEY = 'assignment';

type DataItem = {label: string; key: keyof AssignmentData};
export const LIST_ITEMS: DataItem[] = [
  {label: 'Academic Level', key: 'academicLevel'},
  {label: 'Subject', key: 'subject'},
  {label: 'Description', key: 'description'},
  {label: 'Content Limit (words)', key: 'contentLimit'},
];
export const EXTRA_LIST_ITEMS: DataItem[] = [
  {label: 'Documents', key: 'documents'},
];

export const STORAGE_DATA_KEYS: DataItem['key'][] = [
  ...[...LIST_ITEMS, ...EXTRA_LIST_ITEMS].map(({key}) => key),
  'id',
  'deadline',
];
