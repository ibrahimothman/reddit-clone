<template>
  <section>
    <h1>{{ subreddit.name }}</h1>
    <button
      v-if="isLoggedIn"
      @click="showForm = !showForm"
      class="button is-primary margin"
      type="submit">Add Post</button>
    <create-post v-if="showForm" :onCreatePost="onCreatePost"></create-post>
    <filter-posts
      :onSearchTermChanged="onSearchTermChanged"
    ></filter-posts>
    <single-post class="margin" v-for="post in filterPosts"
      :key="post.id"
      :post="post"
      :user="loadingUsers[post.user_id]"
      :deletePost="onDeletePost"
    >
    </single-post>
  </section>
</template>

<script>
/* eslint-disable no-param-reassign */
import { mapActions, mapGetters, mapState } from 'vuex';
import CreatePost from '../components/CreatePost.vue';
import SinglePost from '../components/SinglePost.vue';
import FilterPosts from '../components/Filter.vue';

export default {
  data: () => ({
    showForm: false,
    searchTerm: '',
  }),
  components: {
    CreatePost,
    SinglePost,
    FilterPosts,
  },
  async created() {
    await this.initSubreddit(this.$route.params.name);
    await this.initUsers();
  },
  watch: {
    async subreddit() {
      if (this.subreddit.id) {
        await this.initPosts(this.subreddit.id);
      }
    },
  },
  computed: {
    ...mapGetters({
      subreddit: 'subreddit/subreddit',
      usersById: 'users/usersById',
    }),
    ...mapState('subreddit', ['posts']),
    ...mapState('auth', ['isLoggedIn']),
    loadingUsers() {
      return this.posts.reduce((byId, post) => {
        byId[post.user_id] = this.usersById[post.user_id] || {
          name: '......',
        };
        return byId;
      }, {});
    },
    filterPosts() {
      if (this.searchTerm) {
        const regexp = new RegExp(this.searchTerm, 'i');
        return this.posts.filter((post) => (post.title + post.description).match(regexp));
      }
      return this.posts;
    },
  },
  methods: {
    ...mapActions('subreddit',
      ['initSubreddit', 'initPosts', 'createPost']),
    ...mapActions({
      initUsers: 'users/initUsers',
      deletePost: 'posts/deletePost',
    }),
    async onCreatePost(post) {
      await this.createPost(post);
      this.showForm = false;
    },
    onSearchTermChanged(val) {
      this.searchTerm = val;
    },
    async onDeletePost(postId) {
      await this.deletePost(postId);
    },
  },
};
</script>

<style scoped>
  .margin {
    margin-top: 2em;
  }
</style>
