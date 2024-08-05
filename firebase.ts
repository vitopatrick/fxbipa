import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyDesvFcvjexNJavo2yPZiAL_AjUUYmQwMs",
  authDomain: "bitpay-fddca.firebaseapp.com",
  projectId: "bitpay-fddca",
  storageBucket: "bitpay-fddca.appspot.com",
  messagingSenderId: "275512799478",
  appId: "1:275512799478:web:d7ae47b046413fa6bb7cd7",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
