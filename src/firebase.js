import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: '',
    authDomain: "wechat-2f5b0.firebaseapp.com",
    projectId: "wechat-2f5b0",
    storageBucket: "wechat-2f5b0.appspot.com",
    messagingSenderId: "717847715768",
    appId: "1:717847715768:web:d0536430c8eaa38845f94d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();