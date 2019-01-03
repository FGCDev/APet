import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'

import { FirebaseConfig } from "./keys.js";

firebase.initializeApp(FirebaseConfig);

const fs = firebase.firestore();
const auth = firebase.auth().useDeviceLanguage();
const userColRef = fs.collection("users");

export const getUserDocRef = (uID) => {
	return userColRef.doc(uID);
}

export const getDocRef = (url_path) => {
	return fs.doc(url_path);
}


/*
	In firestore things start with a collection.
	each collection contains only documents. Collections simply can't containt any key-val pairs.
	each document stores key-value pairs (or Fields) ie objData or sub-collections and so on.

	when querying back only shallow queries are returned. as in only the immediate documents shall be returned
*/
const uID = "sasds13312";
const userpiDocRef = getDocRef('users/'+uID+'/personaldata/'+'name');
userpiDocRef.set({
	//userName: Profiler.userName
}).then(success => {
	console.log("FS write Successful. Status:", success);
}).catch(err => {
	console.log("FS write returned an error. Here goes nufink:", err);
})


const getRTUpdates = () => {
	userpiDocRef.onSnapshot((doc)=> {
		if (doc && doc.exists) return doc.data();
	})
}


export const dbRef = firebase.database().ref();

//System related database references
export const articlesRef_3P = dbRef.child("articles-by3p");
export const articlesRef_Team = dbRef.child("articles-byteam");
export const articlesRef_Users = dbRef.child("articles-byusers");

//User related Database references
export const usersRef = dbRef.child("users");

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

// export const pushRef = firebase.messaging();

//Method to get the data with the current userID
export const getUserRef = (uID) => {
	return dbRef.child('users/' + uID);
}