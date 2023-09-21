import {ProcessingPhaseContent} from './ProcessingPhaseContent';
import {CreatedPhaseContent} from './CreatedPhaseContent';
import {AssignPhaseContent} from './AssignPhaseContent';
import {TaskProgressPhaseContent} from './TaskProgressPhaseContent';
import {ReviewProgressPhaseContent} from './ReviewProgressPhaseContent';
import {ReviewAssignPhaseContent} from './ReviewAssignPhaseContent';
import {DonePhaseContent} from './DonePhaseContent';
import {StepDependentContentProps as Props} from './StepDependentContent.interface';

export function StepDependentContent(props: Props) {
  const options: Record<'label' | 'value', string>[] = [
    {label: 'option1', value: 'option1'},
    {label: 'option2', value: 'option2'},
  ];

  switch (props.active) {
    case 'created':
      return <CreatedPhaseContent />;
    case 'processing':
      return (
        <ProcessingPhaseContent
          onAccept={props.onStepSuccess}
          onReject={props.onStepFail}
        />
      );
    case 'assign':
      return (
        <AssignPhaseContent
          onAssignComplete={props.onStepSuccess}
          options={options}
        />
      );
    case 'taskInProgress':
      return <TaskProgressPhaseContent onTaskDone={props.onStepSuccess} />;
    case 'assignReviewer':
      return (
        <ReviewAssignPhaseContent
          onAssignComplete={props.onStepSuccess}
          options={options}
        />
      );
    case 'reviewInProgress':
      return <ReviewProgressPhaseContent onTaskDone={props.onStepSuccess} />;
    case 'done':
      return <DonePhaseContent />;
  }
}
