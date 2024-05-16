import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1inkY6AbCSx1ocrVfFnNkdqQDOIzi3ZE",
  authDomain: "alllinks-77ed5.firebaseapp.com",
  projectId: "alllinks-77ed5",
  storageBucket: "alllinks-77ed5.appspot.com",
  messagingSenderId: "997775469545",
  appId: "1:997775469545:web:99234f7ef75bd7e52eb978"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};