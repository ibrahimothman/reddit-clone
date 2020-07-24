<template>
  <section>
    <h1>post</h1>
    <create-post :onCreatePost="onCreatePost"></create-post>
    <pre> {{ posts }} </pre>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import CreatePost from '../components/CreatePost.vue';

export default {
  components: {
    CreatePost,
  },
  created() {
    this.initSubreddit(this.$route.params.name);
  },
  watch: {
    subreddit() {
      if (this.subreddit.id) {
        this.initPosts(this.subreddit.id);
      }
    },
  },
  computed: {
    ...mapGetters('subreddit', ['subreddit']),
    ...mapState('subreddit', ['posts']),
  },
  methods: {
    ...mapActions('subreddit',
      ['initSubreddit', 'initPosts', 'createPost']),
    async onCreatePost(post) {
      await this.createPost(post);
    },
  },
};
</script>
