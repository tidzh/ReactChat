import { getGroupChatId } from "../../utils/functions-helpers";
import { setDialog } from "./dialog";
import firebase from "../../components/Firebase/Firebase";
const db = firebase.firestore();

export const dialogListenerRequest = (userRoomID, fromUid) => dispatch => {
  const groupChatId = getGroupChatId(userRoomID, fromUid);
  db.collection("chatrooms").onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
      if (change.doc.id === groupChatId) {
        const lastPost = change.doc.data().messages;
        if (fromUid !== lastPost[lastPost.length - 1].uid) {
          dispatch(setDialog(lastPost[lastPost.length - 1]));
        }
      }
    });
  });
};
