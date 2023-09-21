import {AssignmentData} from '../../../Types/asssignments';

export interface AssignmentProps extends AssignmentData {}
export type STATUS_TYPES =
  | 'created'
  | 'processing'
  | 'assign'
  | 'taskInProgress'
  | 'assignReviewer'
  | 'reviewInProgress'
  | 'done';
