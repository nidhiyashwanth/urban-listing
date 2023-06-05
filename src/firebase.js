// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL8eTEWOhyBQjddzd-NvajRVobEWDJFPE",
  authDomain: "realtor-clone-react-3058b.firebaseapp.com",
  projectId: "realtor-clone-react-3058b",
  storageBucket: "realtor-clone-react-3058b.appspot.com",
  messagingSenderId: "875479199668",
  appId: "1:875479199668:web:41cc86ceaa1d7dbb9d8ce1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();