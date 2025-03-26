const firebaseConfig = {
  apiKey: "AIzaSyBZ25mHlctg_IAmfcBSFCV3KjlBckN7gj4",
  authDomain: "project-kelly-e4747.firebaseapp.com",
  projectId: "project-kelly-e4747",
  storageBucket: "project-kelly-e4747.firebasestorage.app",
  messagingSenderId: "903736434258",
  appId: "1:903736434258:web:86276321bf0473bce4898b",
  measurementId: "G-2SEY9Q5F9Q"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a Firestore
const db = firebase.firestore();
