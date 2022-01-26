import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "blood-donors-1.firebaseapp.com",
    projectId: "blood-donors-1",
    storageBucket: "blood-donors-1.appspot.com",
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: "G-ECN7P8KGG1"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  