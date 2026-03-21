import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2n-SAK9Oyr5WU6cxKTUVBUlwbt3RiaIA",
  authDomain: "supreme-auto-project.firebaseapp.com",
  projectId: "supreme-auto-project",
  storageBucket: "supreme-auto-project.firebasestorage.app",
  messagingSenderId: "168184784245",
  appId: "1:168184784245:web:0e063b2463d6851daa9f3c",
  measurementId: "G-F2FEG4QWXH"
};

const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
