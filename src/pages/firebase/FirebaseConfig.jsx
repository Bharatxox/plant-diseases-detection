import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEGcUBoi4k0ZPLlvuMAAApmUqLK9fz6FI",
  authDomain: "sih-project-7e8bb.firebaseapp.com",
  projectId: "sih-project-7e8bb",
  storageBucket: "sih-project-7e8bb.appspot.com",
  messagingSenderId: "573238930643",
  appId: "1:573238930643:web:7202b870de89ff3b6ef826",
  measurementId: "G-FKZW2HS6TV",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
