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
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          db.collection("users")
            .doc(response.user.uid)
            .set({
              displayName: name,
              email: email,
              photoURL: "",
              status: false,
              emailVerified: false
            });
        })
        .then(
          response => {
            auth.currentUser.sendEmailVerification({
              url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
            })
            resolve(response);
          },
          err => reject(err)
        );
    });
  },
  signInUser({ email, password }) {
    return new Promise((resolve, reject) => {
      auth.signInWithEmailAndPassword(email, password).then(
        user => {
          resolve(user);
        },
        err => reject(err)
      );
    });
  },
  checkToken() {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
    });
  },
  emailVerification() {
    console.log(auth.currentUser)
   
    auth.currentUser.sendEmailVerification()
  }
};
