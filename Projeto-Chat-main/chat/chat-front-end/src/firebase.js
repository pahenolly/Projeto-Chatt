import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBf5xUaPMlG4DEWJIOV9zG7GGFp0eJKTRQ",
  authDomain: "chat-3fe29.firebaseapp.com",
  projectId: "chat-3fe29",
  storageBucket: "chat-3fe29.appspot.com",
  messagingSenderId: "346610067660",
  appId: "1:346610067660:web:4deaddc389f4a944b3fa69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();