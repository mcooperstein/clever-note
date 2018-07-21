import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBnVZOuyvXMNBW3s0u3QzlDuDVQj7D84pk",
  authDomain: "clever-note-ccc3d.firebaseapp.com",
  databaseURL: "https://clever-note-ccc3d.firebaseio.com",
  projectId: "clever-note-ccc3d",
  storageBucket: "clever-note-ccc3d.appspot.com",
  messagingSenderId: "674230369557"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();
export { db, auth, storage };
