import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyASnSyA5SAn-8DAwAX_-tJslVkNsC5CQuk",
    authDomain: "reactchat-6e497.firebaseapp.com",
    databaseURL: "https://reactchat-6e497.firebaseio.com",
    projectId: "reactchat-6e497",
    storageBucket: "reactchat-6e497.appspot.com",
    messagingSenderId: "100812895910",
    appId: "1:100812895910:web:518353bfe7413c79b2e667"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.database();
    }

    users = () => this.db.ref('/users');

}
export default Firebase;