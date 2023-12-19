import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEn2vJIPL02KVd7KwRzrM3sBAPEnaD3-E",
  authDomain: "miniblog-52567.firebaseapp.com",
  projectId: "miniblog-52567",
  storageBucket: "miniblog-52567.appspot.com",
  messagingSenderId: "111309758947",
  appId: "1:111309758947:web:d9c6db1f1848a8267200d6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}