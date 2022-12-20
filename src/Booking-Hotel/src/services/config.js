// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export { db, auth };
export default app;
