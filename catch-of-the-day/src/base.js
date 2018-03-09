import Rebase from "re-base";
import firebase from "firebase";
import { firebaseConnection } from "./config";

const firebaseApp = firebase.initializeApp(firebaseConnection);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
