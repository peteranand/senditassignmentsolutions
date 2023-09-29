import {AssignmentProps, STATUS_TYPES} from '../AssignmentDetails.interface';

export interface StepDependentContentProps {
  /**
   * active status value
   */
  active: STATUS_TYPES;
  /**
   * list of writers
   */
  writers: AssignmentProps['writers'];
  /**
   * unique id
   */
  id: string;
}
