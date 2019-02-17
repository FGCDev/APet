import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
import "firebase/firebase-messaging";
import { FirebaseConfig } from "./envFB/keys";

firebase.initializeApp(FirebaseConfig);

/*################ cloud Firestore Refs and Functions ################ */
const fs = firebase.firestore();

const userColRef = fs.collection("users");
export const getUserDocRef = uID => {
	return userColRef.doc(uID);
};

export const getDocRef = url_path => {
	return fs.doc(url_path);
};

/*
	In firestore things start with a collection.
	each collection contains only documents. Collections simply can't containt any key-val pairs.
	each document stores key-value pairs (or Fields) ie objData or sub-collections and so on.
	when querying back only shallow queries are returned. as in only the immediate documents shall be returned
*/
// const test_uID = "sasds13312";
// const test_uName = "JohnathanDoe"
// const userpifsDocRef = getDocRef("users/" + test_uID + "/personaldata/" + test_uName);
// userpifsDocRef
// 	.set({
// 		userName: test_uName
// 	})
// 	.then(success => {
// 		console.log("FS write Successful. Status:", success);
// 	})
// 	.catch(err => {
// 		console.log("FS write returned an error. Here goes nufink:", err);
// 	});

// export const getRTUpdates = () => {
// 	userpifsDocRef.onSnapshot(doc => {
// 		if (doc && doc.exists) return doc.data();
// 	});
// };

/*################ FB Auth Refs and Functions ################ */
export const authRef = firebase.auth().useDeviceLanguage();
export const gProvider = new firebase.auth.GoogleAuthProvider();
// export const authRef = firebase
// 	.auth()
// 	.signInWithRedirect(provider)
// 	.useDeviceLanguage();

/*################ FB Realtime Database Refs and Functions ################ */
export const rtdbRef = firebase.database().ref();

//System related database references
export const booksRef = rtdbRef.child("books");
export const testsRef = rtdbRef.child("tests");

//User related Database references
export const usersRef = rtdbRef.child("users");

//Method to get the data with the current userID
export const getUserRef = uID => {
	return rtdbRef.child("users/" + uID);
};

/*################ FB Storage Refs and Functions ################ */

/*################ FB Messaging Refs and Functions ################ */
// export const pushRef = firebase.messaging();
export default firebase;