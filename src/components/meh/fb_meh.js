// import  firebase from "firebase/app";

// import { FirebaseConfig } from "./keys.js";
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
