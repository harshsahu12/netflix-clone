import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCiLuTl1thP4_tgkYwUYrsRhX533R9PJ6A",
  authDomain: "netflix-clone-f334f.firebaseapp.com",
  projectId: "netflix-clone-f334f",
  storageBucket: "netflix-clone-f334f.appspot.com",
  messagingSenderId: "1015155846692",
  appId: "1:1015155846692:web:f9d8ae040506d8d905f2b1",
  measurementId: "G-M41RYK0HRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const imageDb = getStorage(app);