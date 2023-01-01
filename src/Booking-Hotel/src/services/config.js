// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDaucfKSX0nWcyvQPWdx0Ws43kogCQF40M',
  authDomain: 'booking-hotel-c4b0e.firebaseapp.com',
  projectId: 'booking-hotel-c4b0e',
  storageBucket: 'booking-hotel-c4b0e.appspot.com',
  messagingSenderId: '350836016728',
  appId: '1:350836016728:web:aaa3fe0eb40d52faf7ac2d',
  measurementId: 'G-SCKYDWXJL8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

export { db, auth, storage };
export default app;
