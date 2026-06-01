// Import the functions you need from the SDKs via CDN for browser compatibility
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANnOJ_5DiOY3h5q1sVdXqrAblSGynCqKQ",
  authDomain: "zaba-emajun-islam.firebaseapp.com",
  projectId: "zaba-emajun-islam",
  storageBucket: "zaba-emajun-islam.firebasestorage.app",
  messagingSenderId: "593592059226",
  appId: "1:593592059226:web:bfd81719f87e065dc19f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export instances for use in the project
export const auth = getAuth(app);
export const db = getFirestore(app);
