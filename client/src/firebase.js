// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (you can get this from your Firebase console)
// const firebaseConfig = {
//   apiKey: "AIzaSyAdBbOJaEPKm-X98VNqnseXLeGpFOIZkM0",
//   authDomain: "clothing-ecommerce-633fb.firebaseapp.com",
//   projectId: "clothing-ecommerce-633fb",
//   storageBucket: "clothing-ecommerce-633fb.firebasestorage.app",
//   messagingSenderId: "257638692162",
//   appId: "1:257638692162:web:8dcd2a35511d3c8f57c4db",
//   measurementId: "G-CB6WQSHZG1"
// };

const firebaseConfig = {
  apiKey: "AIzaSyB4rWodGiR0dmmpXENPJ2l_xWVy_FoE1So",
  authDomain: "eclothing-5f52e.firebaseapp.com",
  projectId: "eclothing-5f52e",
  storageBucket: "eclothing-5f52e.firebasestorage.app",
  messagingSenderId: "582525875427",
  appId: "1:582525875427:web:f60279b7e49ce50328c1d6",
  measurementId: "G-0458BQZCSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
// Export both auth and googleProvider
export { auth, googleProvider, db };
