<template>
  <section>
    <h1>{{ subreddit.name }}</h1>
    <button
      @click="showForm = !showForm"
      class="button is-primary margin"
      type="submit">Add Post</button>
    <create-post v-if="showForm" :onCreatePost="onCreatePost"></create-post>
    <single-post class="margin" v-for="post in posts"
      :key="post.id"
      :post="post"
      :user="usersById[post.user_id]"
    >
    </single-post>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import CreatePost from '../components/CreatePost.vue';
import SinglePost from '../components/SinglePost.vue';

export default {
  data: () => ({
    showForm: false,
  }),
  components: {
    CreatePost,
    SinglePost,
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
  },
  methods: {
    ...mapActions('subreddit',
      ['initSubreddit', 'initPosts', 'createPost']),
    ...mapActions('users', ['initUsers']),
    async onCreatePost(post) {
      await this.createPost(post);
      this.showForm = false;
    },
  },
};
</script>

<style scoped>
  .margin {
    margin-top: 2em;
  }
</style>
