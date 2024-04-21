import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAK_M7dfvJvPhr6vo22CLnU_tTITpH-k0Y",
    authDomain: "administrator-a4320.firebaseapp.com",
    projectId: "administrator-a4320",
    storageBucket: "administrator-a4320.appspot.com",
    messagingSenderId: "45105503750",
    appId: "1:45105503750:web:e1c043ed9fef0cc6902d87",
    measurementId: "G-DJFCBNQVHG"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseConfig, firebaseApp };
