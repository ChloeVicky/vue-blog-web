import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1NjeXv1POOpD7cQ7yiJfYP54mdn2ZQKw",
    authDomain: "vue-blog-web.firebaseapp.com",
    projectId: "vue-blog-web",
    storageBucket: "vue-blog-web.appspot.com",
    messagingSenderId: "711422921660",
    appId: "1:711422921660:web:7be9f6afc1bf7a0296f9b9",
    measurementId: "G-P3MP9CMYRQ"
};

//initialize the app
const firebaseAPP = firebase.initializeApp(firebaseConfig);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { timeStamp };
export default firebaseAPP.firestore();
