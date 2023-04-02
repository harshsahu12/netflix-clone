import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXRWwg8tiKQEZoSWKXoflQ8J7ZYIvWi9I",
  authDomain: "netflix-clone-bf87c.firebaseapp.com",
  projectId: "netflix-clone-bf87c",
  storageBucket: "netflix-clone-bf87c.appspot.com",
  messagingSenderId: "171345260455",
  appId: "1:171345260455:web:f1754da4ee85fd0f855082",
  measurementId: "G-3YNLVTSDVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)