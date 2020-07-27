/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import db from '../db';

const posts = db.collection('posts');

const actions = {
  // delete a post
  async deletePost(_, postId) {
    try {
      const res = await posts.doc(postId).delete();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  },
};

export default {
  namespaced: true,
  actions,
};
