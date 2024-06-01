import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyDXbnqrb8H6M0eVmCFJm4IWwGQ37RBwxQ0",
    authDomain: "truedar-412518.firebaseapp.com",
    projectId: "truedar-412518",
    storageBucket: "truedar-412518.appspot.com",
    messagingSenderId: "277803355956",
    appId: "1:277803355956:web:7f578b42f2e5db867e1f61"
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage,auth };
