import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';
import auth from './googleOAuth';
import subreddits from './subreddits';
import subreddit from './subreddit';
import users from './users';
import posts from './posts';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    auth,
    subreddits,
    subreddit,
    users,
    posts,
  },
});
