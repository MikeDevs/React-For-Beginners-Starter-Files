import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD27D9WQxJqK7QCyodTmbyFIvhsHiW4wWo",
  authDomain: "catchoftheday-b453f.firebaseapp.com",
  databaseURL: "https://catchoftheday-b453f.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
