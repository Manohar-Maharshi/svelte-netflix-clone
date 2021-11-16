import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCydNQs84nh-MR_khByZqGCOppzrHQkxPo",
  authDomain: "svelte-netflix-clone.firebaseapp.com",
  projectId: "svelte-netflix-clone",
  storageBucket: "svelte-netflix-clone.appspot.com",
  messagingSenderId: "167767565412",
  appId: "1:167767565412:web:5e5e9e6adf6f9c0eabab71"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();