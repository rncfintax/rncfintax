import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrBhj0cPWr4_A14pllPET_lVb91foRmS0",
  authDomain: "rnc-fintax-f8a34.firebaseapp.com",
  projectId: "rnc-fintax-f8a34",
  storageBucket: "rnc-fintax-f8a34.appspot.com",
  messagingSenderId: "28695350382",
  appId: "1:28695350382:web:54df05ca900be94f2f2a7f",
  measurementId: "G-B26JS1Y945"
}

// Initialize Firebase
// const analytics = getAnalytics(init);
export const init = initializeApp(firebaseConfig);

// init firestore
export const db = getFirestore(init)