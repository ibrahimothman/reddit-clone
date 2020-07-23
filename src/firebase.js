import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCoqjpqf9WP8wBobP97cy1LejrNxq0B5eg',
  authDomain: 'reddit-clone-b555f.firebaseapp.com',
  databaseURL: 'https://reddit-clone-b555f.firebaseio.com',
  projectId: 'reddit-clone-b555f',
  storageBucket: 'reddit-clone-b555f.appspot.com',
  messagingSenderId: '342509878658',
  appId: '1:342509878658:web:241e35a3c8d669b694e39b',
  measurementId: 'G-MN8XPM7PJC',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
