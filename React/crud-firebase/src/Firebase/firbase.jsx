// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAgcLGE6bEZI9Yul1Ed4TmDducEJzynQBg",
  authDomain: "crud1-a1310.firebaseapp.com",
  projectId: "crud1-a1310",
  storageBucket: "crud1-a1310.appspot.com",
  messagingSenderId: "850911456197",
  appId: "1:850911456197:web:b6ae923b9c2bb4d12a39ac",
  measurementId: "G-BSYLZTB0DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)