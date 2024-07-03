  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth,signInWithEmailAndPassword,onAuthStateChanged,signOut  } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  import { getDatabase, ref, onValue,child,get,set,remove,update } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDL-ikj3Aj6_HM7VaYLkVEqdpWRKQ0ujI4",
    authDomain: "thechaibar-4af7a.firebaseapp.com",
    databaseURL: "https://thechaibar-4af7a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "thechaibar-4af7a",
    storageBucket: "thechaibar-4af7a.appspot.com",
    messagingSenderId: "213366627526",
    appId: "1:213366627526:web:feebee88be315a24264bc7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const dbRef = ref(getDatabase());
  const db = getDatabase(app);


  export {auth,signInWithEmailAndPassword,onAuthStateChanged,
    dbRef, ref, onValue,child,get,set,db,remove,update,signOut }
