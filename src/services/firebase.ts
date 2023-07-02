import {fireStore, storage} from '../config/firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';
import {collection, getDocs, addDoc} from 'firebase/firestore';
import {DOCUMENTS_DEFAULT_PATH as PATH} from '../constants/firebase.storage';

export async function uploadDocument(document: any, fileName: string) {
  try {
    const url: string = `${PATH}${fileName}`;
    const storageRef = ref(storage, url);
    const response = await uploadBytes(storageRef, document);
    console.log({response});
  } catch (e) {
    console.error(e);
  }
}

export async function getDocumentURLs(jobId: string) {
  try {
    const url: string = `${PATH}${jobId}`;
    const storageRef = ref(storage, url);
    const response = await listAll(storageRef);
    let urlList: Array<string> = [];
    response.items.map(async (item) => {
      const downloadURL = await getDownloadURL(item);
      urlList.push(downloadURL);
    });
  } catch (e) {
    console.error(e);
  }
}

export async function addDocument(
  collectionName: string,
  data: Record<string, string>
) {
  try {
    const collectionRef = collection(fireStore, collectionName);
    const response = await addDoc(collectionRef, data);
    return response.id;
  } catch (e) {
    console.error(e);
  }
}

export async function getAllDocuments(collectionName: string) {
  try {
    const collectionRef = collection(fireStore, collectionName);
    const response = await getDocs(collectionRef);
    const data = response.docs.map((doc) => ({...doc.data()}));
    return data;
  } catch (e) {
    console.error(e);
  }
}
