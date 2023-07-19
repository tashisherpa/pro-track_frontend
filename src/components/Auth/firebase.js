// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw0eBAYFom1xlmtqpZwsdDC5AV00ze8ZI",
  authDomain: "pro-track-393019.firebaseapp.com",
  projectId: "pro-track-393019",
  storageBucket: "pro-track-393019.appspot.com",
  messagingSenderId: "619486578124",
  appId: "1:619486578124:web:91219a0e1d341363390969",
  measurementId: "G-1MFSCDC72B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
  signInWithPopup(auth, provider).then((result)=>{
  const email = result.user.email;
  const firstName = result.user.displayName.split(" ")[0];
  const lastName = result.user.displayName.split(" ")[1];
  const photoURL = result.user.photoURL;
  }).catch((error)=> {
    //console.log("auth failed")
  })
}