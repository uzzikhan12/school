// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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


// const firebaseConfig = {
//   apiKey: "AIzaSyD6I9IIGZdwY3W8i7nhl9kVciDpVg9CAbk",
//   databaseURL:"https://school-5ef11-default-rtdb.firebaseio.com/",
//   authDomain: "school-5ef11.firebaseapp.com",
//   projectId: "school-5ef11",
//   storageBucket: "school-5ef11.appspot.com",
//   messagingSenderId: "435885089683",
//   appId: "1:435885089683:web:f862523fea1812db9f7e66",
//   measurementId: "G-923VL2VKND"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

