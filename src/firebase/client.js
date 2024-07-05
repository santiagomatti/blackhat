import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMHIIKY4GIr5wGzDsXKVc5WcIGmYthTEk",
    authDomain: "blackhat-react.firebaseapp.com",
    projectId: "blackhat-react",
    storageBucket: "blackhat-react.appspot.com",
    messagingSenderId: "479745564833",
    appId: "1:479745564833:web:3f0fb1d518a78d374290e0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);