import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDHfPRF-Cq1QriCMu-Nd6YQy-a-dhf5j4s",
  authDomain: "blogit-95ebf.firebaseapp.com",
  projectId: "blogit-95ebf",
  storageBucket: "blogit-95ebf.appspot.com",
  messagingSenderId: "444066115479",
  appId: "1:444066115479:web:6c1415a82b986182d4ded2"
};

const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const DB = getFirestore(app);