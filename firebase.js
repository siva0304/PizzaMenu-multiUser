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

// 🔑 Your Firebase config (from your project)
const firebaseConfig = {
  apiKey: "AIzaSyAoI9MuR9bxjGPEsN6dkRXtgsZQBHE_dyE",
  authDomain: "pizza-shop-1ae16.firebaseapp.com",
  projectId: "pizza-shop-1ae16",
  storageBucket: "pizza-shop-1ae16.firebasestorage.app",
  messagingSenderId: "304818543883",
  appId: "1:304818543883:web:0bf176528aecef4483d60e",
  measurementId: "G-HSFWEKM99M"
};

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
