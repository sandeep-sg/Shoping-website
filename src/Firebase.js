// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ9cQy5w6fccaa5VDGXis9u9CaBOSHfPc",
  authDomain: "e-commerce-shoping-6c98d.firebaseapp.com",
  projectId: "e-commerce-shoping-6c98d",
  storageBucket: "e-commerce-shoping-6c98d.appspot.com",
  messagingSenderId: "975002632803",
  appId: "1:975002632803:web:f33bfce9964c841e48ae56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
