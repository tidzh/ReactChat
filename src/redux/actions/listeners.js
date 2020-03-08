import { getGroupChatId } from "../../utils/functions-helpers";
import { setDialog } from "./dialog";
import firebase from "../../components/Firebase/Firebase";
const db = firebase.firestore();

export const newDialogListener = (userRoomID, fromUid) => dispatch => {
  const groupChatId = getGroupChatId(userRoomID, fromUid);
  db.collection("chatrooms")
    .doc(groupChatId)
    .collection("messages")
    .where("createdAt", ">", new Date())
    .orderBy("createdAt", "desc")
    .limit(1)
    .onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === "added" && change.newIndex === 0) {
          dispatch(setDialog({ id: change.doc.id, ...change.doc.data() }));
        }
      });
    });
};