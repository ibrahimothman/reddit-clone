/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { firestoreAction } from 'vuexfire';
import firebase from '../firebase';
import db from '../db';

const posts = db.collection('posts');
const subreddits = db.collection('subreddits');

const state = {
  subreddits: [],
  posts: [],
};

const getters = {
  subreddit: (state) => state.subreddits[0] || {},
};

const actions = {
  // get current subreddit
  initSubreddit: firestoreAction(async ({ bindFirestoreRef }, name) => {
    // return the promise returned by `bindFirestoreRef`
    await bindFirestoreRef('subreddits',
      subreddits.where('name', '==', name));
  }),

  // get subreddit's posts
  initPosts: firestoreAction(async ({ bindFirestoreRef }, subredditId) => {
    // return the promise returned by `bindFirestoreRef`
    await bindFirestoreRef('posts',
      posts.where('subreddit_id', '==', subredditId)
        .orderBy('created_at', 'desc'));
  }),

  // add a post
  async createPost({ getters, rootState }, post) {
    const { id } = posts.doc();
    post.id = id;
    post.created_at = firebase.firestore.FieldValue.serverTimestamp();
    post.subreddit_id = getters.subreddit.id;
    post.user_id = rootState.auth.user.id;
    try {
      await posts.doc(post.id).set(post);
    } catch (err) {
      console.error(err);
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
