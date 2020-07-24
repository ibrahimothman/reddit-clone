<template>
    <form @submit.prevent="createPost">
        <b-field label="Title">
            <b-input v-model="post.title"></b-input>
        </b-field>

        <b-field label="Description">
            <b-input
              type="textarea"
              v-model="post.description">
            </b-input>
        </b-field>

        <b-field label="URL"
            type="URL">
            <b-input v-model="post.URL"></b-input>
        </b-field>
        <button class="button is-success" type="submit">Add Post</button>
    </form>
</template>

<script>
export default {
  props: ['onCreatePost'],
  data: () => ({
    post: {
      title: '',
      description: '',
      URL: '',
    },
  }),
  methods: {
    async createPost() {
      await this.onCreatePost(this.post);
      this.post = {
        title: '',
        description: '',
        URL: '',
      };
    },
  },
};
</script>
