import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDVy17Shus7AaCB_SOu4IO87crjdQVDeZQ",
    authDomain: "e-manager-f0a7c.firebaseapp.com",
    projectId: "e-manager-f0a7c",
    storageBucket: "e-manager-f0a7c.firebasestorage.app",
    messagingSenderId: "838052491293",
    appId: "1:838052491293:web:89a6368364b6b3011d56f4",
    measurementId: "G-7X74S9Y1YY"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);