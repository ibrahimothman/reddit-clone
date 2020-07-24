/* eslint-disable arrow-body-style */
import { firestoreAction } from 'vuexfire';
import db from '../db';

const state = {
  subreddits: [],
};

const actions = {
  bindSubreddits: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by `bindFirestoreRef`
    return bindFirestoreRef('subreddits', db.collection('subreddits').orderBy('created_at', 'desc'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};
