import {STATUS_TYPES} from '../AssignmentDetails.interface';

export interface StepDependentContentProps {
  /**
   * active status value
   */
  active: STATUS_TYPES;
  onStepSuccess: () => void;
  onStepFail: () => void;
}
