import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB2tQROpJZawzdjoOXt9hTlwSz2pe279J4',
  authDomain: 'twitter-3ef1d.firebaseapp.com',
  projectId: 'twitter-3ef1d',
  storageBucket: 'twitter-3ef1d.appspot.com',
  messagingSenderId: '412035078340',
  appId: '1:412035078340:web:a25c4cb17ffafced809191',
};

// Initialize
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
