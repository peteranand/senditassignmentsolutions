import {Timestamp} from 'firebase/firestore';
import {getAllDocuments, getDocument, updateDocument} from './firebase';
import {STATUS_TYPES} from '@pages/Admin/AssignmentDetails/AssignmentDetails.interface';

const COLLECTION = {
  ASSIGNMENT: 'assignment',
  WRITERS: 'writers',
};

async function getNewActionsPayload(id: string, state: STATUS_TYPES) {
  const currentAction = {
    state,
    timestamp: Timestamp.now(),
  };
  try {
    const data = await getDocument(COLLECTION.ASSIGNMENT, id);
    if (!data) return [currentAction];
    if (!data.actions) return [currentAction];
    return [...data.actions, currentAction];
  } catch (e) {
    console.error(e);
  }
}

type processPropPayload = {isAccepted: boolean; payableAmount: string};
export async function onProcessingEnd(
  id: string,
  {isAccepted, payableAmount}: processPropPayload
) {
  const actions = await getNewActionsPayload(id, 'processing');
  console.log({actions});
  const payload = {
    actions,
    isAccepted,
    payableAmount: isAccepted ? payableAmount : undefined,
  };
  try {
    const response = updateDocument(COLLECTION.ASSIGNMENT, id, payload);
    return response;
  } catch (e) {
    console.error(e);
  }
}

type assignPropPayload = {assignedTo: string};
export async function onAssignEnd(id: string, {assignedTo}: assignPropPayload) {
  try {
    const actions = await getNewActionsPayload(id, 'assign');
    const payload = {
      actions,
      assignedTo,
      taskInProgress: true,
    };
    const response = updateDocument(COLLECTION.ASSIGNMENT, id, payload);
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function onTaskProgressEnd(id: string) {
  try {
    const actions = await getNewActionsPayload(id, 'taskInProgress');
    const payload = {
      actions,
      taskInProgress: false,
    };
    const response = updateDocument(COLLECTION.ASSIGNMENT, id, payload);
    return response;
  } catch (e) {
    console.error(e);
  }
}

type assignReviewPropPayload = {reviewer: string};
export async function onAssignReviewEnd(
  id: string,
  {reviewer}: assignReviewPropPayload
) {
  try {
    const actions = await getNewActionsPayload(id, 'assignReviewer');
    const payload = {
      actions,
      reviewer,
      reviewInProgress: true,
    };
    const response = updateDocument(COLLECTION.ASSIGNMENT, id, payload);
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function onReviewEnd(id: string) {
  try {
    const actions = await getNewActionsPayload(id, 'reviewInProgress');
    const payload = {
      actions,
      reviewInProgress: false,
    };
    const response = updateDocument(COLLECTION.ASSIGNMENT, id, payload);
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function onTaskDone(id: string) {
  try {
    const actions = await getNewActionsPayload(id, 'done');
    const payload = {
      actions,
      isDone: true,
    };
    const response = updateDocument(COLLECTION.ASSIGNMENT, id, payload);
    return response;
  } catch (e) {
    console.error(e);
  }
}

export async function getWriters() {
  try {
    const response = await getAllDocuments(COLLECTION.WRITERS);
    return response;
  } catch (e) {
    console.error(e);
  }
}
