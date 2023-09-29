import {STATUS_TYPES} from './AssignmentDetails.interface';

export const TEXT_DETAILS = [
  {key: 'name', label: 'Name'},
  {key: 'email', label: 'Email'},
  {key: 'phoneNumber', label: 'Phone Number'},
  {key: 'academicLevel', label: 'Academic Level'},
  {key: 'subject', label: 'Subject'},
  {key: 'description', label: 'Description'},
  {key: 'deadline', label: 'Deadline'},
  {key: 'payableAmount', label: 'Payable Amount'},
];

export const DATE_FIELDS = [{key: 'created_at', label: 'Created Date'}];

export const LITERALS = {
  NO_CONTENT: '**No Content**',
  SHOW_MORE: 'more',
};

export const STEPS: {
  title: string;
  value: STATUS_TYPES;
}[] = [
  {title: 'Created', value: 'created'},
  {title: 'Processing', value: 'processing'},
  {title: 'Assign', value: 'assign'},
  {title: 'Task In Progress', value: 'taskInProgress'},
  {title: 'Assign Reviewer', value: 'assignReviewer'},
  {title: 'Review In Progress', value: 'reviewInProgress'},
  {title: 'Done', value: 'done'},
];
