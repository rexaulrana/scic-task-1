// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPW1ZpO07eTcScvorzBoVRTlSATd24ioM",
  authDomain: "work-flow-1edd4.firebaseapp.com",
  projectId: "work-flow-1edd4",
  storageBucket: "work-flow-1edd4.appspot.com",
  messagingSenderId: "22637503800",
  appId: "1:22637503800:web:0b2b3cb1172c98df670dcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
