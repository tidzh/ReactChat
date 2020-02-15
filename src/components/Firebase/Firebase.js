import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "../../config/firebaseConfig";

firebase.initializeApp(firebaseConfig);

export default firebase;
