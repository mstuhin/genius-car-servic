// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAjeddK88Gc2R4oOy5mOdqPPD2233_AOE",
    authDomain: "genius-car-services-8b1aa.firebaseapp.com",
    projectId: "genius-car-services-8b1aa",
    storageBucket: "genius-car-services-8b1aa.appspot.com",
    messagingSenderId: "270744448601",
    appId: "1:270744448601:web:c9888e8594039bfa070b48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;