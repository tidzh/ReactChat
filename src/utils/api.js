import firebase from "../components/Firebase/Firebase";
const db = firebase.firestore();
const auth = firebase.auth();

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
export const authAPI = {
  registerUser({ email, password, name }) {
    return new Promise((resolve, reject) => {
      auth.createUserWithEmailAndPassword(email, password).then(
        response => {
          db.collection("users")
            .doc(response.user.uid)
            .set({
              name: name,
              ava: "",
              status: false,
              verif: false
            });
          resolve(response);
        },
        err => reject(err)
      );
    });
  },
  signInUser({ email, password }) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
