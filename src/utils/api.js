import firebase from "../components/Firebase/Firebase";
import { getGroupChatId, getTimestamp } from "./functions-helpers";
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export const usersAPI = {
  getUsers(fromUid) {
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
          return response.user;
        })
        .then(
          user => {
            auth.currentUser.sendEmailVerification({
              url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT
            });
            resolve(user);
          },
          err => reject(err)
        );
    });
  },
  signInUser({ email, password }) {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          return response.user;
        })
        .then(
          user => {
            resolve(user);
          },
          err => reject(err)
        );
    });
  },
  checkSession() {
    return new Promise(resolve => {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          db.collection("users")
            .doc(authUser.uid)
            .get()
            .then(doc => {
              const id = doc.id;
              return resolve({
                id,
                ...doc.data(),
                emailVerified: authUser.emailVerified,
                metadata: { ...authUser.metadata }
              });
            });
        } else {
          resolve(authUser);
        }
      });
    });
  },
  signOutUser() {
    auth
      .signOut()
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  }
};
export const dialogAPI = {
  getDialog(userRoomID, fromUid) {
    const groupChatId = getGroupChatId(userRoomID, fromUid);
    return db
      .collection("chatrooms")
      .doc(groupChatId)
      .collection("messages")
      .get()
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => {
          const id = doc.id;
          return { id, ...doc.data() };
        })
      );
  },

  // getDialogListener(userRoomID, fromUid) {
  //   const groupChatId = getGroupChatId(userRoomID, fromUid);
  //   const unsubscribe = db.collection("chatrooms")
  //       .doc(groupChatId)
  //       .collection("messages")
  //       .where("createdAt", ">", new Date())
  //       .orderBy("createdAt", "desc")
  //       .limit(1)
  //       .onSnapshot(
  //         {
  //           // Listen for document metadata changes
  //           includeMetadataChanges: true
  //         },
  //         querySnapshot => {
  //           querySnapshot.docChanges().forEach(change => {
  //             if (change.type === "added" && change.newIndex === 0) {
  //               setDialog(5555)
  //               return({ id: change.doc.id, ...change.doc.data() });
  //             }
  //           });
  //         }
  //       );
  //   return unsubscribe
  // },

  addNewMessage(formData, userRoomID, fromUid) {
    const groupChatId = getGroupChatId(userRoomID, fromUid);
    const newMessage = {
      toUid: userRoomID,
      fromUid: fromUid,
      message: formData,
      createdAt: getTimestamp()
    };
    db.collection("chatrooms")
      .doc(groupChatId)
      .collection("messages")
      .doc(getTimestamp().seconds.toString())
      .set(newMessage);
    return { id: getTimestamp().seconds.toString(), ...newMessage };
  }
};
export const uploadFileAPI = {
  uploadFile(file, path) {
    console.log(file);
    const storageRef = storage.ref(`${path}/${file.name}`);
    return storageRef.put(file).then(snapshot => {
      return snapshot.metadata.name;
    });
  },
  getFile(fileName, filePhat) {
    return storage
      .ref(filePhat)
      .child(fileName)
      .getDownloadURL()
      .then(url => {
        return url;
      });
  }
};

export const updateUserAPI = {
  updateAvatar(fileURL, userId) {
    return db
      .collection("users")
      .doc(userId)
      .update({
        photoURL: fileURL
      })
      .then(() => {
        console.info(`Аварат для ${fileURL} успешно обновлен`);
      });
  }
};
