import firebase from "firebase/app";
import "firebase/messaging"
import "firebase/firestore"
import "firebase/storage"
import { firebaseConfig } from "./keys";

firebase.initializeApp(firebaseConfig);

export default firebase;

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore().enablePersistence()
.catch(function(err) {
	if (err.code == 'failed-precondition') {
		// Multiple tabs open, persistence can only be enabled
		// in one tab at a a time.
		// ...
	} else if (err.code == 'unimplemented') {
		// The current browser does not support all of the
		// features required to enable persistence
		// ...
	}
});

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

// Firebase Real-Time Storage
export const dbRef = firebase.database().ref();

//System related database references
export const articlesRef_3P = dbRef.child("articles-by3p");
export const articlesRef_Team = dbRef.child("articles-byteam");
export const articlesRef_Users = dbRef.child("articles-byusers");

//User related Database references
export const usersRef = dbRef.child("users");

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const pushRef = firebase.messaging();

//Method to get the data with the current userID
export const getUserRef = (uID) => {
	return dbRef.child('users/' + uID);
}

// class FirebaseApp {
//   constructor(config = {}) {
//     if (!FirebaseApp.defaultApp) {
//       FirebaseApp.defaultApp = firebase.initializeApp(firebaseConfig);
//     }
//   }

//   messaging() {
//     if (!FirebaseApp.messaging) {
//       require("firebase/messaging");
//       FirebaseApp.messaging = FirebaseApp.defaultApp.messaging();
//     }
//     return FirebaseApp.messaging;
//   }

//   firestore() {
//     if (!FirebaseApp.firestore) {
//       require("firebase/firestore");
//       FirebaseApp.firestore = FirebaseApp.defaultApp.firestore();
//       FirebaseApp.firestore.settings({
//         timestampsInSnapshots: true
//       });
//     }
//     return FirebaseApp.firestore;
//   }

//   storage(){
//     if(!FirebaseApp.storage){
//       require("firebase/storage");
//       const storage = firebase.storage();
//       FirebaseApp.storageRef = storage.ref();
//     }
//     return FirebaseApp.storageRef;
//   }
// }

// FirebaseApp.defaultApp = undefined;
// FirebaseApp.messaging = undefined;
// FirebaseApp.firestore = undefined;
// FirebaseApp.storageRef = undefined;

// export default FirebaseApp;


// import * as firebase from "firebase";

// import { FirebaseConfig } from "./keys.js";

