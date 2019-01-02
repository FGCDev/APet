import FirebaseApp from "./fb";

class UsersDatabase {
  constructor() {
    const firestore = new FirebaseApp().firestore();
    this.usersCollection = firestore.collection("users");
    this.users = {};
  }

  data = id => (id ? this.users[id] : this.users);

  get = () =>
    this.usersCollection
      .orderBy("name")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.users[doc.id] = doc.data();
        });
      })
      .then(() => this.users);

  post = (user = {}) =>
    this.usersCollection
      .add(user)
      .then(docRef => {
        this.users[docRef.id] = user;
      })
      .catch(err =>
        console.error("An error ocurred when pushing a new user", err)
      )
      .finally(() => this.users);
}

let usersDatabaseSingleton = null;

export default function() {
  if (!usersDatabaseSingleton) {
    usersDatabaseSingleton = new UsersDatabase();
  }
  return usersDatabaseSingleton;
}