import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDA54y_ck6Szt8AYx2vghZ4oOgVwqWZb8M",
  authDomain: "social-media-app-e7d15.firebaseapp.com",
  projectId: "social-media-app-e7d15",
  storageBucket: "social-media-app-e7d15.appspot.com",
  messagingSenderId: "384406669170",
  appId: "1:384406669170:web:d670271c7511e4f5a23feb",
  measurementId: "G-XZGD1DCGX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};