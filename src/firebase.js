// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAPUM5BTXMTrHHUO35cSnqKfErwIb1GZoA",
  authDomain: "pure-pact-353812.firebaseapp.com",
  projectId: "pure-pact-353812",
  storageBucket: "pure-pact-353812.appspot.com",
  messagingSenderId: "1064880963972",
  appId: "1:1064880963972:web:5a1540168db23d398e9dd1",
  measurementId: "G-5X4C98CCL3"
};

 
// Initialize Firebase


// Initialize Firebase Authentication and get a reference to the service


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app, "gs://pure-pact-353812.appspot.com");

export { auth, storage }; // mengexport auth dan storage sebagai named export
export default app; // mengexport app sebagai default export
