import {
  ProcessingArgType,
  ProcessingPhaseContent,
} from './ProcessingPhaseContent';
import {CreatedPhaseContent} from './CreatedPhaseContent';
import {AssignArgType, AssignPhaseContent} from './AssignPhaseContent';
import {TaskProgressPhaseContent} from './TaskProgressPhaseContent';
import {ReviewProgressPhaseContent} from './ReviewProgressPhaseContent';
import {ReviewAssignPhaseContent} from './ReviewAssignPhaseContent';
import {DonePhaseContent} from './DonePhaseContent';
import {StepDependentContentProps as Props} from './StepDependentContent.interface';
import {
  onAssignEnd,
  onAssignReviewEnd,
  onProcessingEnd,
  onReviewEnd,
  onTaskDone,
  onTaskProgressEnd,
} from '@services/admin';
import {message} from '@components/Message';
import {STATUS_TYPES} from '../AssignmentDetails.interface';
import {ReviewAssingArgType} from './ReviewAssignPhaseContent/ReviewAssignPhaseContent';

export function StepDependentContent(props: Props) {
  const onStartProcessing = () => {
    message.loading('processing...');
  };
  const onProcessingSuccess = () => {
    message.destroy();
    window.location.reload();
  };
  const onProcessingFail = () => {
    message.destroy();
    message.error('Failed to process request');
  };

  const runQuery =
    (type: STATUS_TYPES) => async (payload: Record<string, any>) => {
      try {
        onStartProcessing();
        switch (type) {
          case 'processing': {
            await onProcessingEnd(props.id, payload as ProcessingArgType);
            break;
          }
          case 'assign': {
            await onAssignEnd(props.id, payload as AssignArgType);
            break;
          }
          case 'taskInProgress': {
            await onTaskProgressEnd(props.id);
            break;
          }
          case 'assignReviewer': {
            await onAssignReviewEnd(props.id, payload as ReviewAssingArgType);
            break;
          }
          case 'reviewInProgress': {
            await onReviewEnd(props.id);
            break;
          }
          case 'done': {
            await onTaskDone(props.id);
          }
        }
        onProcessingSuccess();
      } catch (error) {
        console.error();
        onProcessingFail();
      }
    };

  switch (props.active) {
    case 'created':
      return <CreatedPhaseContent />;
    case 'processing':
      return (
        <ProcessingPhaseContent
          onAccept={runQuery('processing')}
          onReject={runQuery('processing')}
        />
      );
    case 'assign':
      return (
        <AssignPhaseContent
          onAssignComplete={runQuery('assign')}
          options={props.writers}
        />
      );
    case 'taskInProgress':
      return (
        <TaskProgressPhaseContent onTaskDone={runQuery('taskInProgress')} />
      );
    case 'assignReviewer':
      return (
        <ReviewAssignPhaseContent
          onAssignComplete={runQuery('assignReviewer')}
          options={props.writers}
        />
      );
    case 'reviewInProgress':
      return (
        <ReviewProgressPhaseContent onTaskDone={runQuery('reviewInProgress')} />
      );
    case 'done':
      return <DonePhaseContent onDone={runQuery('done')} />;
    default:
      return <></>;
  }
}
