import firebase from "../components/Firebase/Firebase";

const db = firebase.firestore();

export const usersAPI = {
  getUsers() {
    return db
      .collection("users")
      .get()
      .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()));
  }
};