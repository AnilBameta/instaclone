import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDZvCCmOy-d_5H4PR2yAr7sx1Ag4YKvO7w",
    authDomain: "fir-react-storage-9f109.firebaseapp.com",
    projectId: "fir-react-storage-9f109",
    storageBucket: "fir-react-storage-9f109.appspot.com",
    messagingSenderId: "674207488777",
    appId: "1:674207488777:web:a9c339f0587aae748051d8",
    measurementId: "G-PW7433L0PC"
  };

  export const app = initializeApp(firebaseConfig);
  export const storage = getStorage();