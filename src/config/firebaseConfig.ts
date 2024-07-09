// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjoKOAT231Q0HYl1wPH9OBFxHZCRN2zhI",
  authDomain: "school-software-c9e7b.firebaseapp.com",
  databaseURL: "https://school-software-c9e7b-default-rtdb.firebaseio.com",
  projectId: "school-software-c9e7b",
  storageBucket: "school-software-c9e7b.appspot.com",
  messagingSenderId: "204933217752",
  appId: "1:204933217752:web:4a6335e4129fd6b4d746ad",
  measurementId: "G-LV7R92E6D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default app;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBBdt_4jyw5Ps2tgxVB6wf9mdYFq8lg4sA",
//   authDomain: "react-question-cdaa5.firebaseapp.com",
//   databaseURL: "https://react-question-cdaa5-default-rtdb.firebaseio.com",
//   projectId: "react-question-cdaa5",
//   storageBucket: "react-question-cdaa5.appspot.com",
//   messagingSenderId: "897726814348",
//   appId: "1:897726814348:web:06fb6bd4309437c30943a9",
//   measurementId: "G-MK5RJBFQCP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

