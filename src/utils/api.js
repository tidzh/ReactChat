import firebase from "../components/Firebase/Firebase";
import { getGroupChatId, getTimestamp, splitUserId } from "./functions-helpers";
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export const usersAPI = {
  getAllUsers() {
    return db
      .collection("users")
      .get()
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => {
          return { uid: doc.id, ...doc.data() };
        })
      );
  },
  getUsersDialog(fromUid) {
    return db
      .collection("chatrooms")
      .get()
      .then(querySnapshot => {
        const promisesRefs = [];
        querySnapshot.docs.forEach(doc => {
          if (doc.id.includes(fromUid)) {
            const data = doc.data();
            const lastMessages = data.messages[data.messages.length - 1];
            const user = splitUserId(doc.id).filter(item => item !== fromUid);
            promisesRefs.push({id:doc.id, ...lastMessages, uid: user[0], whoId: lastMessages.uid === fromUid && true });
          }
        });
        return promisesRefs;
      });
  },
  getUser(userId) {
    return db
      .collection("users")
      .doc(userId)
      .get()
      .then(doc => {
        return { id: doc.id, ...doc.data() };
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
            db.collection("users")
              .doc(user.uid)
              .update({
                status: true
              });
            resolve(user);
          },
          err => reject(err)
        );
    });
  },
  signOutUser(userId) {
    auth
      .signOut()
      .then(() => {
        db.collection("users")
          .doc(userId)
          .update({
            lastSignOutTime: getTimestamp(),
            status: false
          });
      })
      .catch(error => {
        console.log(error);
      });
  },
  checkSession() {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          db.collection("users")
            .doc(authUser.uid)
            .get()
            .then(doc => {
              const id = doc.id;
              resolve({
                id,
                ...doc.data(),
                emailVerified: authUser.emailVerified,
                metadata: { ...authUser.metadata }
              });
            });
        } else {
          reject(authUser);
        }
      });
    });
  }
};
export const dialogAPI = {
  getHistory(userRoomID, fromUid) {
    const groupChatId = getGroupChatId(userRoomID, fromUid);
    return db
      .collection("chatrooms")
      .doc(groupChatId)
      .get()
      .then(res => {
        if (res.data() !== undefined) {
          return Object.values(res.data().messages);
        } else {
          return [];
        }
      });
  },

  addNewMessage(formData, userRoomID, fromUid) {
    const groupChatId = getGroupChatId(userRoomID, fromUid);
    const newMessage = {
      uid: fromUid,
      content: formData,
      createdAt: getTimestamp()
    };
    db.collection("chatrooms")
      .doc(groupChatId)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion(newMessage)
      })
      .catch(() => {
        db.collection("chatrooms")
          .doc(groupChatId)
          .set({ messages: [newMessage] });
      });
    return { id: getTimestamp().nanoseconds.toString(), ...newMessage };
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
