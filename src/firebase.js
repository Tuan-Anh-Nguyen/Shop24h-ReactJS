// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyAFfNHhXcTCQccrzB37ow1gLCUfY7xNOWw",
     authDomain: "devcamp-nta.firebaseapp.com",
     projectId: "devcamp-nta",
     storageBucket: "devcamp-nta.appspot.com",
     messagingSenderId: "953384414523",
     appId: "1:953384414523:web:182d43ed2da8d1639c1b1e",
     measurementId: "G-LHDN3DBKWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;