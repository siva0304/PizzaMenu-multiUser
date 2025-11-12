// firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import {
  getFirestore, collection, doc, getDoc, getDocs, query, where,
  addDoc, updateDoc, deleteDoc, runTransaction, writeBatch,
  onSnapshot, setDoc
} from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import {
  getStorage, ref as storageRef, uploadBytes, getDownloadURL
} from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js';

// 🔑 Firebase config
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore + Storage
const db = getFirestore(app);
const storage = getStorage(app);

// 🌍 Expose globally so index.html can use it
window.db = db;
window.storage = storage;
window.fs = {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
  runTransaction,
  writeBatch,
  onSnapshot,
  setDoc
};
window.storageHelpers = { storageRef, uploadBytes, getDownloadURL };

console.log("✅ Firebase initialized:", db);
