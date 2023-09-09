import {fireStore, storage} from '../config/firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';
import {
  collection,
  getDocs,
  addDoc,
  query,
  limit,
  Timestamp,
  orderBy,
} from 'firebase/firestore';
import {
  DOCUMENTS_DEFAULT_PATH as PATH,
  SERVICE_KEYS as K,
} from '../constants/firebase.storage';

export async function uploadFile(document: any, fileName: string) {
  try {
    const url: string = `${PATH}${fileName}`;
    const storageRef = ref(storage, url);
    await uploadBytes(storageRef, document);
    return storageRef.fullPath;
  } catch (e) {
    console.error(e);
  }
}

export async function getUploadedFileURLs(
  jobId: string
): Promise<Array<string> | undefined> {
  try {
    const url: string = `${PATH}${jobId}`;
    const storageRef = ref(storage, url);
    const response = await listAll(storageRef);
    let urlList = response.items.map(async (item) => {
      const downloadURL = await getDownloadURL(item);
      return downloadURL;
    });
    return Promise.all(urlList);
  } catch (e) {
    console.error(e);
  }
}

export async function addDocument(
  collectionName: string,
  data: Record<string, string | string[]>
) {
  try {
    const collectionRef = collection(fireStore, collectionName);
    const timestamp = Timestamp.now();
    const payload = {
      ...data,
      [K.CREATED_TIMESTAMP]: timestamp,
      [K.UPDATED_TIMESTAMP]: timestamp,
    };
    const response = await addDoc(collectionRef, payload);
    return response.id;
  } catch (e) {
    console.error(e);
  }
}

export async function getAllDocuments(
  collectionName: string,
  queries: Record<string, string | number> = {limit: 100}
) {
  try {
    const collectionRef = collection(fireStore, collectionName);
    const q = query(
      collectionRef,
      orderBy(K.CREATED_TIMESTAMP, 'desc'),
      limit(queries.limit as number)
    );
    const response = await getDocs(q);
    const data = response.docs.map((doc) => ({...doc.data()}));
    return data;
  } catch (e) {
    console.error(e);
  }
}
