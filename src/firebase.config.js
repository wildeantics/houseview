// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCUBpTNrAKc-wVyanYUPTGnB58GlXVR-GA',
  authDomain: 'homeview-516d4.firebaseapp.com',
  projectId: 'homeview-516d4',
  storageBucket: 'homeview-516d4.appspot.com',
  messagingSenderId: '280119588500',
  appId: '1:280119588500:web:d8b1e438f2715a0f802681',
  measurementId: 'G-HBDBTWHJ3L',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
