import {UploadFileType} from '../components/UploadFile';
import {AssignmentData} from '../types/asssignments';
import {addDocument, getAllDocuments, uploadFile} from './firebase';

const COLLECTION = {
  ASSIGNMENT: 'assignment',
};

export async function addAssignment(
  data: AssignmentData
): Promise<string | undefined> {
  try {
    const assignmentId = await addDocument(COLLECTION.ASSIGNMENT, data);
    return assignmentId;
  } catch (e) {
    console.error('Failed to add data');
  }
}

export async function getAllAssignments(): Promise<
  Array<AssignmentData> | undefined
> {
  try {
    const response = (await getAllDocuments(
      COLLECTION.ASSIGNMENT
    )) as Array<AssignmentData>;
    return response;
  } catch (e) {
    console.error('Failed to get Data');
  }
}

/**TODO */
export async function uploadDocuments(
  files: Array<UploadFileType>,
  ownerName: string
) {
  const fileUploadsArray: Array<Promise<any>> = files.map(
    (file: UploadFileType) => {
      const fileName = `${ownerName}/${file.name}`;
      return uploadFile(file, fileName);
    }
  );

  try {
    const response = await Promise.all(fileUploadsArray);
    return response;
  } catch (e) {
    console.error(e);
  }
}
