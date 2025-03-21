import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGJILiVtWa6iLMWcnKrcZ3uc2l6uzzTOs",
  authDomain: "miniblog-7ee11.firebaseapp.com",
  projectId: "miniblog-7ee11",
  storageBucket: "miniblog-7ee11.firebasestorage.app",
  messagingSenderId: "673818002225",
  appId: "1:673818002225:web:235edba64f64685f82e610"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };