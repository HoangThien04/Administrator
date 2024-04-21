import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK_M7dfvJvPhr6vo22CLnU_tTITpH-k0Y",
  authDomain: "administrator-a4320.firebaseapp.com",
  projectId: "administrator-a4320",
  storageBucket: "administrator-a4320.appspot.com",
  messagingSenderId: "45105503750",
  appId: "1:45105503750:web:e1c043ed9fef0cc6902d87",
  measurementId: "G-DJFCBNQVHG"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function GetADocument() {
  var ref = doc(db, "doctor", NkHRUUWUlObj5vVEREBY)
  const docSnap = await getDoc(ref);
}

