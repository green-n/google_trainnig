import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAXPAHhyncKmhIjR8bmHlh6UkLd67yWHDk",
    authDomain: "chat-ex-fbe74.firebaseapp.com",
    projectId: "chat-ex-fbe74",
    storageBucket: "chat-ex-fbe74.appspot.com",
    messagingSenderId: "734437932961",
    appId: "1:734437932961:web:8664a560bd8892b0e1d5e0",
    measurementId: "G-4BSR0ZDX6L"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export{signInWithGoogle,auth,db}