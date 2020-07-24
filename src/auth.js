import firebase from './firebase';
import db from './db';
import store from './store';

firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    // User is signed in.
    console.log(user.displayName);
    const data = {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    await db.collection('users').doc(data.id).set(data);
    store.commit('auth/setUser', data);
  } else {
    // No user is signed in.
    console.log('no auth user');
    store.commit('auth/setUser', null);
  }
});
