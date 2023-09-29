import {AssignmentData} from '../../../Types/asssignments';

export interface AssignmentProps extends AssignmentData {
  writers: Record<'label' | 'value', string>[];
}
export type STATUS_TYPES =
  | 'created'
  | 'processing'
  | 'assign'
  | 'taskInProgress'
  | 'assignReviewer'
  | 'reviewInProgress'
  | 'done';
