import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgg1aq5ZghXDoAcQH1dRidsDQlS8vSuBY",
  authDomain: "app-churrasc0.firebaseapp.com",
  projectId: "app-churrasc0",
  storageBucket: "app-churrasc0.appspot.com",
  messagingSenderId: "12252831301",
  appId: "1:12252831301:web:f13b8a113e9641c5b94d2c",
  measurementId: "G-MP5QC4HZ0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };
