import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr3CmFNn8EFjaMBDqWwrxaBP-7lY7BvNY",
  authDomain: "projetochat-435c2.firebaseapp.com",
  projectId: "projetochat-435c2",
  storageBucket: "projetochat-435c2.appspot.com",
  messagingSenderId: "707185994406",
  appId: "1:707185994406:web:165ed37256c5171f416267",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()