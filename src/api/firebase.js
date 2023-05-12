import firebase from '../api/firebase';



const firebaseConfig = {
  apiKey: "AIzaSyA4GsFITjrs1Ni1NxTX2rcQp5dlNwt7Y28",
  authDomain: "habit-tracker-9886a.firebaseapp.com",
  projectId: "habit-tracker-9886a",
  storageBucket: "habit-tracker-9886a.appspot.com",
  messagingSenderId: "607011550353",
  appId: "1:607011550353:web:6677fca44f1c812ca67b30",
  measurementId: "G-DRCFJXDVNN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const app = {
  firebase,
  auth: firebase.auth(),
  firestore: firebase.firestore(),
  db: firebase.database(),
};

export default app;
