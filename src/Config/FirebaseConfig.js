import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "event-pros.firebaseapp.com",
  projectId: import.meta.env.VITE_apiKey,
  storageBucket: import.meta.env.VITE_apiKey,
  messagingSenderId: import.meta.env.VITE_apiKey,
  appId: import.meta.env.VITE_apiKey,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
