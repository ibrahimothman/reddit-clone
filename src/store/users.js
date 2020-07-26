/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { firestoreAction } from 'vuexfire';
import db from '../db';

const users = db.collection('users');

const state = {
  users: [],
};

const getters = {
  usersById: (state) => state.users.reduce((byId, user) => {
    byId[user.id] = user;
    return byId;
  }, {}),
};

const actions = {
  // get current subreddit
  initUsers: firestoreAction(async ({ bindFirestoreRef }) => {
    // return the promise returned by `bindFirestoreRef`
    await bindFirestoreRef('users', users);
  }),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
