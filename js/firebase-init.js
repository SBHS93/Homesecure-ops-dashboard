import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCjA-LTSvWiJqVjMh6SLMI3AkumPJgl2ro",
  authDomain: "home-ops-dashboard.firebaseapp.com",
  projectId: "home-ops-dashboard",
  storageBucket: "home-ops-dashboard.firebasestorage.app",
  messagingSenderId: "668957172690",
  appId: "1:668957172690:web:574a59d4e106e7537fde0b",
  measurementId: "G-ZE2TSRNMMD"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
