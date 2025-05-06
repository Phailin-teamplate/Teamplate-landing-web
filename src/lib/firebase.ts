import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

export const firebaseConfig = {
  apiKey: "AIzaSyBMwBl7hRknyyv6Ls2zPFZ0ReOSRvuIip8",
  authDomain: "ninee-test.firebaseapp.com",
  projectId: "ninee-test",
  storageBucket: "ninee-test.firebasestorage.app",
  messagingSenderId: "909212609634",
  appId: "1:909212609634:web:1fa37f1357d8462183b53b",
  measurementId: "G-HJHF61ENV8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export const functions = getFunctions(app);