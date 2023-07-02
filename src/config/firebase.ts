import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbYQBJIPYQhHZaZkqcMgbhv8NGczSxaxs',
  authDomain: 'sendit-8affc.firebaseapp.com',
  projectId: 'sendit-8affc',
  storageBucket: 'sendit-8affc.appspot.com',
  messagingSenderId: '820280050693',
  appId: '1:820280050693:web:542fa3d2fc4933f0d5c86c',
  measurementId: 'G-2DRRGX98LT',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const fireStore = getFirestore(app);
