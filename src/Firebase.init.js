// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZwQwQn-lpnulFIMqe09O0ap6ll217Un8",
  authDomain: "gamehubx-react-project.firebaseapp.com",
  projectId: "gamehubx-react-project",
  storageBucket: "gamehubx-react-project.firebasestorage.app",
  messagingSenderId: "381462010249",
  appId: "1:381462010249:web:f5443031c48af76e492958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)