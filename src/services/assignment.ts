import {generateUniqueId} from '@utils/common';
import {UploadFileType} from '../components/UploadFile';
import {AssignmentData} from '../Types/asssignments';
import {
  addDocument,
  getAllDocuments,
  getUploadedFileURLs,
  uploadFile,
} from './firebase';

const COLLECTION = {
  ASSIGNMENT: 'assignment',
};

export async function addAssignment(
  data: Omit<AssignmentData, 'created_at' | 'updated_at' | 'documents'>,
  documents: UploadFileType[]
): Promise<string | undefined> {
  try {
    const jobId = generateUniqueId();
    const payload = {...data, jobId};

    if (documents.length > 0) {
      await uploadDocuments(documents, jobId);
    }

    const assignmentId = await addDocument(COLLECTION.ASSIGNMENT, payload);
    return assignmentId;
  } catch (e) {
    console.error('Failed to add data', e);
  }
}

export async function getAllAssignments(): Promise<
  Array<AssignmentData> | undefined
> {
  try {
    const response = (await getAllDocuments(
      COLLECTION.ASSIGNMENT
    )) as Array<AssignmentData>;
    const urlList = await Promise.all(
      response.map(({jobId}) => {
        const documentUrl = getUploadedFileURLs(jobId);
        return documentUrl;
      })
    );
    const updatedResponse = urlList.map((documents, index) => {
      return {...response[index], documents: documents ? documents : []};
    });

    return updatedResponse;
  } catch (e) {
    console.error('Failed to get Data');
  }
}

export async function uploadDocuments(
  files: Array<UploadFileType>,
  jobId: string
) {
  const fileUploadsArray: Array<Promise<any>> = files.map(
    (file: UploadFileType) => {
      const fileName = `${jobId}/${file.name}`;
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
