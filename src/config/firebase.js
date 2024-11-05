/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6JE6Yh3M0aEglUrvy7n11Lo2pxAsppXU",
  authDomain: "practica-10-2024.firebaseapp.com",
  projectId: "practica-10-2024",
  storageBucket: "practica-10-2024.firebasestorage.app",
  messagingSenderId: "423598679232",
  appId: "1:423598679232:web:fdb7decf3f94b684fab925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, TEST } from '@env';
 
console.log(TEST);
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
};
 
// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} else {
  app = getApp();
  console.log('Firebase already initialized');
}
 
const database = getFirestore(app);
if (database) {
  console.log('Firestore initialized correctly');
} else {
  console.log('Firestore initialization failed');
}
 
const storage = getStorage(app);
if (storage) {
  console.log('storage initialized correctly');
} else {
  console.log('storage initialization failed');
}
 
const authentication = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
console.log(firebaseConfig);
export { database, storage, authentication };