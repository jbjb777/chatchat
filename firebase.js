import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCi0cus6PFFospMymbmILW7jHFu3OBoABY",
  authDomain: "chatchat-98586.firebaseapp.com",
  databaseURL: "https://chatchat-98586-default-rtdb.firebaseio.com",
  projectId: "chatchat-98586",
  storageBucket: "chatchat-98586.firebasestorage.app",
  messagingSenderId: "112409356117",
  appId: "1:112409356117:web:b0c92c82a863ad989371dc",
  measurementId: "G-QJPEQXT3JQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
