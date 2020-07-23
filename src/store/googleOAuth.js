import firebase from '../firebase';

const state = {
  user: {},
  isLoggedIn: false,
};

const actions = {
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
  async logOut() {
    await firebase.auth().signOut();
  },
};

const mutations = {
  setUser(_, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
