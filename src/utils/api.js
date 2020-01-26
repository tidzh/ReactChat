import firebase from "../components/Firebase/Firebase";
const db = firebase.firestore();

export const usersAPI = {
  getUsers() {
    return db
      .collection("users")
      .get()
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => {
          const id = doc.id;
          return { id, ...doc.data() };
        })
      );
  },
  getUser(userId) {
    return db
      .collection("users")
      .doc(userId)
      .get()
      .then(doc => {
        const id = doc.id;
        return { id, ...doc.data() };
      });
  }
};
