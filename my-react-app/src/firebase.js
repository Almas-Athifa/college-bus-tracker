import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAW_lVUd2GvwvXmog6Z79i3lE4j3hXT1JE",
  authDomain: "my-react-app-cb761.firebaseapp.com",
  databaseURL: "https://my-react-app-cb761-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-react-app-cb761",
  storageBucket: "my-react-app-cb761.firebasestorage.app",
  messagingSenderId: "16391492037",
  appId: "1:16391492037:web:de780471b63c96d7057bac"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);